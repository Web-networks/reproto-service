package raid.neuroide.reproto.service.db

import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.Transaction
import org.jetbrains.exposed.sql.transactions.DEFAULT_REPETITION_ATTEMPTS
import org.jetbrains.exposed.sql.transactions.transaction
import java.sql.Connection
import java.sql.DriverManager
import java.sql.SQLException

class Db(url: String? = null, user: String? = null, password: String? = null) {
    private val conn: Database

    init {
        val finalUrl = url ?: "jdbc:sqlite:bot-test.db"
        val driver = try {
            DriverManager.getDriver(finalUrl).javaClass.name
        } catch (_: SQLException) {
            when {
                finalUrl.contains("sqlite") -> "org.sqlite.JDBC"
                finalUrl.contains("postgres") -> "org.postgresql.Driver"
                else -> throw RuntimeException("Cannot determine jdbc driver")
            }
        }
        conn = Database.connect(finalUrl, driver, user = user ?: "", password = password ?: "")
    }

    fun <T> transaction(statement: Transaction.() -> T): T =
        transaction(Connection.TRANSACTION_SERIALIZABLE, DEFAULT_REPETITION_ATTEMPTS, conn, statement)
}
