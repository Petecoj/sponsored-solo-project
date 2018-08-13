const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM sponsor;`;
    pool.query(queryText)
        .then((results) => {
            res.send(results.rows)
            console.log(results.rows);

        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;