CREATE DATABASE ke7gk2by31czungw;
USE ke7gk2by31czungw;

CREATE TABLE burgers
(
	id int NOT NULL
	AUTO_INCREMENT,
	burger_name varchar
	(255) NOT NULL,
    createdAt TIMESTAMP NOT NULL default current_timestamp,
	devoured BOOLEAN DEFAULT FALSE,
	PRIMARY KEY
	(id)
);