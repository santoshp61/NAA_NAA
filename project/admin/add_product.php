<?php
session_start();
if (!isset($_SESSION['admin'])) {
    header("Location: login.php");
    exit;
}

include "../db.php";

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $price = $_POST['price'];
    $desc = $_POST['description'];

    // IMAGE UPLOAD
    $imageName = $_FILES['image']['name'];
    $tempName = $_FILES['image']['tmp_name'];

    $allowed = ['jpg','jpeg','png','webp'];
    $ext = strtolower(pathinfo($imageName, PATHINFO_EXTENSION));

    if (!in_array($ext, $allowed)) {
        echo "Invalid image format!";
        exit;
    }

    // unique name 
    $newImageName = time() . "_" . rand(1000,9999) . "." . $ext;

    // move image
    move_uploaded_file($tempName, "../uploads/" . $newImageName);

    // Insert into DB
    $sql = "INSERT INTO products (name, price, image, description) 
            VALUES ('$name', '$price', '$newImageName', '$desc')";

    if ($conn->query($sql)) {
        echo "Product added successfully!";
    } else {
        echo "Error: " . $conn->error;
    }
}
?>

<h2>Add Product</h2>
<form method="POST" enctype="multipart/form-data">
    <input type="text" name="name" placeholder="Product Name" required><br><br>
    <input type="number" name="price" step="0.01" placeholder="Price" required><br><br>
    <textarea name="description" placeholder="Description"></textarea><br><br>
    <input type="file" name="image" required><br><br>
    <button name="submit">Add Product</button>
</form>
