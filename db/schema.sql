CREATE DATABASE burger_db;
USE burger_db;

-- Create the table tasks.
CREATE TABLE burgers
(
id int AUTO_INCREMENT,
burger_name varchar(100) not null,
devour boolean
PRIMARY KEY (id)
);

