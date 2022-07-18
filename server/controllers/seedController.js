
module.exports = {
    generateSeed(req, res) {
        const seed = Math.floor(Math.random() * (2**64));
        const start = Date.now();
    
        res.status(200).json(
            {
                seed: seed,
                start: start
            }
        );
    }
} 

