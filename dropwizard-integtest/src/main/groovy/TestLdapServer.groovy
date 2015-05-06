package dropwizardintegtest

import com.unboundid.ldap.listener.InMemoryDirectoryServer
import com.unboundid.ldap.listener.InMemoryDirectoryServerConfig
import com.unboundid.ldap.listener.InMemoryListenerConfig
import com.unboundid.ldap.sdk.Attribute
import com.unboundid.ldap.sdk.DN
import com.unboundid.ldap.sdk.Entry
import com.unboundid.ldap.sdk.OperationType
import com.unboundid.ldif.LDIFReader
import org.slf4j.Logger
import org.slf4j.LoggerFactory


final class TestLdapServer {

    /**
     * The in-memory instance of the UnboundID directory server.
     */
    private InMemoryDirectoryServer server = null

    /**
     * The base/root DN of the LDAP directory.
     */
    private String baseDN = "dc=example,dc=com"
    /**
     * The distinguished name of the admin account.
     */
    private String adminCN = "cn=admin"
    /**
     * The password for the admin account.
     */
    private String passwd = "secret"
    /**
     * The LDIF file used to seed the LDAP directory.
     */
    private File ldifFile = new File("src/test/resources/testLdapServerConfig.ldif")
    /**
     * The TCP port on which the server is listening for LDAP traffic.
     */
    private int serverPort = 10389

    private static final Logger logger = LoggerFactory.getLogger(TestLdapServer.class)

    /**
     * Configure and start the embedded UnboundID server creating the base DN and loading the LDIF seed data.
     */
    void start() {
        try {
            logger.info("Starting UnboundID server")
            final InMemoryListenerConfig listenerConfig =
                    InMemoryListenerConfig.createLDAPConfig("testLdapListener", serverPort)
            final InMemoryDirectoryServerConfig config = new InMemoryDirectoryServerConfig(new DN(baseDN))
            config.setListenerConfigs(listenerConfig)
            config.setSchema(null)
            if (adminCN != null) {
                config.addAdditionalBindCredentials(adminCN, passwd)
            }
            config.setAuthenticationRequiredOperationTypes(OperationType.BIND)
            server = new InMemoryDirectoryServer(config)
            server.add(new Entry(baseDN, new Attribute("objectclass", "domain", "top")))
            if (ldifFile != null) {
                final InputStream inputStream = new FileInputStream(ldifFile)
                try {
                    final LDIFReader reader = new LDIFReader(inputStream)
                    server.importFromLDIF(false, reader)
                } finally {
                    inputStream.close()
                }
            }
            server.startListening()
            logger.info("Started UnboundID server")
        } catch (final Exception e) {
            logger.error("Could not launch embedded UnboundID directory server", e)
        }
    }

    /**
     * Shutdown the the embedded UnboundID server.
     */
    void stop() {
        if (server) {
            logger.info("Stopping UnboundID server")
            server.shutDown(true)
        }
        logger.info("Stopped UnboundID server")
    }
}
