<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Assuming the content type is application/json
    $data = json_decode(file_get_contents('php://input'), true);
    $firstName = filter_var($data['firstName'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $lastName = filter_var($data['lastName'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
    $password = password_hash($data['password'], PASSWORD_DEFAULT); // Hashing the password

    // Prepare SQL statement to prevent SQL injection
    $sql = "INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);

    // Bind parameters and execute statement
    $stmt->bind_param("ssss", $firstName, $lastName, $email, $password); // 'ssss' denotes 4 string parameters
    if ($stmt->execute()) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
} else {
    // Not a POST request, display or redirect to the form
    header("Location: Signup.tsx");
}

$conn->close();
