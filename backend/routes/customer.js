var express = require('express');
var router = express.Router();
var Customer = require('../models/customer');

router.get('/customers', (req, res, next) => {

  Customer
    .find()
    .populate({
      path: 'thirdParty',
      populate: { path: 'contacts', model: 'Contact' }
    })
    .then(
    documents => {
      res.status(200).json({
        message: 'Customer successfully fetched',
        customers: documents
      });
    }
  ).catch(err => res.status(404).json({message: 'No customer found!', error: err}));
});

router.get('/customer/:id', (req, res, next) => {
  Customer.findById(req.params.id).populate({
    path: 'thirdParty',
    populate: { path: 'contacts', model: 'Contact' }
  }).then(
    document => {
      if (document) {
        res.status(200).json({
          message: 'Customer found!',
          customer: document
        })
      } else {
        res.status(404).json({
          message: 'error! no customer matched that id!',
          id: req.params.id
        })
      }
    }
  ).catch(err => console.log(err))
});

module.exports = router;
