
// Require express router
const router = require('express').Router();

// Set requirements (from thoughts-controller)
const {
    getAllThoughts,
    getThoughtsById,
    createThoughts,
    updateThoughts,
    deleteThoughts,


} = require('../controllers/thoughts-controller');

// -- Directs to: /api/thoughts <GET>
router
    .route('/')
    .get(getAllThoughts);

// -- Directs to: /api/thoughts/:id <GET, PUT, DELETE>
router
    .route('/:id')
    .get(getThoughtsById)
    .put(updateThoughts)
    .delete(deleteThoughts);


// Export module router
module.exports = router;