
/*
    This script generates entities for testing purposes.
 */

# Adresses
INSERT INTO webshop.address (first_name, last_name, gender, city, street_no, zip, country)
VALUES ('Peter', 'Lustig', 0, 'Stuttgart', 'Königstr. 1', 70173, 'Deutschland');
INSERT INTO webshop.address (first_name, last_name, gender, city, street_no, zip, country)
VALUES ('Homer', 'Simpson', 0, 'Springfield', 'Evergreen Terrace. 742', 00205, 'USA');
INSERT INTO webshop.address (first_name, last_name, gender, city, street_no, zip, country)
VALUES ('Donald', 'Trump', 0, 'Washington D.C', 'Pennsylvania Avenue 1600', 20500, 'USA');
INSERT INTO webshop.address (first_name, last_name, gender, city, street_no, zip, country)
VALUES ('Sheldon', 'Cooper', 0, 'Pasadens', 'Northern Los Robles Avenue 2311', 91101, 'USA');
INSERT INTO webshop.address (first_name, last_name, gender, city, street_no, zip, country)
VALUES ('Motgomery', 'Burns', 0, 'Springfield', 'Burns Mansion 1', 00205, 'USA');

# Users
INSERT INTO webshop.user (first_name, last_name, gender, email, password, date_of_birth, is_admin, shipping_address_a_id, billing_address_a_id)
VALUES ('Peter', 'Lustig', 0, 'peter@lustig.de', '$2a$10$aU9jmhzy7jsnIwQX6SnDh.py//24IDsSMLN8BluV4Q/Xpx4pmH/S6', CURDATE(), TRUE, 1, 1);
INSERT INTO webshop.user (first_name, last_name, gender, email, password, date_of_birth, is_admin, shipping_address_a_id, billing_address_a_id)
VALUES ('Homer', 'Simpson', 0, 'elhomo@springfield.de', '$2a$10$7E2ydJohkIX1k8xqJbR5JeQynNmlh/Yp3rr6KBeCeopHPo3uHC9fq', CURDATE(), FALSE, 2, 2);
INSERT INTO webshop.user (first_name, last_name, gender, email, password, date_of_birth, is_admin, shipping_address_a_id, billing_address_a_id)
VALUES ('Donald', 'Trump', 0, 'President@usgov.com', '$2a$10$qAGCerOSKAolFsdgs/f67OYn9cDBK6U9dXKp8NcetCLSpG9EdKejy', CURDATE(), FALSE, 3, 3);
INSERT INTO webshop.user (first_name, last_name, gender, email, password, date_of_birth, is_admin, shipping_address_a_id, billing_address_a_id)
VALUES ('Sheldon', 'Cooper', 0, 'shelly@gmail.com', '$2a$10$2bOJnU.NpqOaQxxjj8NA2.gAeMmEP6x6G4ybvYw6dHzeH4bF2XKG6', CURDATE(), TRUE, 4, 4);
INSERT INTO webshop.user (first_name, last_name, gender, email, password, date_of_birth, is_admin, shipping_address_a_id, billing_address_a_id)
VALUES ('Motgomery', 'Burns', 0, 'monty@springfield.com', '$2a$10$PYmXSNe0MoivzOQLR1WLJuyF9dPvEYrtUkfpfQsfo98COjXl7PW4q', CURDATE(), TRUE, 5, 5);



# Categories
INSERT INTO webshop.category (description, name, deleted)
VALUES ('Stricknadeln und Zubehör', 'Stricken', false);
INSERT INTO webshop.category (description, name, deleted)
VALUES ('Häkelnadeln und Zubehör', 'Häkeln', false);
INSERT INTO webshop.category (description, name, deleted)
VALUES ('Wolle', 'Wolle', false);
INSERT INTO webshop.category (description, name, parent_category_c_id, deleted)
VALUES ('Sets für Häkelprojekte', 'Häkelprojekte', 2, false);
INSERT INTO webshop.category (description, name, parent_category_c_id, deleted)
VALUES ('Sets für Strickprojekte', 'Strickprojekte', 1, false);

