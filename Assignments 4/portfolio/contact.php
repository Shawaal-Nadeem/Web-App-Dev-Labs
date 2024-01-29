<?php
$servername='localhost';
$username='root';
$password='';
$database='portfolio';

$conn=new mysqli($servername,$username,$password,$database);

if($conn->connect_error){
    die ("Connection Failed: ". $conn->connect_error );
}

$name=$_POST['name'];
$email=$_POST['email'];
$message=$_POST['message'];

$sql="INSERT INTO visitors (name,email,message) VALUES ('$name','$email','$message')";

if($conn->query($sql)===true){
    echo "Thank you for your feedback.";
}
else{
    echo "Error inserting record" . $conn->error . '\n';
}

$conn->close();
?>