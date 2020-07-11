import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type:Number
    },
    make: {
        type: String
    }

});

export default mongoose.model('product', schema);