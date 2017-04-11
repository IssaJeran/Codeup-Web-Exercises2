<?php

// $dbc = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME,
// 		   DB_USER,
// 		   DB_PASS);

// $dbc->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

if (!defined('DB_HOST')) define('DB_HOST','localhost');
if (!defined('DB_USER')) define('DB_USER','parks_user');
if (!defined('DB_PASS')) define('DB_PASS','password');
if (!defined('DB_NAME')) define('DB_NAME','parks_db');

require "db_connect.php";

$dbc->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// $dbc = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME,
// 		   DB_USER,
// 		   DB_PASS);

$query = 'DROP TABLE IF EXISTS national_parks';

$dbc->exec($query);

$query = 'CREATE TABLE IF NOT EXISTS national_parks (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(240) NOT NULL,
    location VARCHAR(240) NOT NULL,
    date_established DATE NOT NULL,
    area_in_acres DOUBLE NOT NULL,
    PRIMARY KEY (id)
)';

$dbc->exec($query);



?>