/**
 * Accesorio.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'db_accesorio',

  attributes: {
    linkImagenAccesorio: {
      type: 'string',
      columnName: 'link_imagen_accesorio'
    }
  },

};

