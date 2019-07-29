var express = require('express');
var router = express.Router();
var ThirdParty = require('../models/thirdParty');

router.get('/thirdParties', (req, res, next) => {

  ThirdParty
  .find()
  .populate('contacts')
  .then(
    documents => {
      res.status(200).json({
        message: 'TP successfully fetched',
        thirdParties: documents
      });
    }
  ).catch(err => res.status(404).json({message: 'No TP found!', error: err}));
});

router.get('/thirdParty/:id', (req, res, next) => {
  ThirdParty.findById(req.params.id).populate('thirdParty').then(
    document => {
      if (document) {
        res.status(200).json({
          message: 'TP found!',
          thridParty: document
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
