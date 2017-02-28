
/*
    This script generates entities for testing purposes.
 */

# Users
INSERT INTO webshop.user (first_name, last_name, email, password, date_of_birth, is_admin)
VALUES ('Peter', 'Lustig', 'peter@lustig.de', 'peterspasswort', CURDATE(), TRUE);
INSERT INTO webshop.user (first_name, last_name, email, password, date_of_birth, is_admin)
VALUES ('Homer', 'Simpson', 'elhomo@springfield.de', 'homer', CURDATE(), FALSE);
INSERT INTO webshop.user (first_name, last_name, email, password, date_of_birth, is_admin)
VALUES ('Donald', 'Trump', 'President@usgov.com', 'usafirst', CURDATE(), FALSE);
INSERT INTO webshop.user (first_name, last_name, email, password, date_of_birth, is_admin)
VALUES ('Sheldon', 'Cooper', 'shelly@gmail.com', 'theflash', CURDATE(), TRUE);
INSERT INTO webshop.user (first_name, last_name, email, password, date_of_birth, is_admin)
VALUES ('Motgomery', 'Burns', 'monty@springfield.com', 'smithers', CURDATE(), TRUE);

# Adresses
INSERT INTO webshop.address (address_type, city, no, street, zip)
VALUES (1, 'Stuttgart', 1, 'Königstr.', 70173);
INSERT INTO webshop.address (address_type, city, no, street, zip)
VALUES (0, 'Springfield', 742, 'Evergreen Terrace.', 00205);
INSERT INTO webshop.address (address_type, city, no, street, zip)
VALUES (1, 'Washington D.C', 1600, 'Pennsylvania Avenue', 20500);
INSERT INTO webshop.address (address_type, city, no, street, zip)
VALUES (1, 'Pasadens', 2311, 'Northern Los Robles Avenue', 91101);
INSERT INTO webshop.address (address_type, city, no, street, zip)
VALUES (0, 'Springfield', 1, 'Burns Mansion', 00205);

# User_Address
INSERT INTO webshop.user_addresses (user_id, addresses_id) VALUES (1, 1);
INSERT INTO webshop.user_addresses (user_id, addresses_id) VALUES (2, 2);
INSERT INTO webshop.user_addresses (user_id, addresses_id) VALUES (3, 3);
INSERT INTO webshop.user_addresses (user_id, addresses_id) VALUES (4, 4);
INSERT INTO webshop.user_addresses (user_id, addresses_id) VALUES (5, 5);

# Categories
INSERT INTO webshop.category (description, name)
VALUES ('Stricknadeln und Zubehör', 'Stricken');
INSERT INTO webshop.category (description, name)
VALUES ('Häkelnadeln und Zubehör', 'Häkeln');
INSERT INTO webshop.category (description, name)
VALUES ('Wolle', 'Wolle');
INSERT INTO webshop.category (description, name)
VALUES ('Sets für Häkelprojekte', 'Häkelprojekte');
INSERT INTO webshop.category (description, name)
VALUES ('Sets für Strickprojekte', 'Strickprojekte');

# BaseItems
INSERT INTO webshop.base_item (name, description, price, category_id, picture_link)
VALUES ('Noodles grün', 'Textilgarn (Baumwolle)', 12.50, 1, 'http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg');
INSERT INTO webshop.base_item (name, description, price, category_id, picture_link)
VALUES ('Noodles blau', 'Textilgarn (Baumwolle)', 12.50, 2, 'http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg');
INSERT INTO webshop.base_item (name, description, price, category_id, picture_link)
VALUES ('Noodles schwarz', 'Textilgarn (Baumwolle)', 12.50, 3, 'http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg');
INSERT INTO webshop.base_item (name, description, price, category_id, picture_link)
VALUES ('Noodles gelb', 'Textilgarn (Baumwolle)', 12.50, 4, 'http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg');
INSERT INTO webshop.base_item (name, description, price, category_id, picture_link)
VALUES ('Noodles grau', 'Textilgarn (Baumwolle)', 12.50, 5, 'http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg');

# SingleItem
INSERT INTO webshop.single_item (color, weight, brand, material, id)
VALUES ('grün', 400, 'Stafil', 'Baumwolle', 1);
INSERT INTO webshop.single_item (color, weight, brand, material, id)
VALUES ('blau', 400, 'Stafil', 'Baumwolle', 2);
INSERT INTO webshop.single_item (color, weight, brand, material, id)
VALUES ('schwarz', 400, 'Stafil', 'Baumwolle', 3);
INSERT INTO webshop.single_item (color, weight, brand, material, id)
VALUES ('gelb', 400, 'Stafil', 'Baumwolle', 4);
INSERT INTO webshop.single_item (color, weight, brand, material, id)
VALUES ('grau', 400, 'Stafil', 'Baumwolle', 5);

