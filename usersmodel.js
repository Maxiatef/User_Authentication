const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add the user email'],
        },
        password: {
            type: String,
            required: [true, 'Please add the reminder title'],
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Users', UserSchema);
