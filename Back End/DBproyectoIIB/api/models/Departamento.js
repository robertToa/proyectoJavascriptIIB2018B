/**
 * Departamento.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'db_departamento',
  attributes: {
    pisoDepartamento:{
      type: 'number',
      required: true,
      min: 0,
      max: 5,
      columnName: 'piso_departamento'
    },
    numeroDepartamento: {
      type: 'number',
      required: true,
      unique: true,
      min: 0,
      max: 60,
      columnName: 'numero_departamento'
    },
    consumidorDepartamento: {
      collection: 'ConsumidorDepartamento',
      via: 'idDepartamento'
    },
    codigoAccesoConsumidor:{
      collection: 'CodigoAccesoConsumidor',
      via: 'idDepartamento'
    }
  },

};

