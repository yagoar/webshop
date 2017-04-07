
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
VALUES ('single', 'Textilgarn (Baumwolle)', 'Noodles grün', 'http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg', 12.50, 'Stafil', 'grün', 'Baumwolle', 400, 1, 1202111, 86, false);
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_c_id, article_number, stock, deleted)
VALUES ('single', 'Textilgarn (Baumwolle)', 'Noodles blau', 'http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg', 12.50, 'Stafil', 'blau', 'Baumwolle', 400, 2, 1202112, 18, false);
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_c_id, article_number, stock, deleted)
VALUES ('single', 'Textilgarn (Baumwolle)', 'Noodles schwarz', 'http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg', 12.50, 'Stafil', 'schwarz', 'Baumwolle', 400, 3, 1202113, 25, false);
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_c_id, article_number, stock, deleted)
VALUES ('single', 'Textilgarn (Baumwolle)', 'Noodles gelb', 'http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg', 12.50, 'Stafil', 'gelb', 'Baumwolle', 400, 4, 1202114, 12, false);
INSERT INTO webshop.base_item (dtype, description, name, picture_link, price, brand, color, material, weight, category_c_id, article_number, stock, deleted)
VALUES ('single', 'Textilgarn (Baumwolle)', 'Noodles grau', 'http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg', 12.50, 'Stafil', 'grau', 'Baumwolle', 400, 5, 1202115, 1, false);

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