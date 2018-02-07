var express = require('express');
var app = express();

// Import Statistics Module Containing Functions Related To Statistics Data
var statistics = require('../models/statistics');

// API Routes
app.get('/api/mobiki/statistics', function(req, res) {
  statistics.getStatistics(function(err, rows, fields) {
    if (err) throw err;
    res.json(rows);
  });
});

module.exports = app;
