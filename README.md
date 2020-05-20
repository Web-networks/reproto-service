Neuroide Reproto Service
=======================

This is a server part of the prototype representation layer for Neuroide.

### Running

The following command will start the service in an example configuration: sqlite, autoreload, port 8080, example enabled.

```sh
./gradlew run
```

To run in production you have to configure it.

### Endpoints

| Endpoint                                    | Description                                                  | Status                 | Content-Type     | Info                                                         |
| ------------------------------------------- | ------------------------------------------------------------ | ---------------------- | ---------------- | ------------------------------------------------------------ |
| POST /prototypes                            | Create new model                                             | CREATED                | Text/Plain       | Returns id of created model                                  |
| GET /prototypes/{id}                        | Download model by id                                         | OK                     | Application/JSON | Serialized model                                             |
|                                             |                                                              | NOT FOUND              | Text/Plain       | Requested prototype not found                                |
| GET /prototypes/{id}/updates?since=revision | Get updates for the model. Revision describes updates already known to the requester. See details in Data Formats section. | OK                     | Application/JSON | List of objects. Each object represents an update.           |
|                                             |                                                              | BAD REQUEST            | Text/Plain       | Revision not specified or has wrong format                   |
|                                             |                                                              | NOT FOUND              | Text/Plain       | Updates since requested revision are not available for specified prototype |
| POST /updates                               | Post new update                                              | NO CONTENT             | -                |                                                              |
|                                             |                                                              | UNSUPPORTED MEDIA TYPE | Text/Plain       | Only JSON is accepted                                        |
|                                             |                                                              | BAD REQUEST            | Text/Plain       | Object is corrupted                                          |

### Data formats

The service is supposed to be used in conjunction with the library reproto, which handles serialization and deserialization itself. However, it may come in handy to know some aspects of the data format to perform validation and work with prototype revisions.

#### Update

Each update consists of **id chain**, **index** and **payload**.

```js
{
	"id" : [
		"xxx::2", // model id
		"lc4138::1", // layer id
		"Surname" // parameter name
	],
	"index" : {
		"site" : "lc4138", // id of the node which issued the update
		"time" : 7         // local per-model counter of that node
	},
	"payload" : {
		// ...
	}
}
```

#### Revision

Current state of the model is described by its revision. Revision is an associative array which maps node ids to the number of applied updates which was issued by that node. Parameter `index` from the previous JSON is used exactly to update the model revision.

Revision is accepted by `GET /prototypes/{id}/updates?since=revision` endpoint as URI parameter to inform the server which updates are already known to the caller and should not be transferred. Here `revision` is a URI-encoded JSON of the following structure:

```js
{
	"lc4138" : 6,
	"lc2774" : 25,
	"serv0" : 16
}
```

Note that **the channel** between client and service **must not reorder messages**. Attempts to feed the node with updates which were already applied to the prototype will be silently skipped. However, reordering or loss of messages will result in runtime errors (luckily) or model corruption (unluckily).

### Configuration

Minor adjustments can be made with command line arguments.

```sh
# to use 8000 port and disable example:
./gradlew run --args="-port=8000 -P:ktor.application.enableExample=false"
```

But more convenient way is to provide an external configuration file.

```sh
./gradlew run --args="-config=app.conf"
```

Example configuration file can be found [here](https://github.com/Web-networks/reproto-service/blob/master/src/main/resources/application.conf).

### See also

* [reproto](https://github.com/Web-networks/reproto)
* [Design Document](https://docs.google.com/document/d/1cHbbvcdDRKtzS8CAxQvWhC8s5-DHV13p52g1_WXXRvo/edit?usp=sharing)
