const {User, Run} = require('../models');

module.exports = {
    async uploadRun(req, res){
        // create new run
        const run = await Run.create(req.body).then(run => run);

        // if user exists add run to user runs
        const userExists = await User.exists({minecraft_uuid: req.body.minecraft_uuid})

        if(userExists){
            const user = await User.findOneAndUpdate(
                {minecraft_uuid: req.body.minecraft_uuid},
                {$addToSet: {runs: run._id}},
                {new: true})
                .then(updatedUser => updatedUser)

            const runs = await Run.find({minecraft_uuid: req.body.minecraft_uuid}).then(run => run);
            console.log(runs, user);
            runs.forEach(run => {
                run.rta < user.personalBest ? user.personalBest = run.rta : null; 
            })

            await user.save();

            res.status(200).json(user);

        }
        else {
            // add runs rta as highscore
            await User.create({
                minecraft_uuid: req.body.minecraft_uuid,
                personalBest: run.rta
            }).then(newUser => newUser.updateOne({runs: run._id}))
              .then(updated => res.json(updated))
              .catch(err => res.json(err))
        }
        // else create user add run
    }
}