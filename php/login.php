<?php
header('Content-Type: application/json');
// Replace with your real authentication logic
$valid_user = 'admin';
$valid_pass = '1234';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';
    if ($username === $valid_user && $password === $valid_pass) {
        // You can set session/cookie here if needed
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
    exit;
}
// ...existing code for HTML fallback if needed...