# SingleItem
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_c_id, article_number, stock, deleted)
VALUES ('single', '"Noodles" von Stafil ist ein qualitativ hochwertiges Textilgarn, dass aus den Resten der Mode- und Textilindustrie hergestellt wird.
Mit dem Jerseygarn "Noodles" von Stafil kann man superschnell und einfach im Riesenformat stricken und häkeln, flechten, knüpfen etc.\n
Der Kreativität sind keine Grenzen gesetzt!\n\nStricken mit dem Jerseygarn "Noodles" von Stafil, ist nicht nur schonend für die Umwelt, sondern bringt auch eine Extraportion Spass und Motivation. Denn bei keinem anderen Garn sind nach wenigen Maschen und Reihen so schnell Ergebnisse sichtbar.\n\n
Körbe, Kissen, Taschen, Poufs, Armbänder und sogar Teppiche entstehen in kürzester Zeit.', 'Noodles grün', 'assets/images/noodles_gruen.jpg', 10.50, 'Stafil', 'grün', 'Baumwolle', 750, 3, 1202111, 86, false);
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_c_id, article_number, stock, deleted)
VALUES ('single', '"Noodles" von Stafil ist ein qualitativ hochwertiges Textilgarn, dass aus den Resten der Mode- und Textilindustrie hergestellt wird.
Mit dem Jerseygarn "Noodles" von Stafil kann man superschnell und einfach im Riesenformat stricken und häkeln, flechten, knüpfen etc.\n
Der Kreativität sind keine Grenzen gesetzt!\n\nStricken mit dem Jerseygarn "Noodles" von Stafil, ist nicht nur schonend für die Umwelt, sondern bringt auch eine Extraportion Spass und Motivation. Denn bei keinem anderen Garn sind nach wenigen Maschen und Reihen so schnell Ergebnisse sichtbar.\n\n
Körbe, Kissen, Taschen, Poufs, Armbänder und sogar Teppiche entstehen in kürzester Zeit.', 'Noodles blau', 'assets/images/noodles_blau.jpg', 10.50, 'Stafil', 'blau', 'Baumwolle', 750, 3, 1202112, 18, false);
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_c_id, article_number, stock, deleted)
VALUES ('single', '"Noodles" von Stafil ist ein qualitativ hochwertiges Textilgarn, dass aus den Resten der Mode- und Textilindustrie hergestellt wird.
Mit dem Jerseygarn "Noodles" von Stafil kann man superschnell und einfach im Riesenformat stricken und häkeln, flechten, knüpfen etc.\n
Der Kreativität sind keine Grenzen gesetzt!\n\nStricken mit dem Jerseygarn "Noodles" von Stafil, ist nicht nur schonend für die Umwelt, sondern bringt auch eine Extraportion Spass und Motivation. Denn bei keinem anderen Garn sind nach wenigen Maschen und Reihen so schnell Ergebnisse sichtbar.\n\n
Körbe, Kissen, Taschen, Poufs, Armbänder und sogar Teppiche entstehen in kürzester Zeit.', 'Noodles schwarz', 'assets/images/noodles_schwarz.jpg', 10.50, 'Stafil', 'schwarz', 'Baumwolle', 750, 3, 1202113, 25, false);
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_c_id, article_number, stock, deleted)
VALUES ('single', '"Noodles" von Stafil ist ein qualitativ hochwertiges Textilgarn, dass aus den Resten der Mode- und Textilindustrie hergestellt wird.
Mit dem Jerseygarn "Noodles" von Stafil kann man superschnell und einfach im Riesenformat stricken und häkeln, flechten, knüpfen etc.\n
Der Kreativität sind keine Grenzen gesetzt!\n\nStricken mit dem Jerseygarn "Noodles" von Stafil, ist nicht nur schonend für die Umwelt, sondern bringt auch eine Extraportion Spass und Motivation. Denn bei keinem anderen Garn sind nach wenigen Maschen und Reihen so schnell Ergebnisse sichtbar.\n\n
Körbe, Kissen, Taschen, Poufs, Armbänder und sogar Teppiche entstehen in kürzester Zeit.', 'Noodles grau-meliert', 'assets/images/noodles_grau_meliert.png', 10.50, 'Stafil', 'grau-meliert', 'Baumwolle', 750, 3, 1202114, 12, false);
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_c_id, article_number, stock, deleted)
VALUES ('single', '"Noodles" von Stafil ist ein qualitativ hochwertiges Textilgarn, dass aus den Resten der Mode- und Textilindustrie hergestellt wird.
Mit dem Jerseygarn "Noodles" von Stafil kann man superschnell und einfach im Riesenformat stricken und häkeln, flechten, knüpfen etc.\n
Der Kreativität sind keine Grenzen gesetzt!\n\nStricken mit dem Jerseygarn "Noodles" von Stafil, ist nicht nur schonend für die Umwelt, sondern bringt auch eine Extraportion Spass und Motivation. Denn bei keinem anderen Garn sind nach wenigen Maschen und Reihen so schnell Ergebnisse sichtbar.\n\n
Körbe, Kissen, Taschen, Poufs, Armbänder und sogar Teppiche entstehen in kürzester Zeit.', 'Noodles grau', 'assets/images/noodles_grau.png', 10.50, 'Stafil', 'grau', 'Baumwolle', 750, 3, 1202115, 15, false);
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_c_id, article_number, stock, deleted)
VALUES ('single', '"Noodles" von Stafil ist ein qualitativ hochwertiges Textilgarn, dass aus den Resten der Mode- und Textilindustrie hergestellt wird.
Mit dem Jerseygarn "Noodles" von Stafil kann man superschnell und einfach im Riesenformat stricken und häkeln, flechten, knüpfen etc.\n
Der Kreativität sind keine Grenzen gesetzt!\n\nStricken mit dem Jerseygarn "Noodles" von Stafil, ist nicht nur schonend für die Umwelt, sondern bringt auch eine Extraportion Spass und Motivation. Denn bei keinem anderen Garn sind nach wenigen Maschen und Reihen so schnell Ergebnisse sichtbar.\n\n
Körbe, Kissen, Taschen, Poufs, Armbänder und sogar Teppiche entstehen in kürzester Zeit.', 'Noodles rosa', 'assets/images/noodles_rosa.jpg', 10.50, 'Stafil', 'rosa', 'Baumwolle', 750, 3, 1202116, 19, false);
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_c_id, article_number, stock, deleted)
VALUES ('single', '"Noodles" von Stafil ist ein qualitativ hochwertiges Textilgarn, dass aus den Resten der Mode- und Textilindustrie hergestellt wird.
Mit dem Jerseygarn "Noodles" von Stafil kann man superschnell und einfach im Riesenformat stricken und häkeln, flechten, knüpfen etc.\n
Der Kreativität sind keine Grenzen gesetzt!\n\nStricken mit dem Jerseygarn "Noodles" von Stafil, ist nicht nur schonend für die Umwelt, sondern bringt auch eine Extraportion Spass und Motivation. Denn bei keinem anderen Garn sind nach wenigen Maschen und Reihen so schnell Ergebnisse sichtbar.\n\n
Körbe, Kissen, Taschen, Poufs, Armbänder und sogar Teppiche entstehen in kürzester Zeit.', 'Noodles schoko', 'assets/images/noodles_schoko.jpg', 10.50, 'Stafil', 'schoko', 'Baumwolle', 750, 3, 1202117, 5, false);
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_c_id, article_number, stock, deleted)
VALUES ('single', '"Noodles" von Stafil ist ein qualitativ hochwertiges Textilgarn, dass aus den Resten der Mode- und Textilindustrie hergestellt wird.
Mit dem Jerseygarn "Noodles" von Stafil kann man superschnell und einfach im Riesenformat stricken und häkeln, flechten, knüpfen etc.\n
Der Kreativität sind keine Grenzen gesetzt!\n\nStricken mit dem Jerseygarn "Noodles" von Stafil, ist nicht nur schonend für die Umwelt, sondern bringt auch eine Extraportion Spass und Motivation. Denn bei keinem anderen Garn sind nach wenigen Maschen und Reihen so schnell Ergebnisse sichtbar.\n\n
Körbe, Kissen, Taschen, Poufs, Armbänder und sogar Teppiche entstehen in kürzester Zeit.', 'Noodles dunkelblau', 'assets/images/noodles_dunkelblau.jpg', 10.50, 'Stafil', 'dunkelblau', 'Baumwolle', 750, 3, 1202118, 3, false);

INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_c_id, article_number, stock, deleted)
VALUES ('single', 'Katia Love Wool – Ein 100%iges Naturgarn mit feinster Alpakawolle.\nLove Wool eignet sich mit seinem fest gedrehten Faden und der dicken Struktur für die verschiedensten Projekte.
\n\nStricken Sie sich einen warmen Schlauchschal oder einen tollen Filzkorb für Ihr Wohnzimmer.', 'Love Wool altrosa', 'assets/images/lovewool_altrosa.jpg', 6.45, 'Katia', 'altrosa', '85% Schurwolle, 15% Alpaka', 50, 3, 1202200, 12, false);
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_c_id, article_number, stock, deleted)
VALUES ('single', 'Katia Love Wool – Ein 100%iges Naturgarn mit feinster Alpakawolle.\nLove Wool eignet sich mit seinem fest gedrehten Faden und der dicken Struktur für die verschiedensten Projekte.
\n\nStricken Sie sich einen warmen Schlauchschal oder einen tollen Filzkorb für Ihr Wohnzimmer.', 'Love Wool creme', 'assets/images/lovewool_creme.jpg', 6.45, 'Katia', 'creme', '85% Schurwolle, 15% Alpaka', 50, 3, 1202201, 12, false);
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_c_id, article_number, stock, deleted)
VALUES ('single', 'Katia Love Wool – Ein 100%iges Naturgarn mit feinster Alpakawolle.\nLove Wool eignet sich mit seinem fest gedrehten Faden und der dicken Struktur für die verschiedensten Projekte.
\n\nStricken Sie sich einen warmen Schlauchschal oder einen tollen Filzkorb für Ihr Wohnzimmer.', 'Love Wool dunkelblau', 'assets/images/lovewool_dunkelblau.jpg', 6.45, 'Katia', 'dunkelblau', '85% Schurwolle, 15% Alpaka', 50, 3, 1202202, 12, false);
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_c_id, article_number, stock, deleted)
VALUES ('single', 'Katia Love Wool – Ein 100%iges Naturgarn mit feinster Alpakawolle.\nLove Wool eignet sich mit seinem fest gedrehten Faden und der dicken Struktur für die verschiedensten Projekte.
\n\nStricken Sie sich einen warmen Schlauchschal oder einen tollen Filzkorb für Ihr Wohnzimmer.', 'Love Wool gelb', 'assets/images/lovewool_gelb.jpg', 6.45, 'Katia', 'gelb', '85% Schurwolle, 15% Alpaka', 50, 3, 1202203, 12, false);
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_c_id, article_number, stock, deleted)
VALUES ('single', 'Katia Love Wool – Ein 100%iges Naturgarn mit feinster Alpakawolle.\nLove Wool eignet sich mit seinem fest gedrehten Faden und der dicken Struktur für die verschiedensten Projekte.
\n\nStricken Sie sich einen warmen Schlauchschal oder einen tollen Filzkorb für Ihr Wohnzimmer.', 'Love Wool grau', 'assets/images/lovewool_grau.jpg', 6.45, 'Katia', 'grau', '85% Schurwolle, 15% Alpaka', 50, 3, 1202204, 12, false);
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_c_id, article_number, stock, deleted)
VALUES ('single', 'Katia Love Wool – Ein 100%iges Naturgarn mit feinster Alpakawolle.\nLove Wool eignet sich mit seinem fest gedrehten Faden und der dicken Struktur für die verschiedensten Projekte.
\n\nStricken Sie sich einen warmen Schlauchschal oder einen tollen Filzkorb für Ihr Wohnzimmer.', 'Love Wool hellblau', 'assets/images/lovewool_hellblau.jpg', 6.45, 'Katia', 'hellblau', '85% Schurwolle, 15% Alpaka', 50, 3, 1202205, 12, false);
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_c_id, article_number, stock, deleted)
VALUES ('single', 'Katia Love Wool – Ein 100%iges Naturgarn mit feinster Alpakawolle.\nLove Wool eignet sich mit seinem fest gedrehten Faden und der dicken Struktur für die verschiedensten Projekte.
\n\nStricken Sie sich einen warmen Schlauchschal oder einen tollen Filzkorb für Ihr Wohnzimmer.', 'Love Wool schwarz', 'assets/images/lovewool_schwarz.jpg', 6.45, 'Katia', 'schwarz', '85% Schurwolle, 15% Alpaka', 50, 3, 1202206, 12, false);

INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_c_id, article_number, stock, deleted)
VALUES ('single', 'Mehrfädiges Garn aus 100% Baby Alpaka.\nSehr weich und kuschelig, auch für Kinderkleidung oder -accessoires gut geeignet.\nBaby Alpaka hält sehr warm.',
'Cusco anthrazit', 'assets/images/cusco_anthrazit.jpg', 7.95, 'Lamana', 'anthrazit', 'Alpaka', 50, 3, 1202301, 20, false);
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_c_id, article_number, stock, deleted)
VALUES ('single', 'Mehrfädiges Garn aus 100% Baby Alpaka.\nSehr weich und kuschelig, auch für Kinderkleidung oder -accessoires gut geeignet.\nBaby Alpaka hält sehr warm.',
'Cusco creme', 'assets/images/cusco_creme.jpg', 7.95, 'Lamana', 'creme', 'Alpaka', 50, 3, 1202302, 20, false);
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_c_id, article_number, stock, deleted)
VALUES ('single', 'Mehrfädiges Garn aus 100% Baby Alpaka.\nSehr weich und kuschelig, auch für Kinderkleidung oder -accessoires gut geeignet.\nBaby Alpaka hält sehr warm.',
'Cusco marineblau', 'assets/images/cusco_marineblau.jpg', 7.95, 'Lamana', 'marineblau', 'Alpaka', 50, 3, 1202303, 20, false);
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_c_id, article_number, stock, deleted)
VALUES ('single', 'Mehrfädiges Garn aus 100% Baby Alpaka.\nSehr weich und kuschelig, auch für Kinderkleidung oder -accessoires gut geeignet.\nBaby Alpaka hält sehr warm.',
'Cusco maronenbraun', 'assets/images/cusco_maronenbraun.jpg', 7.95, 'Lamana', 'maronenbraun', 'Alpaka', 50, 3, 1202304, 20, false);
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_c_id, article_number, stock, deleted)
VALUES ('single', 'Mehrfädiges Garn aus 100% Baby Alpaka.\nSehr weich und kuschelig, auch für Kinderkleidung oder -accessoires gut geeignet.\nBaby Alpaka hält sehr warm.',
'Cusco petrol', 'assets/images/cusco_petrol.jpg', 7.95, 'Lamana', 'petrol', 'Alpaka', 50, 3, 1202305, 20, false);
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_c_id, article_number, stock, deleted)
VALUES ('single', 'Mehrfädiges Garn aus 100% Baby Alpaka.\nSehr weich und kuschelig, auch für Kinderkleidung oder -accessoires gut geeignet.\nBaby Alpaka hält sehr warm.',
'Cusco pinie', 'assets/images/cusco_pinie.jpg', 7.95, 'Lamana', 'pinie', 'Alpaka', 50, 3, 1202306, 20, false);
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_c_id, article_number, stock, deleted)
VALUES ('single', 'Mehrfädiges Garn aus 100% Baby Alpaka.\nSehr weich und kuschelig, auch für Kinderkleidung oder -accessoires gut geeignet.\nBaby Alpaka hält sehr warm.',
'Cusco schiefergrau', 'assets/images/cusco_schiefergrau.jpg', 7.95, 'Lamana', 'schiefergrau', 'Alpaka', 50, 3, 1202307, 20, false);
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_c_id, article_number, stock, deleted)
VALUES ('single', 'Mehrfädiges Garn aus 100% Baby Alpaka.\nSehr weich und kuschelig, auch für Kinderkleidung oder -accessoires gut geeignet.\nBaby Alpaka hält sehr warm.',
'Cusco seidengrau', 'assets/images/cusco_seidengrau.jpg', 7.95, 'Lamana', 'seidengrau', 'Alpaka', 50, 3, 1202308, 20, false);

INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_c_id, article_number, stock, deleted)
VALUES ('single', 'Knookingnadel aus der beliebten Holzreihe "Synfonie" von KnitPro.\n\nLeicht und außergewöhnlich stabil mit einer polierten Holzoberfläche für müheloses Gleiten - mit jeder Art von Material!\n
Eignet sich bestens zum Knooking von Noodles Textilgarn und anderen dicken Wollen.',
'Knookingnadel Knit Pro 4mm', 'assets/images/knooking4.jpg', 3.25, 'KnitPro', 'holz', 'Holz', 5, 2, 2002100, 5, false);
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_c_id, article_number, stock, deleted)
VALUES ('single', 'Knookingnadel aus der beliebten Holzreihe "Synfonie" von KnitPro.\n\nLeicht und außergewöhnlich stabil mit einer polierten Holzoberfläche für müheloses Gleiten - mit jeder Art von Material!\n
Eignet sich bestens zum Knooking von Noodles Textilgarn und anderen dicken Wollen.',
'Knookingnadel Knit Pro 6mm', 'assets/images/knooking6.jpg', 3.25, 'KnitPro', 'holz', 'Holz', 5, 2, 2002101, 5, false);
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_c_id, article_number, stock, deleted)
VALUES ('single', 'Knookingnadel aus der beliebten Holzreihe "Synfonie" von KnitPro.\n\nLeicht und außergewöhnlich stabil mit einer polierten Holzoberfläche für müheloses Gleiten - mit jeder Art von Material!\n
Eignet sich bestens zum Knooking von Noodles Textilgarn und anderen dicken Wollen.',
'Knookingnadel Knit Pro 7mm', 'assets/images/knooking7.jpg', 3.25, 'KnitPro', 'holz', 'Holz', 5, 2, 2002102, 5, false);
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_c_id, article_number, stock, deleted)
VALUES ('single', 'Knookingnadel aus der beliebten Holzreihe "Synfonie" von KnitPro.\n\nLeicht und außergewöhnlich stabil mit einer polierten Holzoberfläche für müheloses Gleiten - mit jeder Art von Material!\n
Eignet sich bestens zum Knooking von Noodles Textilgarn und anderen dicken Wollen.',
'Knookingnadel Knit Pro 8mm', 'assets/images/knooking8.jpg', 3.25, 'KnitPro', 'holz', 'Holz', 5, 2, 2002103, 5, false);
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_c_id, article_number, stock, deleted)
VALUES ('single', 'Knookingnadel aus der beliebten Holzreihe "Synfonie" von KnitPro.\n\nLeicht und außergewöhnlich stabil mit einer polierten Holzoberfläche für müheloses Gleiten - mit jeder Art von Material!\n
Eignet sich bestens zum Knooking von Noodles Textilgarn und anderen dicken Wollen.',
'Knookingnadel Knit Pro 10mm', 'assets/images/knooking10.jpg', 3.25, 'KnitPro', 'holz', 'Holz', 10, 2, 2002104, 5, false);
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_c_id, article_number, stock, deleted)
VALUES ('single', 'Knookingnadel aus der beliebten Holzreihe "Synfonie" von KnitPro.\n\nLeicht und außergewöhnlich stabil mit einer polierten Holzoberfläche für müheloses Gleiten - mit jeder Art von Material!\n
Eignet sich bestens zum Knooking von Noodles Textilgarn und anderen dicken Wollen.',
'Knookingnadel Knit Pro 12mm', 'assets/images/knooking12.jpg', 3.25, 'KnitPro', 'holz', 'Holz', 10, 2, 2002105, 5, false);


