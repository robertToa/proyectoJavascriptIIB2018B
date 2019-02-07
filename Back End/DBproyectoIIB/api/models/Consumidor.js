/**
 * Consumidor.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'db_consumidor',

  attributes: {
    fechaNacimiento: {
      type: 'string',
      required: true,
      columnName: 'fecha_nacimiento'
    },
    username: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true
    },

    consumidorAvatar: {
      collection: 'ConsumidorAvatar',
      via: 'idConsumidor'
    },

    idPersona:{
      model: 'Persona'
    },
    consumidorComunidad:{
      collection: 'ConsumidorComunidad',
      via: 'idConsumidor'
    },
    chatComunidad: {
      collection: 'ChatComunidad',
      via: 'idConsumidor'
    },
    consumidorDepartamento: {
      collection: 'ConsumidorDepartamento',
      via: 'idConsumidor'
    },
    codigoAccesoConsumidor:{
      collection: 'CodigoAccesoConsumidor',
      via: 'idConsumidor'
    }

  },

};

