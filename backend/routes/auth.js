const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Property = require('../models/Property');
const Favorites = require('../models/Favorites')
const passport = require('../config/passport');
const uploadCloud = require('../config/cloudinary')

router.post('/signup', (req, res, next) => {
  User.register(req.body, req.body.password)
    .then((user) => res.status(201).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  const { user } = req;
  res.status(200).json({ user });
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ msg: 'Logged out' });
});

router.get('/profile', isAuth, (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});

router.post(
  '/upload',
  isAuth,
  uploadCloud.single('photoURL'),
  async (req, res, next) => {
    const { secure_url } = req.file
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { photoURL: secure_url },
      { new: true }
    )
    res.status(200).json({ user })
  }
)

router.post(
  '/uploadImage',
  isAuth,
  uploadCloud.single('imageURL'),
  async (req, res) => {
    const { secure_url } = req.file
    const property = await Property.findByIdAndUpdate(
      { imageURL: secure_url },
      { new: true }
    )
    res.status(200).json({ property })
  }
)

router.post('/publicar', isAuth, uploadCloud.single('imageURL'), async (req, res) => {
  const { type, description, direction, price } = req.body
  const {secure_url:imageURL} = req.file
  const { _id } = req.user
  const property = await Property.create({ imageURL, type, description, direction, price, owner: _id })
  const propertyPopulated = await Property.findById(property._id).populate('owner')
  const user = await User.findByIdAndUpdate(
    _id,
    { $push: { properties: property._id } },
    { new: true }
  ).populate({
    path: 'property',
    populate: {
      path: 'author',
      model: 'User'
    }
  })
  return res.status(201).json({ user, property: propertyPopulated })
})

router.get('/property', async (req, res, next) => {
  const properties = await Property.find()
    .sort({ createdAt: -1 })
  res.status(200).json({ properties })
})

router.get('/property/:id', async (req, res, next) => {
  const { id } = req.params;
  const property = await Property.findById(id)
  res.status(200).json(property)
})

router.patch('/property/:id', async(req, res, next) => {
  const { id } = req.params
  const { imageURL, type, description, direction, price } = req.body
  await Property.findByIdAndUpdate(id, {
    imageURL, type, description, direction, price
  })
  res.status(200).json({message: "property update"})
})

router.delete('/property/:id', async(req, res, next) => {
  const { id } = req.params
  await Property.findByIdAndDelete(id)
  res.status(200).json({ message: "Property delete"})
})

router.get('/favorites', async (req, res, next) => {
  const favorites = await Favorite.find()
    .sort({ createdAt: -1 })
  res.status(200).json({ favorites })
})

module.exports = router;
  function isAuth(req, res, next) {
    req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
  }


