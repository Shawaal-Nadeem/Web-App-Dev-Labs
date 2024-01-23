<?php
$servername='localhost';
$username='root';
$password='';
$database='carreg';

$conn=new mysqli($servername,$username,$password,$database);

if($conn->connect_error){
    die ("Connection Failed: ". $conn->connect_error );
}

$registration=$_POST['registration'];
$brand=$_POST['brand'];
$engine=$_POST['engine'];
$seating_capacity=$_POST['seating_capacity'];

$sql="INSERT INTO credentials (Reg,Brand,Engine,Capacity) VALUES ('$registration','$brand','$engine','$seating_capacity')";

if($conn->query($sql)===true){
    echo "Record Inserted Successfully";
}
else{
    echo "Error inserting record" . $conn->error . '\n';
}

$conn->close();
?>