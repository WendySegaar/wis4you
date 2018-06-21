<?php
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "wis4you";

$conn = mysqli_connect($host, $user, $pass, $dbname);

if(mysqli_connect_errno()){
	die("Database connection failed: " .
		mysqli_connect_error() .
		" (" . mysqli_connect_errno() . ")"
	);
}
?>