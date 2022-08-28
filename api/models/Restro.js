import mongoose from 'mongoose';
mongoose.set('useCreateIndex', true);
const Schema = mongoose.Schema;

const restroSchema = new Schema({
    RID: {type: Number},
    name: {
        type: String,
        required: [true, 'RestroName cannot be blank.']
    },
    description: {
        type: String,
    },
    address: {
        type: String,
        required: [true, 'Address cannot be blank.']
    },
});

const Restro = mongoose.model('Restro', restroSchema);

export default Restro;
