<?php

class UserController {
    public function index() {
        $db = new mysqli('localhost', 'root', '', 'myapp'); 
        $query = "SELECT * FROM users"; 
        $result = $db->query($query);
        $users = [];
        
        while ($row = $result->fetch_assoc()) {
            $users[] = $row;
        }

        include 'views/users.php'; 
    }

    public function store() {
        $db = new mysqli('localhost', 'root', '', 'myapp'); 
        $name = $_POST['name']; 
        $email = $_POST['email']; 
        $query = "INSERT INTO users (name, email) VALUES ('$name', '$email')"; 
        $db->query($query);
        
        header('Location: /users'); 
    }
}