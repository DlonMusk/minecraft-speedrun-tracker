const {Schema, model} = require('mongoose');

const runSchema = new Schema(
    {
        seed: {
            type: Number
        },
        start: {
            type: Date
        },
        minecraft_uuid: {
            type: Number
        },
        igt: {
            type: Number
        },
        rta: {
            type: Number
        }

    }
)

const Run = model('run', runSchema);

module.exports = Run;