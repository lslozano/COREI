const { Schema, model } = require('mongoose');
const favoritesSchema = new Schema (
{
    favoriteProperties: []
}
);
module.exports = model('Favorite', favoritesSchema);


