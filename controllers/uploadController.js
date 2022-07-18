const {User, Run} = require('../models');

module.exports = {
    uploadRun(req, res){
        // create new run
        const run = Run.Create(req.body).then(run => run);

        // if user exists add run to user runs
        const userExists = User.exists({minecraft_uuid: req.body.minecraft_uuid})
        if(userExists){
            User.findOneAndUpdate(
                {minecraft_uuid: req.body.minecraft_uuid},
                {$addToSet: {runs: run._id}},
                {new: true})
                .then(updatedUser => res.status(200).json(updatedUser))
        }
        else {
            User.Create({
                minecraft_uuid: req.body.minecraft_uuid,
                runs: {$addToSet: {runs: run}}
            }).then(newUser => res.status(200).json(newUser))
        }
        // else create user add run
    }
}