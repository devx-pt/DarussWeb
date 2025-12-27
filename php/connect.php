<?php

$hostname = "localhost";
$username = "root";
$password = "password";
$dbname = "database";
$port = Null;
$socket = Null;


$conn = mysqli_connect($hostname, $username, $password, $dbname, $port, $socket);

if(!$conn){
    die("Connection failed: " . mysqli_connect_error());
}else{
    mysqli_set_charset($conn, "utf8");
}
?>