# MultipleItem
INSERT INTO webshop.base_item (dtype, description, name, price, category_c_id, picture_link, article_number, stock, deleted)
VALUES ('multiple', 'Häkelset Kissenbezug', 'Kissenbezug blau/grün', 19.99, 1, 'http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg', 2007648, 3, false);
INSERT INTO webshop.base_item (dtype, description, name, price, category_c_id, picture_link, article_number, stock, deleted)
VALUES ('multiple', 'Häkelset Kissenbezug', 'Kissenbezug grau', 19.99, 2, 'http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg', 2007649, 9, false);
INSERT INTO webshop.base_item (dtype, description, name, price, category_c_id, picture_link, article_number, stock, deleted)
VALUES ('multiple', 'Häkelset Kissenbezug', 'Kissenbezug schwarz', 19.99, 3, 'http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg', 2007650, 21, false);
INSERT INTO webshop.base_item (dtype, description, name, price, category_c_id, picture_link, article_number, stock, deleted)
VALUES ('multiple', 'Häkelset Stuhlhusse', 'Husse grün', 19.99, 4, 'http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg', 2007886, 14, false);
INSERT INTO webshop.base_item (dtype, description, name, price, category_c_id, picture_link, article_number, stock, deleted)
VALUES ('multiple', 'Häkelset Stuhlhusse', 'Husse gelb', 19.99, 5, 'http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg', 2007887, 22, false);

