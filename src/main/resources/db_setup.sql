CREATE DATABASE IF NOT EXISTS webshop;
CREATE USER 'webshop'@'localhost' IDENTIFIED BY 'webshop';
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP ON webshop. * TO 'webshop'@'localhost';