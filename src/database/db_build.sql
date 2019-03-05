BEGIN;

DROP TABLE IF EXISTS posts CASCADE;
DROP TABLE IF EXISTS userhistory CASCADE;

CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  post VARCHAR(255) NOT NULL,
  upvotes VARCHAR(15) DEFAULT NULL,
  downvotes VARCHAR(15) DEFAULT NULL
);

CREATE TABLE userhistory(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  vote VARCHAR(255) DEFAULT NULL,
  post_id INTEGER REFERENCES posts(id)
);

INSERT INTO posts (title , post) VALUES
('BUTTER CHICKEN---7.95€', 'Peito de frango com tomate,natas e manteiga'),
('BUTTER LAMB---8.95€','Borregho com tomate,natas e manteiga'),
('CHICKEN MANGO ---7.45€', 'frago com manga e natas'),
('LAMB MANGO   ---8.45€', 'Borrego com manga e natas'),
('ARROZ DE PATO ---9.45€', 'Duck Rice');

COMMIT;
