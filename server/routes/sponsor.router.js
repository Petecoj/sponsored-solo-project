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
    console.log('got to post', req.body);
    if (req.isAuthenticated) {
        const queryText = `INSERT INTO "user" ("email","phone", "message", "sender", "received_by") VALUES ($1,$2,$3,$4,$5)`
        pool.query(queryText, [req.body.email, req.body.phone, req.body.message, req.body.sender, req.body.id])
            .then(() => {
                res.sendStatus(200);
            })
            .catch((error) => {
                console.log(error);
                res.sendStatus(500)
            })
    } else {
        res.sendStatus(403);
    }

});

module.exports = router;