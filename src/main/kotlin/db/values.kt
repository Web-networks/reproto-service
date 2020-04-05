package raid.neuroide.reproto.service.db

import org.jetbrains.exposed.sql.*
import raid.neuroide.reproto.PersistentValue

private object LongValues : Table("long_values") {
    val name = varchar("id", 64)
    val value = long("value")

    override val primaryKey = PrimaryKey(name)
}

class ValuesDb(private val db: Db) {
    init {
        db.transaction {
            SchemaUtils.create(LongValues)
        }
    }

    fun store(name: String, value: Long) = db.transaction {
        val row = LongValues.update({ LongValues.name.eq(name) }) {
            it[LongValues.value] = value
        }
        if (row == 0) {
            LongValues.insert {
                it[LongValues.name] = name
                it[LongValues.value] = value
            }
        }
    }

    fun load(name: String): Long? = db.transaction {
        LongValues.select {
            LongValues.name.eq(name)
        }.map {
            it[LongValues.value]
        }.firstOrNull()
    }

    fun value(name: String): PersistentValue<Long> =
        LongValuePersister(name)

    private inner class LongValuePersister(private val name: String): PersistentValue<Long> {
        override fun get(): Long? = load(name)

        override fun set(v: Long) {
            store(name, v)
        }
    }
}