# MultipleItems
INSERT INTO webshop.multiple_item (id) VALUE (1);
INSERT INTO webshop.multiple_item (id) VALUE (2);
INSERT INTO webshop.multiple_item (id) VALUE (3);
INSERT INTO webshop.multiple_item (id) VALUE (4);
INSERT INTO webshop.multiple_item (id) VALUE (5);

INSERT INTO webshop.multiple_item_items (multiple_item_id, items_id)
VALUES (1, 1);
INSERT INTO webshop.multiple_item_items (multiple_item_id, items_id)
VALUES (1, 2);
INSERT INTO webshop.multiple_item_items (multiple_item_id, items_id)
VALUES (1, 3);
INSERT INTO webshop.multiple_item_items (multiple_item_id, items_id)
VALUES (2, 4);
INSERT INTO webshop.multiple_item_items (multiple_item_id, items_id)
VALUES (2, 5);
INSERT INTO webshop.multiple_item_items (multiple_item_id, items_id)
VALUES (3, 2);
INSERT INTO webshop.multiple_item_items (multiple_item_id, items_id)
VALUES (3, 5);
INSERT INTO webshop.multiple_item_items (multiple_item_id, items_id)
VALUES (4, 1);
INSERT INTO webshop.multiple_item_items (multiple_item_id, items_id)
VALUES (4, 4);
INSERT INTO webshop.multiple_item_items (multiple_item_id, items_id)
VALUES (5, 1);
INSERT INTO webshop.multiple_item_items (multiple_item_id, items_id)
VALUES (5, 3);
INSERT INTO webshop.multiple_item_items (multiple_item_id, items_id)
VALUES (5, 5);

# ShoppingOrders
INSERT INTO webshop.shopping_order (date, paid, user_id) VALUES (CURDATE(), 0, 1);
INSERT INTO webshop.shopping_order (date, paid, user_id) VALUES (CURDATE(), 1, 2);
INSERT INTO webshop.shopping_order (date, paid, user_id) VALUES (CURDATE(), 0, 2);
INSERT INTO webshop.shopping_order (date, paid, user_id) VALUES (CURDATE(), 1, 3);
INSERT INTO webshop.shopping_order (date, paid, user_id) VALUES (CURDATE(), 0, 4);
INSERT INTO webshop.shopping_order (date, paid, user_id) VALUES (CURDATE(), 1, 4);
INSERT INTO webshop.shopping_order (date, paid, user_id) VALUES (CURDATE(), 0, 5);

# ShoppingCarts
INSERT INTO webshop.shopping_cart (shopping_order_id, user_id) VALUES (1, 1);
INSERT INTO webshop.shopping_cart (shopping_order_id, user_id) VALUES (3, 2);
INSERT INTO webshop.shopping_cart (shopping_order_id, user_id) VALUES (NULL, 3);
INSERT INTO webshop.shopping_cart (shopping_order_id, user_id) VALUES (5, 4);
INSERT INTO webshop.shopping_cart (shopping_order_id, user_id) VALUES (7, 5);

# ItemAndQunatity
INSERT INTO webshop.item_and_quantity (quantity, item_id)
VALUES (1, 1);
INSERT INTO webshop.item_and_quantity (quantity, item_id)
VALUES (2, 3);
INSERT INTO webshop.item_and_quantity (quantity, item_id)
VALUES (3, 4);
INSERT INTO webshop.item_and_quantity (quantity, item_id)
VALUES (1, 5);
INSERT INTO webshop.item_and_quantity (quantity, item_id)
VALUES (3, 1);
INSERT INTO webshop.item_and_quantity (quantity, item_id)
VALUES (12, 4);
INSERT INTO webshop.item_and_quantity (quantity, item_id)
VALUES (4, 2);
INSERT INTO webshop.item_and_quantity (quantity, item_id)
VALUES (1, 3);
INSERT INTO webshop.item_and_quantity (quantity, item_id)
VALUES (3, 5);

# ShoppingCartItems
INSERT INTO webshop.shopping_cart_items (shopping_cart_id, items_id)
VALUES (1, 1);
INSERT INTO webshop.shopping_cart_items (shopping_cart_id, items_id)
VALUES (1, 2);
INSERT INTO webshop.shopping_cart_items (shopping_cart_id, items_id)
VALUES (2, 3);
INSERT INTO webshop.shopping_cart_items (shopping_cart_id, items_id)
VALUES (2, 4);
INSERT INTO webshop.shopping_cart_items (shopping_cart_id, items_id)
VALUES (3, 5);
INSERT INTO webshop.shopping_cart_items (shopping_cart_id, items_id)
VALUES (4, 6);
INSERT INTO webshop.shopping_cart_items (shopping_cart_id, items_id)
VALUES (4, 7);
INSERT INTO webshop.shopping_cart_items (shopping_cart_id, items_id)
VALUES (4, 8);
INSERT INTO webshop.shopping_cart_items (shopping_cart_id, items_id)
VALUES (4, 9);


