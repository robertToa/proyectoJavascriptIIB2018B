/**
 * Comunidad.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'db_comunidad',
  attributes: {
    nombreComunidad: {
      type: 'string',
      unique: true,
      required: true,
      columnName: 'nombre_comunidad'
    },
    consumidorComunidad:{
      collection: 'ConsumidorComunidad',
      via: 'idComunidad'
    },
    chatComunidad: {
      collection: 'ChatComunidad',
      via: 'idComunidad'
    }
  },

};

