
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

# SingleItem
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_id)
VALUES ('single', 'Textilgarn (Baumwolle)', 'Noodles grün', 'http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg', 12.50, 'Stafil', 'grün', 'Baumwolle', 400, 1);
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_id)
VALUES ('single', 'Textilgarn (Baumwolle)', 'Noodles blau', 'http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg', 12.50, 'Stafil', 'blau', 'Baumwolle', 400, 2);
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_id)
VALUES ('single', 'Textilgarn (Baumwolle)', 'Noodles schwarz', 'http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg', 12.50, 'Stafil', 'schwarz', 'Baumwolle', 400, 3);
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_id)
VALUES ('single', 'Textilgarn (Baumwolle)', 'Noodles gelb', 'http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg', 12.50, 'Stafil', 'gelb', 'Baumwolle', 400, 4);
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_id)
VALUES ('single', 'Textilgarn (Baumwolle)', 'Noodles grau', 'http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg', 12.50, 'Stafil', 'grau', 'Baumwolle', 400, 5);

# MultipleItem
INSERT INTO webshop.base_item (dtype, description, name, price, category_id, picture_link)
VALUES ('multiple', 'Häkelset Kissenbezug', 'Kissenbezug blau/grün', 19.99, 1, 'http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg');
INSERT INTO webshop.base_item (dtype, description, name, price, category_id, picture_link)
VALUES ('multiple', 'Häkelset Kissenbezug', 'Kissenbezug grau', 19.99, 2, 'http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg');
INSERT INTO webshop.base_item (dtype, description, name, price, category_id, picture_link)
VALUES ('multiple', 'Häkelset Kissenbezug', 'Kissenbezug schwarz', 19.99, 3, 'http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg');
INSERT INTO webshop.base_item (dtype, description, name, price, category_id, picture_link)
VALUES ('multiple', 'Häkelset Stuhlhusse', 'Husse grün', 19.99, 4, 'http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg');
INSERT INTO webshop.base_item (dtype, description, name, price, category_id, picture_link)
VALUES ('multiple', 'Häkelset Stuhlhusse', 'Husse gelb', 19.99, 5, 'http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg');

INSERT INTO webshop.base_item_items (multiple_item_id, items_id)
VALUES (6, 1);
INSERT INTO webshop.base_item_items (multiple_item_id, items_id)
VALUES (6, 1);
INSERT INTO webshop.base_item_items (multiple_item_id, items_id)
VALUES (6, 2);
INSERT INTO webshop.base_item_items (multiple_item_id, items_id)
VALUES (6, 2);
INSERT INTO webshop.base_item_items (multiple_item_id, items_id)
VALUES (7, 5);
INSERT INTO webshop.base_item_items (multiple_item_id, items_id)
VALUES (7, 5);
INSERT INTO webshop.base_item_items (multiple_item_id, items_id)
VALUES (8, 3);
INSERT INTO webshop.base_item_items (multiple_item_id, items_id)
VALUES (8, 3);
INSERT INTO webshop.base_item_items (multiple_item_id, items_id)
VALUES (9, 1);
INSERT INTO webshop.base_item_items (multiple_item_id, items_id)
VALUES (9, 1);
INSERT INTO webshop.base_item_items (multiple_item_id, items_id)
VALUES (10, 4);
INSERT INTO webshop.base_item_items (multiple_item_id, items_id)
VALUES (10, 4);

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

# ItemAndQuantity
INSERT INTO webshop.item_and_quantity (quantity, item_id)
VALUES (1, 1);
INSERT INTO webshop.item_and_quantity (quantity, item_id)
VALUES (2, 8);
INSERT INTO webshop.item_and_quantity (quantity, item_id)
VALUES (3, 7);
INSERT INTO webshop.item_and_quantity (quantity, item_id)
VALUES (1, 5);
INSERT INTO webshop.item_and_quantity (quantity, item_id)
VALUES (3, 10);
INSERT INTO webshop.item_and_quantity (quantity, item_id)
VALUES (12, 4);
INSERT INTO webshop.item_and_quantity (quantity, item_id)
VALUES (4, 5);
INSERT INTO webshop.item_and_quantity (quantity, item_id)
VALUES (1, 6);
INSERT INTO webshop.item_and_quantity (quantity, item_id)
VALUES (3, 1);

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

# ShoppingOrderItems
INSERT INTO webshop.shopping_order_items (shopping_order_id, items_id)
VALUES (1, 1);
INSERT INTO webshop.shopping_order_items (shopping_order_id, items_id)
VALUES (1, 2);
INSERT INTO webshop.shopping_order_items (shopping_order_id, items_id)
VALUES (2, 3);
INSERT INTO webshop.shopping_order_items (shopping_order_id, items_id)
VALUES (2, 4);
INSERT INTO webshop.shopping_order_items (shopping_order_id, items_id)
VALUES (3, 5);
INSERT INTO webshop.shopping_order_items (shopping_order_id, items_id)
VALUES (4, 6);
INSERT INTO webshop.shopping_order_items (shopping_order_id, items_id)
VALUES (4, 7);
INSERT INTO webshop.shopping_order_items (shopping_order_id, items_id)
VALUES (7, 8);
INSERT INTO webshop.shopping_order_items (shopping_order_id, items_id)
VALUES (7, 9);