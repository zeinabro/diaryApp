DROP TABLE IF EXISTS users, entries;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL,
    user_pass VARCHAR NOT NULL,
    user_name VARCHAR
);

CREATE TABLE entries (
    entry_id SERIAL PRIMARY KEY,
    date_time TIMESTAMP WITH TIME ZONE,
    category VARCHAR,
    content TEXT,
    user_id INT REFERENCES users(user_id)
);

-- categories - school, feelings, love, family, friends, work

INSERT INTO users (username,user_name,user_pass)
VALUES
    ('zeinab','Zeinab','1234'),
    ('sumeet','Sumeet','4567'),
    ('samin','Samin','6789');

INSERT INTO entries (date_time,category,content,user_id)
VALUES 
    ('2023-06-30','Work','Today I started a project.',1),
    ('2023-05-16','Friends','Today I made a friend.',2),
    ('2023-04-28','Family','I talked to my family today.',3);

