/**
 * ConsumidorController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  login: async (req, res) => {
    const parametros = req.allParams();
    var usuarioLogeado = await Consumidor.find({
      username: parametros.username,
      password: parametros.password,
    });
    if(usuarioLogeado){
      return res.ok(usuarioLogeado);
    }else{
      return res.badRequest({mensaje:'Usuario Invalido'});
    }
  },
  buscarUsername: async (req, res) => {
    const parametros = req.allParams();
    var usuarioLogeado = await Consumidor.find({
      username: parametros.username,
    });
    if(usuarioLogeado){
      return res.ok(usuarioLogeado);
    }else{
      return res.badRequest({mensaje:'Usuario Invalido'});
    }
  }

};

