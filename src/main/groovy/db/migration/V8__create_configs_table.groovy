package db.migration

import java.sql.DatabaseMetaData


/**
 * Example of a Java-based migration.
 */
class V8__create_configs_table extends DeployDBMigration {

    /** Return migration number to differentiate from other versions */
    @Override
    Integer getChecksum() {
        return 8
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
         * Add modelConfigs table
         */
        if (isPostgres(metadata.driverName)) {
          commands += """
            CREATE SEQUENCE model_configs_id_seq;
            CREATE TABLE modelConfigs (
                id BIGINT DEFAULT nextval('model_configs_id_seq'),
                checksum VARCHAR(64) NOT NULL,
                contents TEXT NOT NULL,
                ident VARCHAR(8192),
                modelType INT NOT NULL,
                createdAt TIMESTAMP,
                deletedAt TIMESTAMP NULL,
                PRIMARY KEY (id)
            );
        """
        }
        else {
        commands += """
            CREATE TABLE modelConfigs (
                id BIGINT AUTO_INCREMENT,
                checksum VARCHAR(64) NOT NULL,
                contents TEXT NOT NULL,
                ident VARCHAR(8192),
                modelType INT NOT NULL,
                createdAt TIMESTAMP,
                deletedAt TIMESTAMP NULL,
                PRIMARY KEY (id)
            );
        """
        }

        /*
         * Add checksum column to flows table
         */
        commands += """
            ALTER TABLE flows ADD COLUMN checksum VARCHAR(64);
        """

        return commands
    }
}
