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
  
import Reviews from "../models/Reviews.js";
  
  const getDetails = async (req, res) => {
      const result = await Reviews.find({});
      let reviewReport = [];
      
      for(const el of result ) {
        let Restaurant = await Restro.findOne({RID: el.RID});
        let restaurantName;
        if(Restaurant === null){
          restaurantName = 'Anonymous'
        }
        else restaurantName = Restaurant.name;
        reviewReport = [...reviewReport, { RID: el.RID, Restaurant_Name: restaurantName, Total_Reviews: el.Review.length }];
      }
      getResponse(res, reviewReport);
  };
  
  
export {
    getDetails
  };
  