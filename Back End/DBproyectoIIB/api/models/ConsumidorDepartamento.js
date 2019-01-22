/**
 * ConsumidorDepartamento.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'db_consumidor_departamento',
  attributes: {
    habilitarDepartamento: {
      type: 'boolean',
      columnName: 'habilitar_departamento',
      defaultsTo: false
    },
    idConsumidor: {
      model: 'Consumidor'
    },
    idDepartamento: {
      model: 'Departamento'
    }
  },

};

