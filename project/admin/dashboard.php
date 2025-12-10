<?php
session_start();
if (!isset($_SESSION['admin'])) {
    header("Location: login.php");
    exit;
}

include "../db.php";
$products = $conn->query("SELECT * FROM products");
?>

<h2>Admin Dashboard</h2>
<a href="add_product.php">Add Product</a>
<a href="logout.php">Logout</a>

<table border="1" cellpadding="10">
<tr>
    <th>ID</th>
    <th>Name</th>
    <th>Price</th>
    <th>Image</th>
</tr>

<?php while ($row = $products->fetch_assoc()) { ?>
<tr>
    <td><?= $row['id'] ?></td>
    <td><?= $row['name'] ?></td>
    <td><?= $row['price'] ?></td>
    <td><img src="../uploads/<?= $row['image'] ?>" width="70"></td>
</tr>
<?php } ?>

</table>
