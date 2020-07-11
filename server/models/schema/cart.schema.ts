import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

const schema = new Schema({
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
      },
      products: [
        {
          _product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product',
          },
          quantity: {
            type: Number,
          },
          price:{
            type: Number
            }
        }
      ]
});

export default mongoose.model('cart', schema);