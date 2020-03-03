const { Schema, model } = require('mongoose');
const propertySchema = new Schema (
{
    imageURL: '',
    type: '',
    description: '',
    direction: '',
    price: '',
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
},
{
    timestamps: true,
    versionKey: false
  }
);
module.exports = model('Property', propertySchema);