INSERT INTO webshop.base_item_items (multiple_item_i_id, items_i_id)
VALUES (6, 1);
INSERT INTO webshop.base_item_items (multiple_item_i_id, items_i_id)
VALUES (6, 1);
INSERT INTO webshop.base_item_items (multiple_item_i_id, items_i_id)
VALUES (6, 2);
INSERT INTO webshop.base_item_items (multiple_item_i_id, items_i_id)
VALUES (6, 2);
INSERT INTO webshop.base_item_items (multiple_item_i_id, items_i_id)
VALUES (7, 5);
INSERT INTO webshop.base_item_items (multiple_item_i_id, items_i_id)
VALUES (7, 5);
INSERT INTO webshop.base_item_items (multiple_item_i_id, items_i_id)
VALUES (8, 3);
INSERT INTO webshop.base_item_items (multiple_item_i_id, items_i_id)
VALUES (8, 3);
INSERT INTO webshop.base_item_items (multiple_item_i_id, items_i_id)
VALUES (9, 1);
INSERT INTO webshop.base_item_items (multiple_item_i_id, items_i_id)
VALUES (9, 1);
INSERT INTO webshop.base_item_items (multiple_item_i_id, items_i_id)
VALUES (10, 4);
INSERT INTO webshop.base_item_items (multiple_item_i_id, items_i_id)
VALUES (10, 4);

