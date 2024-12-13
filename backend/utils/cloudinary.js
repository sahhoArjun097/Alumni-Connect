const cloudinary = require('cloudinary').v2;
require('dotenv').config();

const connectCloudinary = () => {
    cloudinary.config({
        cloud_name: 'drv57daxq',
        api_key: '412653859829326',
        api_secret: '2r0EGIr91Cwx8lk8aYRY8Uv9MnY',
    });
};

module.exports = connectCloudinary;
