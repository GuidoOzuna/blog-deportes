<?php
require 'db.php';
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    $stmt = $conn->prepare("SELECT password FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();
    $stmt->bind_result($hash);
    $stmt->fetch();
    
    if (password_verify($password, $hash)) {
        echo "Login exitoso";
    } else {
        echo "Usuario o contraseña incorrectos";
    }
    $stmt->close();
}
?>