# ShoppingOrders
INSERT INTO webshop.shopping_order (date, paid, user_u_id) VALUES (CURDATE(), 0, 1);
INSERT INTO webshop.shopping_order (date, paid, user_u_id) VALUES (CURDATE(), 1, 2);
INSERT INTO webshop.shopping_order (date, paid, user_u_id) VALUES (CURDATE(), 0, 2);
INSERT INTO webshop.shopping_order (date, paid, user_u_id) VALUES (CURDATE(), 1, 3);
INSERT INTO webshop.shopping_order (date, paid, user_u_id) VALUES (CURDATE(), 0, 4);
INSERT INTO webshop.shopping_order (date, paid, user_u_id) VALUES (CURDATE(), 1, 4);
INSERT INTO webshop.shopping_order (date, paid, user_u_id) VALUES (CURDATE(), 0, 5);

# ShoppingCarts
INSERT INTO webshop.shopping_cart (user_u_id) VALUES ( 1);
INSERT INTO webshop.shopping_cart (user_u_id) VALUES ( 2);
INSERT INTO webshop.shopping_cart (user_u_id) VALUES ( 3);
INSERT INTO webshop.shopping_cart (user_u_id) VALUES ( 4);
INSERT INTO webshop.shopping_cart (user_u_id) VALUES ( 5);

