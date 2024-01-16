<?php
// Conectare la baza de date
$servername = "localhost";
$username = "Mihai";
$password = "Mih@itech22";
$dbname = "forum";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificare conexiune
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Adăugare post în baza de date
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $title = $_POST["title"];
    $content = $_POST["content"];

    $sql = "INSERT INTO posts (title, content) VALUES ('$title', '$content')";
    $conn->query($sql);
}

// Obținere postări din baza de date
$result = $conn->query("SELECT * FROM posts");
$posts = [];

while ($row = $result->fetch_assoc()) {
    $posts[] = $row;
}

// Returnare postări în format JSON
echo json_encode($posts);

$conn->close();
?>
