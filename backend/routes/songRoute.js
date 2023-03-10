const router = require('express').Router();
const {listSong, createSong, updateSong, deleteSong,getStats} = require('../controllers/songController');
/*
We need create, list, update, and delete songs 

Statistics stats.
generate overall statistics 
Total # of songs, artists, albums, genres
# of songs in every genre
# of songs & albums each artist has
# songs in each album … and so on

total number of songs artists albums and geners
*/

// router.

router.get('/', listSong);
router.post('/', createSong);
router.put('/:id', updateSong);
router.delete('/:id', deleteSong);
router.get('/stats', getStats);
module.exports = router;