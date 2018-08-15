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

router.get('/messages', (req, res) => {
    if (req.isAuthenticated()) {
    console.log('GET route');
    console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user);
    let queryText = `SELECT sponsor.available,
                            sponsor.id,
                            "user".id as messageid,
                            "user".email,
                            "user".phone, 
                            "user".sender, 
                            "user".message FROM "user" 
                            JOIN "sponsor" ON "sponsor".id = "user".received_by  
                            WHERE sponsor.id = $1`;
    pool.query(queryText, [req.user.id]).then((result) => {
        res.send(result.rows);
        console.log('results',result.rows);
        
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
}else {
     res.sendStatus(403)
}
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
router.put('/', (req, res) => {
    console.log('got to put', req.body, req.user);
    if (req.isAuthenticated) {
        const queryText = `UPDATE "sponsor" SET "available" = NOT "available" WHERE id = $1`
        pool.query(queryText, [req.user.id])
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
router.put('/update', (req, res) => {
    console.log('got to put', req.body, req.user.id);
    if (req.isAuthenticated) {
        const queryText = `UPDATE "sponsor"
                            SET "username" = $1,
                                "email" = $2,
                                "phone" = $3,
                                "city" = $4,
                                "state" = $5,
                                "hobbies" = $6,
                                "history" = $7
                                WHERE id = $8`
        pool.query(queryText, [req.body.username, req.body.email, req.body.phone, req.body.city, req.body.state, req.body.hobbies, req.body.history, req.user.id])
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
router.delete('/:id', (req, res) => {
    console.log('in DEELETE')
    console.log(req.body);
    
    if (req.isAuthenticated) {
        const queryText = `DELETE FROM "user" WHERE id=$1`;
        pool.query(queryText, [req.params.id] )
            .then(() => { res.sendStatus(200); })
            .catch((err) => {
                console.log('Error deleting', err);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});




router.get('/available', (req, res) => {
    if(req.isAuthenticated){
    const queryText = `SELECT * FROM sponsor WHERE id =$1;`;
    pool.query(queryText,[req.user.id])
        .then((results) => {
            res.send(results.rows)
            console.log(results.rows);

        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
    } else{
        res.sendStatus(403)
    }
});


module.exports = router;