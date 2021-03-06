/**
 * ConsumidorComunidad.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'db_consumidor_comunidad',
  attributes: {
    idConsumidor: {
      model: 'Consumidor'
    },
    idComunidad: {
      model: 'Comunidad'
    }
  },

};

