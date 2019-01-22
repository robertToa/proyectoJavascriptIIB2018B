/**
 * Cabello.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'db_cabello',

  attributes: {
    linkImagenCabello: {
      type: 'string',
      required: true,
      unique: true,
      columnName: 'link_imagen_cabello'
    },

    consumidorAvatar: {
      collection: 'ConsumidorAvatar',
      via: 'idCabello'
    }


  },

};

