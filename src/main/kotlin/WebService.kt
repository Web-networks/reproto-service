package raid.neuroide.reproto.service

import io.ktor.config.ApplicationConfig
import io.ktor.util.KtorExperimentalAPI
import raid.neuroide.reproto.ServiceNode
import raid.neuroide.reproto.crdt.VectorTimestamp
import raid.neuroide.reproto.service.db.Db
import raid.neuroide.reproto.service.db.PrototypesDb
import raid.neuroide.reproto.service.db.UpdatesDb

@OptIn(KtorExperimentalAPI::class)
class WebService(conf: ApplicationConfig) {
    private val node = ServiceNode(conf.property("site").getString(), 2000)
    private val db: Db

    init {
        val dbConf = conf.config("db")
        db = dbConf.run {
            Db(
                propertyOrNull("url")?.getString(),
                propertyOrNull("user")?.getString(),
                propertyOrNull("password")?.getString()
            )
        }

        initGateways()
    }

    private fun initGateways() {
        node.addGateway(PrototypesDb(db))
        node.addGateway(UpdatesDb(db))
    }

    fun createPrototype(): String {
        return node.createPrototype()
    }

    suspend fun postUpdate(update: String) {
        node.postUpdate(update)
    }

    suspend fun loadPrototype(id: String): String {
        return node.load(id) ?: throw NotFoundException("Requested prototype not found")
    }

    suspend fun getUpdates(id: String, since: VectorTimestamp): List<String> {
        return node.getUpdates(id, since, 100)
            ?: throw NotFoundException("Updates since requested revision are not available of specified prototype")
    }
}
