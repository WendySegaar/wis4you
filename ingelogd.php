<?php

if($_SERVER['REQUEST_METHOD'] == 'POST'){

	require('connect.php');

	function test_input($data) {
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}

	$user = test_input($_POST['username']);
	$ww = test_input($_POST['password']);

	$user = mysqli_real_escape_string($conn, $user);
	$ww = mysqli_real_escape_string($conn, $ww);

	$sql = "
	SELECT * FROM user
	WHERE user = '".$user."'
	AND pass = '".$ww."'";

	$result = mysqli_query($conn, $sql);
	if(!$result){
		die("Query niet gelukt");
	}
	$aantal = mysqli_num_rows($result);

	session_start();


	if($aantal == 1) {
		
		$user = mysqli_fetch_row($result);
		$_SESSION['ingelogd'] = "ja";
		$_SESSION['user'] = $user;
		header("Location: homepage.php");

	}else{

		$_SESSION['error'] = "Inloggen is niet gelukt.";
		header("Location: index.php");


	}
}
?>