package raid.neuroide.reproto.service

import raid.neuroide.reproto.ServiceNode
import raid.neuroide.reproto.crdt.VectorTimestamp

class WebService(site: String = "") {
    private val node = ServiceNode(site, 2000)

    suspend fun createPrototype(): String {
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
