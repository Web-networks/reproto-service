let rp = reproto.raid.neuroide.reproto;

let gateway = {
    processors: [],

    // this callback is called to download the whole prototype
    load: function (id) {
        console.log("Requested model " + id);
        let self = this;
        loadPrototype(id).then(serialized => {
            console.log("Got model " + id);
            console.log(JSON.parse(serialized));
            if (self.receiver) {
                self.receiver(id, serialized);
            }
        });
    },

    // node accepts downloaded prototypes through receiver
    setReceiver: function (receiver) {
        this.receiver = receiver;
        console.log("Receiver set");
    },

    // node accepts remote updates with processor
    subscribe: function (processor) {
        this.processors.push(processor);
        console.log("Processor added");
    },

    // this callback is called to publish locally issued update
    publishUpdate: function (update) {
        console.log("Issued local update: ");
        console.log(JSON.parse(update));
        postUpdate(update);
    },

    // this callback is called after any (remote or locally generated) update is processed by node
    // and after the model was loaded first time
    requestSync: function (id, revision) {
        let self = this;
        this.revision = revision;
        if (!this.inSync) {
            this.inSync = true;
            setInterval(() => {
                loadUpdates(id, self.revision).then(updates => {
                    updates.forEach(u => {
                        console.log("Received update");
                        console.log(JSON.parse(u));
                        self.processors.forEach(p => p(u))
                    });
                })
            }, 800);
        }
    }
};

// the next functions communicate with reproto-service directly
// in real application they will do it through backend

async function loadPrototype(id) {
    let response = await fetch("/prototypes/" + id);
    return await response.text();
}

async function createPrototype() {
    let response = await fetch("/prototypes", {
        method: "POST"
    });
    return await response.text();
}

async function loadUpdates(id, since) {
    let response = await fetch("/prototypes/" + id + "/updates?since=" + encodeURIComponent(since));
    let upds = await response.json();
    return upds.map(u => JSON.stringify(u));
}

async function postUpdate(update) {
    await fetch("/updates", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: update
    });
}


// this function issues local node id
// in real application must do and validate it

function genNodeId(prefix) {
    let nodeId = prefix;
    for (let i = 0; i < 2; i++)
        nodeId += Math.round(Math.random() * 4096*1024);
    return nodeId;
}

async function initExample() {
    let node = new rp.ClientNode(genNodeId("example-local"));
    node.setGateway(gateway);

    // this endpoint returns the same id on each call
    // only for testing purposes
    let prototypeId = await (await fetch("/example")).text();
    function withPrototype(callback) {
        node.getPrototype(prototypeId, callback);
    }

    let ui = initUI({
        addLayer: index => {
            withPrototype( p => {
                p.addLayer(index);
            });
        },
        removeLayer: index => {
            withPrototype( p => {
                p.removeLayer(index);
            });
        },
        setParameter: (layer, name, value) => {
            withPrototype( p => {
                layer.get(name).value = value;
            });
        }
    });

    let callbacks = {
        layerAdded: function(index, layer) {
            // index === -1, but it is goint to be fixed
            withPrototype(p => ui.build(p.layers));
        },
        layerRemoved : function(index, layer) {
            // index === -1, but it is goint to be fixed
            withPrototype(p => ui.build(p.layers));
        },
        layerMoved: function(from, to, layer) {
            withPrototype(p => ui.build(p.layers));
        },

        parameterChanged: function(layer, paramName, wrapper) {
            // wrapper is a register wrapper
            // it is accessible via properties: value (string), intValue, booleanValue
            // float is going to be supported too
            ui.parameterChanged(layer, paramName, wrapper);
        }
    };

    withPrototype( p => {
        // p may be null if the prototype with specified id does not exist

        p.setListeners(callbacks);
        ui.build(p.layers);
    })
}

window.onload = function() {
    initExample();
};
