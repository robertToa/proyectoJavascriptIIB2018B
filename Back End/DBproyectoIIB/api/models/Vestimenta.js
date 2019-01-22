/**
 * Vestimenta.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'db_vestimenta',

  attributes: {
    linkImagenVestimenta: {
      type: 'string',
      columnName: 'link_imagen_vestimenta'
    }
  },

};

