-- mysql -u root -p < schema.sql

CREATE DATABASE checkout;

USE checkout;

CREATE TABLE information (
    id int NOT NULL AUTO_INCREMENT,
    TheName VARCHAR(50),
    email VARCHAR(50),
    ThePassword VARCHAR(50),
    line1 VARCHAR(50),
    line2 VARCHAR(50),
    city VARCHAR(50),
    TheState VARCHAR(50),
    zipCode VARCHAR(50),
    TheNumber VARCHAR(50),
    expiration VARCHAR(50),
    billingZipCode VARCHAR(50),
    PRIMARY KEY (ID)
);
