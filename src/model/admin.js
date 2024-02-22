/// src// models/Admin.js
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Admin = mongoose.model('adminlogin', adminSchema);

module.exports = Admin;
