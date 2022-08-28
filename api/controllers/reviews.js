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
  
import Reviews from "../models/Reviews.js";
  
  const createReviews = async (req, res) => {
    const finalData = { ...req.body };
    const reviews = new Reviews(finalData);
    const result =await Reviews.find({});
    console.log('result', result);
    const finalReviews = result[0]?[...result[0].Review, req.body.Review]:req.body.Review;
        Reviews.findOneAndUpdate({RID: req.body.RID}, { Review: finalReviews }, { upsert: true })
        .then(restro => {
            updateResponse(res, restro, 'Review created successfully.');
        })
        .catch(err => {
            error422(res, err);
            error500(
                res,
                err.message || "Some error occurred while creating the Review."
                );
            });
  };
  
  const findReviewsById = async (req, res) => {
      Reviews.find({RID: req.params.id})
      .select({ '_id': 0, RID: 1, Review: 1 })
      .then(review => { console.log('result', review);
        if (!review) error404(res, `Review not found with id ${req.params.id}`);
        else getResponse(res, review);
            })
      .catch(err => {
        console.log('catch');
        NotFoundInCatch(res, err, `Review not found with id ${err.value}`);
        error500(res, `Error retrieving Review with id ${err.value}`);
      });
  
  };
  
  
export {
    createReviews,
    findReviewsById,
  };
  