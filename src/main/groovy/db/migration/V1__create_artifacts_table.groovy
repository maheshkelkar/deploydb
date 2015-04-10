package db.migration

import java.sql.DatabaseMetaData


/**
 * Example of a Java-based migration.
 */
class V1__create_artifacts_table extends DeployDBMigration {

    /** Return migration number to differentiate from other versions */
    @Override
    Integer getChecksum() {
        return 1
    }

    /**
     * Gather sql commands for this migration
     *
     * @param metadata
     * @return List of sql commands
     */
    List<String> prepareCommands(DatabaseMetaData metadata) {

        /* Sql commands */
        List<String> commands = []

        /*
         * Add artifacts table
         */
        /* Change groupName data type*/
        if (isPostgres(metadata.driverName)) {
            commands += """
            CREATE SEQUENCE artifacts_id_seq;
            CREATE TABLE artifacts (
                id BIGINT DEFAULT nextval('artifacts_id_seq'),

                groupName TEXT NOT NULL,

                name TEXT NOT NULL,

                PRIMARY KEY (id)
            );
        """
        } else {
            commands += """
            CREATE TABLE artifacts (
                id BIGINT AUTO_INCREMENT,

                groupName TEXT NOT NULL,

                name TEXT NOT NULL,

                PRIMARY KEY (id)
            );
        """
        }
        return commands
    }
}
