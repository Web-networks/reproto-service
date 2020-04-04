package raid.neuroide.reproto.service

import io.ktor.application.Application
import io.ktor.application.call
import io.ktor.application.install
import io.ktor.features.StatusPages
import io.ktor.http.ContentType
import io.ktor.http.HttpStatusCode
import io.ktor.request.receiveText
import io.ktor.routing.get
import io.ktor.routing.post
import io.ktor.routing.route
import io.ktor.routing.routing
import kotlinx.serialization.SerializationException
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonConfiguration
import raid.neuroide.reproto.crdt.VectorTimestamp

fun main(args: Array<String>): Unit = io.ktor.server.netty.EngineMain.main(args)

@Suppress("unused", "UNUSED_PARAMETER")
@kotlin.jvm.JvmOverloads
fun Application.module(testing: Boolean = false) {
    val service = WebService()

    install(StatusPages) {
        catchStatus {
            call.respondJson(it.message, it.status)
        }
        exception<SerializationException> {
            call.respondJson("Invalid object", HttpStatusCode.BadRequest)
        }
    }

    routing {
        route("/updates") {
            post {
                call.request.acceptOnly(ContentType.Application.Json)

                val data = call.receiveText()
                service.postUpdate(data)
            }
        }
        route("/prototypes") {
            get("/{id}") {
                val id = call.parameters["id"] ?: throw BadRequestException("Specify prototype id")
                call.respondJson { service.loadPrototype(id) }
            }
            post {
                val id = service.createPrototype()
                call.respondJson(id, HttpStatusCode.Created)
            }
            get("/{id}/updates") {
                val id = call.parameters["id"] ?: throw BadRequestException("Specify prototype id")
                val clockStr = call.request.queryParameters["since"]
                    ?: throw BadRequestException("Specify reference timestamp")

                val clock = Json(JsonConfiguration.Stable).parse(VectorTimestamp.serializer(), clockStr)
                val updates = service.getUpdates(id, clock)
                val result = combineJsonArray(updates)

                call.respondJson(result)
            }
        }
    }
}
