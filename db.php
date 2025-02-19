<?php
$servername = "192.168.0.4";
$username = "root";
$password = "root";
$dbname = "mi_database";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>