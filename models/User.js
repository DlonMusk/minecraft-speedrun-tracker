const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        minecraft_uuid: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        personalBest: {
            type: Number
        },
        runs: [
            {
               type: Schema.Types.ObjectId,
               ref: 'run'
            }
        ]

    },

)

const User = model('user', userSchema);

module.exports = User;