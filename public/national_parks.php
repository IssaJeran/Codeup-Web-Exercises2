<?php

if (!defined('DB_HOST')) define('DB_HOST','localhost');
if (!defined('DB_USER')) define('DB_USER','parks_user');
if (!defined('DB_PASS')) define('DB_PASS','password');
if (!defined('DB_NAME')) define('DB_NAME','parks_db');

require_once 'db_connect.php';

$dbc->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// $c = count
// $l = limit
// $o = offset

$c = $dbc->query('SELECT count(*) FROM national_parks')->fetchColumn();
$l = 4;
$numPages = ceil($c / $l);
$page = isset($_GET['page']) ? $_GET['page'] : 1;
$nextPage = $page + 1;
$prevPage = $page - 1;
$o = ($page - 1) * 4;


$stmt = $dbc->prepare('SELECT * FROM national_parks LIMIT :limit OFFSET :offset');
$stmt->bindValue(':limit', $l, PDO::PARAM_INT);
$stmt->bindValue(':offset', $o, PDO::PARAM_INT);
$stmt->execute();

$parks = $stmt->fetchAll(PDO::FETCH_ASSOC);

// var_dump($parks);

?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>national_parks exercise</title>
    <link rel="stylesheet" type="text/css" href="parks.css">
</head>
<body class = "background">
	<div class = "centered">
	<h1 style=text-align:center;">National Parks</h1>
	<table class ="centered-table" style=text-align:center;>
		<tr>
			<th>Name</th>
			<th>Location</th>
			<th>Date Established</th>
			<th>Area in Acres</th>
		</tr>
		<?php foreach ($parks as $park): ?>
		<tr>
			<td><?= $park['name']?></td>
			<td><?= $park['location']?></td>
			<td><?= $park['date_established']?></td>
			<td><?= $park['area_in_acres']?></td>
		</tr>
		<?php endforeach; ?>
		</table>

		<!-- Pagination -->
	<div>
	  <?php if ($page == 1): ?>
	    <div class="button"><a href="/national_parks.php?page=<?= $nextPage; ?>">Next</a></div>
	  <?php endif; ?>
	  <?php if ($page > 1 && $page < $numPages): ?>
        <div class="button"><a href="/national_parks.php?page=<?= $nextPage; ?>">Next</a></div>
      	<div class="button"><a href="/national_parks.php?page=<?= $prevPage; ?>">Previous</a></div>
      	<?php endif; ?>	
	  <?php if ($page == $numPages): ?>
	    <div class="button"><a href="/national_parks.php?page=<?= $prevPage; ?>">Previous</a></div>
	  <?php endif; ?>
    </div>
</body>
</html>