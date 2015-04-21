package deploydb.models.Promotion

import deploydb.auth.User


class BasicPromotionImpl implements PromotionImpl {
    BasicPromotionImpl() { }

    /** No validation required for basic */
    boolean validate(User user, Map<String, Object> attributes) { true }
}