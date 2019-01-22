/**
 * Rostro.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'db_rostro',

  attributes: {
    linkImagenRostro: {
      type: 'string',
      required: true,
      unique: true,
      columnName: 'link_imagen_rostro'
    },

    consumidorAvatar: {
      collection: 'ConsumidorAvatar',
      via: 'idRostro'
    }
  },

};

