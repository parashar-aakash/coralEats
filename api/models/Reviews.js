import mongoose from 'mongoose';
mongoose.set('useCreateIndex', true);
const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
    RID: {type: Number},
    Review: {
        type: [String],
        required: [true, 'Reviews cannot be blank.']
    },
    customer: {
        type: [String],
    }
});

const Reviews = mongoose.model('Reviews', reviewsSchema);

export default Reviews;
