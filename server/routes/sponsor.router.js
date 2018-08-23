const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const accountSid = 'AC48c2b3e3b33f6bb88817fbaa8b915318';
const authToken = 'c1dfd2e3a144ea93249a230e44b267dc';
const client = require('twilio')(accountSid, authToken);


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
            console.log('results', result.rows);

        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403)
    }
});
/**
 * POST route template
 */
router.post('/', (req, res) => {
    console.log('got to post', req.body);
    console.log(req.body.receiver_phone);
    
    if (req.isAuthenticated) {
        
        const queryText = `INSERT INTO "user" ("email","phone", "message", "sender", "received_by") VALUES ($1,$2,$3,$4,$5)`
        pool.query(queryText, [req.body.email, req.body.phone, req.body.message, req.body.sender, req.body.id])
            .then(() => {
                client.messages
                    .create({
                        body: 'you have received a message 4 on "Sponsored"',
                        from: '+14433398111',
                        to: `+1${req.body.receiver_phone}`
                    })
                    .then(message => console.log(message.sid))
                    .done();
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
                            SET "email" = $1,
                                "phone" = $2,
                                "city" = $3,
                                "state" = $4,
                                "hobbies" = $5,
                                "history" = $6,
                                "years_sober" = $7
                                WHERE id = $8`
        pool.query(queryText, [req.body.email, req.body.phone, req.body.city, req.body.state, req.body.hobbies, req.body.history, req.body.years_sober, req.user.id])
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
        pool.query(queryText, [req.params.id])
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
    if (req.isAuthenticated) {
        const queryText = `SELECT * FROM sponsor WHERE id =$1;`;
        pool.query(queryText, [req.user.id])
            .then((results) => {
                res.send(results.rows)
                console.log(results.rows);

            }).catch((err) => {
                console.log(err);
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403)
    }
});

router.get('/events', (req, res) => {

    const queryText = `SELECT * FROM events;`;
    pool.query(queryText)
        .then((results) => {
            res.send(results.rows)
            console.log(results.rows);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })

});
router.post('/events', (req, res) => {
    console.log('got to post', req.body);
    console.log('event body', req.body);
    
    if (req.isAuthenticated) {
        const queryText = `INSERT INTO "events" ("event", "address", "description", "city", "date", "photo") VALUES ($1, $2, $3, $4, $5, $6)`
        pool.query(queryText, [req.body.event.event, req.body.event.address, req.body.event.description, req.body.event.city, req.body.event.date, req.body.photo.url,])
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
router.put('/photo', (req, res) => {
    console.log('got to put', req.body, req.user);
    if (req.isAuthenticated) {
        const queryText = `UPDATE "sponsor" SET "photo" =  $1 WHERE id = $2`
        pool.query(queryText, [req.body.photo.url, req.user.id])
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