package deploydb

/**
 * ModelType
 *
 * Enumeration to track type of the Model
 *
 * ALERT - All the Models store the "status" in DB as an integer; hence
 *         please DO NOT REMOVE OR CHANGE ORDER. You CAN ONLY ADD TO THIS LIST
 */
enum ModelType {
    SERVICE,      /* 0 */
    PIPELINE,     /* 1 */
    ENVIRONMENT,
    PROMOTION,
    WEBHOOK
}

