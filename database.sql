CREATE TABLE sponsor (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL,
    city VARCHAR (20),
    hobbies VARCHAR (240),
    history VARCHAR (240),
    available BOOLEAN DEFAULT TRUE
);

CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    email VARCHAR (25),
    phone VARCHAR (12),
    message VARCHAR (240),
    sender VARCHAR (20),
    recieved_by INT
);