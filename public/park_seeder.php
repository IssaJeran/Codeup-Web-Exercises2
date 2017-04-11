<?php

// $dbc = new PDO("mysql:host=127.0.0.1;dbname=parks_db", vagrant,
// 		   vagrant);


if (!defined('DB_HOST')) define('DB_HOST','localhost');
if (!defined('DB_USER')) define('DB_USER','parks_user');
if (!defined('DB_PASS')) define('DB_PASS','password');
if (!defined('DB_NAME')) define('DB_NAME','parks_db');

require "db_connect.php";

$dbc->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$deleteRecords = 'TRUNCATE national_parks';

$dbc->exec($deleteRecords);

$national_parks = [
    ['name' => 'Acadia', 'location' => 'Maine',	'date_established' => '1919-02-26',	'area_in_acres' => 48995.91],
    ['name' => 'Arches', 'location' => 'Utah', 'date_established' => '1971-11-12', 'area_in_acres' => 76678.98],
    ['name' => 'Big Bend', 'location' => 'Texas', 'date_established' => '1944-06-12', 'area_in_acres' => 801163.21],
    ['name' => 'Biscayne', 'location' => 'Florida',	'date_established' => '1980-06-28',	'area_in_acres' => 172971.11],
    ['name' => 'Bryce Canyon', 'location' => 'Utah', 'date_established' => '1928-02-25', 'area_in_acres' => 35835.08],
    ['name' => 'Gates of the Arctic', 'location' => 'Alaska',	'date_established' => '1980-12-02',	'area_in_acres' => 7523897.45],
    ['name' => 'Hot Springs', 'location' => 'Arkansas',	'date_established' => '1921-03-04',	'area_in_acres' => 5549.10],
    ['name' => 'Joshua Tree', 'location' => 'California',	'date_established' => '1994-10-31', 'area_in_acres' => 790635.74],
    ['name' => 'Lake Clark', 'location' => 'Alaska',	'date_established' => '1980-12-02',	'area_in_acres' => 2619836.49],
    ['name' => 'Olympic', 'location' => 'Washington',	'date_established' => '1938-06-29',	'area_in_acres' => 922650.10]
];

foreach ($national_parks as $park) {
    $insert = "INSERT INTO national_parks (name, location, date_established, area_in_acres) VALUES ('{$park['name']}', '{$park['location']}', '{$park['date_established']}', '{$park['area_in_acres']}')";

    $dbc->exec($insert);

    // echo "Inserted ID: " . $dbc->lastInsertId() . PHP_EOL;
}


?>