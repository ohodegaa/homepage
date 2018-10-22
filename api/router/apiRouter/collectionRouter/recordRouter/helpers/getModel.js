const mongoose = require("mongoose")
const getSchemaDef = require("../../../../../utils/propertyTypes").getSchemaDef
/**
 *
 * @param Collection
 * @returns {Model | Model<T>}
 */

module.exports = Collection => {
    console.log(mongoose.modelNames())
    if (mongoose.modelNames().includes(Collection._modelName)) {
        return mongoose.model(Collection._modelName)
    }
    const schema = {}
    Collection.properties.map(prop => {
        schema[prop.key] = getSchemaDef(prop.propertyType)
    })
    const Schema = mongoose.Schema(schema)
    return mongoose.model(Collection._modelName, Schema)
}
