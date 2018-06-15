<?php

if($_SERVER['REQUEST_METHOD'] == 'POST'){

	function test_input($data) {
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}

	$user = test_input($_POST['username']);
	$ww = test_input($_POST['password']);

	session_start();

	if($user = "GAST" && $ww = "Welkom#1") {
		
		$user = mysqli_fetch_row($result);
		$_SESSION['ingelogd'] = "ja";
		$_SESSION['user'] = $user;
		header("Location: homepage.php");

	}else{

		$_SESSION['error'] = "Inloggen is niet gelukt.";
		header("Location: inloggen.php");


	}
}
?>