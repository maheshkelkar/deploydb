package deploydb.models.promotion

import deploydb.auth.User


class ManualLDAPPromotionImpl implements PromotionImpl {

    boolean validate(User user, Map<String, Object> attributes) {
        /**
         * Validation succeeds if:
         * - "allowedGroup" is configured and user belongs to the group
         * Validation fails in all the remaining cases
         */
        return attributes && attributes["allowedGroup"] &&
                user && user.groups.contains(attributes["allowedGroup"])
    }
}