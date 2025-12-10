<?php
session_start();
include "../db.php";

if (isset($_POST['email'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // admin table with only 1 admin
    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        $admin = $result->fetch_assoc();

        if (password_verify($password, $admin['password'])) {
            $_SESSION['admin'] = $admin['id'];
            header("Location: dashboard.php");
            exit;
        } else {
            echo "Wrong password!";
        }
    } else {
        echo "Admin not found!";
    }
}
?>

<form method="POST">
    <input type="email" name="email" placeholder="Admin Email" required>
    <input type="password" name="password" placeholder="Password" required>
    <button>Login</button>
</form>
