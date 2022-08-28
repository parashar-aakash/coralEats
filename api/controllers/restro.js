import {
    NotFoundInCatch,
    error500,
    error404,
    error422
  } from "../lib/error.js";
  import {
    updateResponse,
    getResponse
  } from "../lib/response.js";
  
  import Restro from "../models/Restro.js";
  
  const create = (req, res) => {
    const RID= Math.floor(1000 + Math.random() * 9000);
    const finalData = { ...req.body, RID };
    const restro = new Restro(finalData);
    restro.save()
      .then(restro => {
        updateResponse(res, restro, 'restro created successfully.');
      })
      .catch(err => {
        error422(res, err);
        error500(
          res,
          err.message || "Some error occurred while creating the restro."
        );
      });
  };
  
  const findRestro = async (req, res) => {
      Restro.find({RID: req.params.id})
      .select({ '_id': 0, name: 1, address: 1, description: 1 })
      .then(restroOne => { console.log('result', restroOne);
        if (!restroOne) error404(res, `Restro not found with id ${req.params.id}`);
        else getResponse(res, restroOne);
            })
      .catch(err => {
        console.log('catch');
        NotFoundInCatch(res, err, `Restros not found with id ${err.value}`);
        error500(res, `Error retrieving Restros with id ${err.value}`);
      });
  
  };
  
  const findAllRestros = async (req, res) => {
      Restro.find({})
      .select({ '_id': 0, name: 1, address: 1, description: 1 })
      .then(restroOne => { console.log('result', restroOne);
        if (!restroOne) error404(res, "Restros not found");
        else getResponse(res, restroOne);
            })
      .catch(err => {
        console.log('catch');
        NotFoundInCatch(res, err, `Restros not found`);
        error500(res, `Error retrieving Restros with id ${err.value}`);
      });
  
  };
  
export {
    create,
    findRestro,
    findAllRestros,
  };
  