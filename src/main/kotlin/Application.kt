package raid.neuroide.reproto.service

import io.ktor.application.Application
import io.ktor.application.call
import io.ktor.application.install
import io.ktor.features.StatusPages
import io.ktor.http.ContentType
import io.ktor.http.HttpStatusCode
import io.ktor.http.content.resources
import io.ktor.http.content.static
import io.ktor.request.receiveText
import io.ktor.response.respondBytes
import io.ktor.response.respondRedirect
import io.ktor.routing.*
import io.ktor.util.KtorExperimentalAPI
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock
import kotlinx.serialization.SerializationException
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonConfiguration
import raid.neuroide.reproto.crdt.VectorTimestamp

fun main(args: Array<String>): Unit = io.ktor.server.netty.EngineMain.main(args)

@Suppress("unused", "UNUSED_PARAMETER")
@OptIn(KtorExperimentalAPI::class)
@kotlin.jvm.JvmOverloads
fun Application.module(testing: Boolean = false) {
    val nodeConfig = environment.config.config("ktor.application.service")
    val service = WebService(nodeConfig)

    install(StatusPages) {
        catchStatus {
            call.respondPlainText(it.message, it.status)
        }
        exception<SerializationException> {
            call.respondPlainText("Invalid object", HttpStatusCode.BadRequest)
        }
    }

    routing {
        post("/updates") {
            call.request.acceptOnly(ContentType.Application.Json)

            val data = call.receiveText()
            service.postUpdate(data)
            call.respondBytes(byteArrayOf(), status = HttpStatusCode.NoContent)
        }
        route("/prototypes") {
            get("/{id}") {
                val id = call.parameters["id"] ?: throw BadRequestException("Specify prototype id")
                call.respondJson { service.loadPrototype(id) }
            }
            post {
                val id = service.createPrototype()
                call.respondPlainText(id, HttpStatusCode.Created)
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

        if (environment.config.propertyOrNull("ktor.application.enableExample")?.getString() == "true") {
            initExample(service)
        }
    }
}

private fun Routing.initExample(service: WebService) {
    static {
        resources("example")
    }

    var selectedId: String? = null
    val selectedIdMutex = Mutex()
    get("/example") {
        val id = selectedIdMutex.withLock {
            if (selectedId == null)
                selectedId = service.createPrototype()
            selectedId!!
        }
        call.respondJson(id)
    }
    get("/") {
        call.respondRedirect("/index.html", true)
    }
}
