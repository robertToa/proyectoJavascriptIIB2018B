/**
 * ConsumidorAvatar.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'db_consumidor_avatar',
  attributes: {
    idAccesorio: {
      model: 'Accesorio'
    },
    idCabello: {
      model: 'Cabello'
    },
    idRostro: {
      model: 'Rostro'
    },
    idVestimenta: {
      model: 'Vestimenta'
    },
    idConsumidor: {
      model: 'Consumidor'
    }
  },

};

