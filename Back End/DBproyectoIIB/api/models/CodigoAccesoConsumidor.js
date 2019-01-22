/**
 * CodigoAccesoConsumidor.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'db_codigo_acceso_consumidor',

  attributes: {
    codigoAcceso: {
      type: 'string',
      required: true,
      columnName: 'codigo_acceso',
      unique: true
    },
    idConsumidor: {
      model: 'Consumidor'
    },
    idDepartamento:{
      model: 'Departamento'
    }
  },

};