# ItemAndQuantity
INSERT INTO webshop.item_and_quantity (quantity, item_i_id)
VALUES (1, 1);
INSERT INTO webshop.item_and_quantity (quantity, item_i_id)
VALUES (2, 8);
INSERT INTO webshop.item_and_quantity (quantity, item_i_id)
VALUES (3, 7);
INSERT INTO webshop.item_and_quantity (quantity, item_i_id)
VALUES (1, 5);
INSERT INTO webshop.item_and_quantity (quantity, item_i_id)
VALUES (3, 10);
INSERT INTO webshop.item_and_quantity (quantity, item_i_id)
VALUES (12, 4);
INSERT INTO webshop.item_and_quantity (quantity, item_i_id)
VALUES (4, 5);
INSERT INTO webshop.item_and_quantity (quantity, item_i_id)
VALUES (1, 6);
INSERT INTO webshop.item_and_quantity (quantity, item_i_id)
VALUES (3, 1);

# ShoppingCartItems
INSERT INTO webshop.shopping_cart_items (shopping_cart_sc_id, items_iq_id)
VALUES (1, 1);
INSERT INTO webshop.shopping_cart_items (shopping_cart_sc_id, items_iq_id)
VALUES (1, 2);
INSERT INTO webshop.shopping_cart_items (shopping_cart_sc_id, items_iq_id)
VALUES (2, 3);
INSERT INTO webshop.shopping_cart_items (shopping_cart_sc_id, items_iq_id)
VALUES (2, 4);
INSERT INTO webshop.shopping_cart_items (shopping_cart_sc_id, items_iq_id)
VALUES (3, 5);
INSERT INTO webshop.shopping_cart_items (shopping_cart_sc_id, items_iq_id)
VALUES (4, 6);
INSERT INTO webshop.shopping_cart_items (shopping_cart_sc_id, items_iq_id)
VALUES (4, 7);
INSERT INTO webshop.shopping_cart_items (shopping_cart_sc_id, items_iq_id)
VALUES (4, 8);
INSERT INTO webshop.shopping_cart_items (shopping_cart_sc_id, items_iq_id)
VALUES (4, 9);

# ShoppingOrderItems
INSERT INTO webshop.shopping_order_items (shopping_order_so_id, items_iq_id)
VALUES (1, 1);
INSERT INTO webshop.shopping_order_items (shopping_order_so_id, items_iq_id)
VALUES (1, 2);
INSERT INTO webshop.shopping_order_items (shopping_order_so_id, items_iq_id)
VALUES (2, 3);
INSERT INTO webshop.shopping_order_items (shopping_order_so_id, items_iq_id)
VALUES (2, 4);
INSERT INTO webshop.shopping_order_items (shopping_order_so_id, items_iq_id)
VALUES (3, 5);
INSERT INTO webshop.shopping_order_items (shopping_order_so_id, items_iq_id)
VALUES (4, 6);
INSERT INTO webshop.shopping_order_items (shopping_order_so_id, items_iq_id)
VALUES (4, 7);
INSERT INTO webshop.shopping_order_items (shopping_order_so_id, items_iq_id)
VALUES (7, 8);
INSERT INTO webshop.shopping_order_items (shopping_order_so_id, items_iq_id)
VALUES (7, 9);