package deploydb.models.promotion

import deploydb.auth.User

interface PromotionImpl {
    boolean validate(User user, Map<String, Object> attributes)
}