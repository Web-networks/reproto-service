let predefinedParams = ["Name", "Surname", "Age"];

function clearBody() {
    let els = document.body.getElementsByTagName("*");
    while (els.length) {
        document.body.removeChild(els[0]);
    }
}

function initLayerParams(inputs, layer, callbacks) {
    for (let name in inputs) {
        if (!inputs.hasOwnProperty(name))
            return;

        inputs[name].value = layer.get(name).value;
        inputs[name].oninput = function() {
            callbacks.setParameter(layer, name, inputs[name].value);
        }
    }
}

function initUI(callbacks) {
    return {
        build: function (layers) {
            console.log("UI: rebuild layer seq");
            console.log(layers);
            clearBody();

            for (let i = 0; i < layers.length * 2 + 1; i++) {
                let el;
                let index = Math.floor(i / 2);
                if (i & 1) {
                    let block = buildLayerBlock(predefinedParams);
                    el = block.element;
                    initLayerParams(block.params, layers[index], callbacks);
                    layers[index].block = block;
                } else {
                    el = buildAddLayerButton(index, callbacks);
                }
                document.body.appendChild(el);
            }
        },
        parameterChanged: function(layer, paramName, wrapper) {
            if (!layer.block)
                return;
            let params = layer.block.params;
            if (params[paramName])
                params[paramName].value = wrapper.value;
        }
    };
}

function buildAddLayerButton(index, callbacks) {
    let element = document.createElement("input");
    element.setAttribute("type", "button");
    element.onclick = ev => {
        callbacks.addLayer(index);
    };
    element.value = "+";
    return element;
}

function buildLayerBlock(params) {
    let block = document.createElement("div");
    let paramInputs = {};
    params.forEach(name => {
        let paramDiv = document.createElement("div");
        let paramName = document.createElement("span");
        paramName.innerHTML = name;
        let paramInput = document.createElement("input");
        paramName.setAttribute("type", "text");
        paramInputs[name] = paramInput;
        paramDiv.appendChild(paramName);
        paramDiv.appendChild(paramInput);
        block.appendChild(paramDiv);
        block.className = 'layer-block';
    });

    return {
        element: block,
        params: paramInputs
    };
}
