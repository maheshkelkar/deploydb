package deploydb.dao

import deploydb.ModelType
import deploydb.models.ModelConfig
import groovy.transform.InheritConstructors
import io.dropwizard.hibernate.AbstractDAO
import org.hibernate.criterion.Restrictions
import org.hibernate.criterion.Order


/**
 * modelConfig Data access object
 */
@InheritConstructors
class ModelConfigDAO extends AbstractDAO<ModelConfig> {

    /**
     * Locate ModelConfig matching the modelType, identifier and checksum of config iteration
     *
     * @param modelType A Enum of Model type (Service, Pipeline, etc.)
     * @param ident Identifier of the Model
     * @param configChecksum Checksum of the configuration iteration
     * @return null or ModelConfig if found
     */
    ModelConfig findModelConfig(
            ModelType modelType,
            String ident,
            String configChecksum) {
        return criteria()
                .add(Restrictions.eq('modelType', modelType))
                .add(Restrictions.eq('ident', ident))
                .add(Restrictions.eq('checksum', configChecksum))
                .addOrder(Order.desc('createdAt')).uniqueResult()
    }
}
