package deploydb.auth

/**
 * User class
 *
 * Once the user is authenticated, this object contains information
 * that user is authorized for
 */
class User {
    /** Username */
    private final String name

    /** Groups that user is authorized to be part of */
    private final Set<String> groups

    User(String name, Set<String> groups) {
        this.name = name
        this.groups = groups
    }
}
