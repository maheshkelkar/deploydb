package db.migration

import java.sql.DatabaseMetaData


/**
 * Example of a Java-based migration.
 */
class V6__create_promotion_results_table extends DeployDBMigration {

    /** Return migration number to differentiate from other versions */
    @Override
    Integer getChecksum() {
        return 6
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
         * Create promotionResults table
         */
        if (isPostgres(metadata.driverName)) {
            commands += """
            CREATE SEQUENCE promotion_results_id_seq;
            CREATE TABLE promotionResults (
                id BIGINT DEFAULT nextval('promotion_results_id_seq'),

                promotion VARCHAR(8192) NOT NULL,
                status INT NOT NULL,
                infoUrl TEXT,
                deploymentId BIGINT NOT NULL,

                createdAt TIMESTAMP,
                deletedAt TIMESTAMP NULL,

                PRIMARY KEY (id),
                FOREIGN KEY (deploymentId) REFERENCES deployments(id)
            );
        """

        } else {
        commands += """
            CREATE TABLE promotionResults (
                id BIGINT AUTO_INCREMENT,

                promotion VARCHAR(8192) NOT NULL,
                status INT NOT NULL,
                infoUrl TEXT,
                deploymentId BIGINT NOT NULL,

                createdAt TIMESTAMP,
                deletedAt TIMESTAMP NULL,

                PRIMARY KEY (id),
                FOREIGN KEY (deploymentId) REFERENCES deployments(id)
            );
        """
        }

        /* Create index on deployments table */
        commands += """
            ALTER TABLE deployments ADD COLUMN service VARCHAR(8192) NOT NULL;
        """

        return commands
    }
}
