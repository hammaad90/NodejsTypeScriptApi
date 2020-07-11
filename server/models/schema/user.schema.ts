import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

const schema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: true
    }

});

export default mongoose.model('users', schema);