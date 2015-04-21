package deploydb.models.Promotion

import deploydb.auth.User

interface PromotionImpl {
    boolean validate(User user, Map<String, Object> attributes)
}