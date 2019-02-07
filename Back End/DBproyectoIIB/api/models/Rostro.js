/**
 * Rostro.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'db_rostro',

  attributes: {
    linkImagen: {
      type: 'string',
      required: true,
      unique: true,
      columnName: 'link_imagen'
    },

    consumidorAvatar: {
      collection: 'ConsumidorAvatar',
      via: 'idRostro'
    }
  },

};

