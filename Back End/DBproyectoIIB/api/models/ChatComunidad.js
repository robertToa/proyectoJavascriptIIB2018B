/**
 * ChatComunidad.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'db_chat_comunidad',

  attributes: {
    mensajeChat: {
      type: 'string',
      required: true,
      columnName: 'mensaje_chat'
    },

    idConsumidor: {
      model: 'Consumidor'
    },
    idComunidad: {
      model: 'Comunidad'
    }
  },

};

