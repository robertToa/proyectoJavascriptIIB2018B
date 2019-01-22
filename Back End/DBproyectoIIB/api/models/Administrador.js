/**
 * Administrador.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'db_administrador',
  attributes: {
    estadoVigencia:{
      type: 'boolean',
      columnName: 'estado_vigencia',
      defaultsTo: false
    },
    areaEncargada: {
      type: 'string',
      columnName: 'area_encargada',
      isIn: [
        'Administracion Departamentos',
        'Gerencia',
        'Gestion Datos',
        'Gestion App Web',
        'Gestion App Movil'
      ],
      defaultsTo: 'Administracion Departamentos'
    },

    idPersona:{
      model: 'Persona'
    }
  },

};

