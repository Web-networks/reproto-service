package raid.neuroide.reproto.service.db

import org.jetbrains.exposed.sql.*
import raid.neuroide.reproto.LogStorageGateway

object Updates : Table("updates") {
    val prototypeId = Prototypes.varchar("prototype_id", 64)
    val originSite = Prototypes.varchar("origin", 64)
    val originIndex = integer("index")
    val update = text("update")
    val orderIndex = long("order_index").autoIncrement()

    override val primaryKey = PrimaryKey(prototypeId, originSite, originIndex)
}

class UpdatesDb(private val db: Db) : LogStorageGateway {
    override fun restore(
        prototypeId: String,
        sinceRevision: Map<String, Int>,
        maxCount: Int
    ): List<LogStorageGateway.Entry>? = db.transaction {
        // TODO: if garbage collection in logs is implemented we will have to check whether all required updates are available

        Updates
            .select {
                Updates.prototypeId.eq(prototypeId) and buildSelector(sinceRevision)
            }
            .orderBy(Updates.orderIndex)
            .limit(maxCount)
            .map {
                LogStorageGateway.Entry(
                    it[Updates.originSite],
                    it[Updates.originIndex],
                    it[Updates.update]
                )
            }
            .toList()
    }

    @Suppress("RemoveRedundantQualifierName")
    override fun save(prototypeId: String, entry: LogStorageGateway.Entry): Unit = db.transaction {
        Updates.replace {
            it[Updates.prototypeId] = prototypeId
            it[Updates.originIndex] = entry.originIndex
            it[Updates.originSite] = entry.site
            it[Updates.update] = entry.payload
        }
    }

    private fun SqlExpressionBuilder.buildSelector(sinceRevision: Map<String, Int>): Expression<Boolean> {
        val specified = sinceRevision.map {
            Updates.originSite.eq(it.key) and Updates.originIndex.greater(it.value)
        }.reduce { acc, op -> acc or op }
        val unspecified = Updates.originSite.notInList(sinceRevision.keys)

        return specified or unspecified
    }
}
