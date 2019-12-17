CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers
(
    id INTEGER NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR (55) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);