package deploydb.auth

/**
 * User class
 */
class User {
    private final String name
    private final Set<String> groups

    User(String name, Set<String> groups) {
        this.name = name
        this.groups = groups
    }
}
