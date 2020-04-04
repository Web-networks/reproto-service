package raid.neuroide.reproto.service.db

import org.jetbrains.exposed.sql.*
import raid.neuroide.reproto.PrototypeStorageGateway

object Prototypes : Table("prototypes") {
    val id = varchar("id", 64)
    val prototype = text("prototype")

    override val primaryKey = PrimaryKey(id)
}

class PrototypesDb(private val db: Db) : PrototypeStorageGateway {
    init {
        db.transaction {
            SchemaUtils.create(Prototypes)
        }
    }

    override fun store(id: String, prototype: String) = db.transaction {
        val row = Prototypes.update({ Prototypes.id.eq(id) }) {
            it[Prototypes.prototype] = prototype
        }
        if (row == 0) {
            Prototypes.insert {
                it[Prototypes.id] = id
                it[Prototypes.prototype] = prototype
            }
        }
    }

    override fun load(id: String): String? = db.transaction {
        Prototypes.select {
            Prototypes.id.eq(id)
        }.map {
            it[Prototypes.prototype]
        }.firstOrNull()
    }
}
