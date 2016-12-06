CREATE DATABASE IF NOT EXISTS webshop;
CREATE USER 'webshop'@'localhost' IDENTIFIED BY 'webshop';
GRANT ALL PRIVILEGES ON webshop. * TO 'webshop'@'localhost';