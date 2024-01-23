<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Data types in PHP</h1>
    <?php 
    // String
    $variableLocal='Hello PHP';
    echo "<h2>String : </h2>";
    echo "Value : ". $variableLocal ."<br>";
    echo "Data Type : ". gettype($variableLocal) . "<br><br>";

    // Integer
    $variableLocal=10;
    echo "<h2>Integer : </h2>";
    echo "Value : ". $variableLocal ."<br>";
    echo "Data Type : ". gettype($variableLocal) . "<br><br>";

    // Float
    $variableLocal=55.3;
    echo "<h2>Float : </h2>";
    echo "Value : ". $variableLocal ."<br>";
    echo "Data Type : ". gettype($variableLocal) . "<br><br>";

    // Boolean
    $variableLocal=TRUE;
    echo "<h2>Boolean : </h2>";
    echo "Value : ". $variableLocal ."<br>";
    echo "Data Type : ". gettype($variableLocal) . "<br><br>";

    // // Array
    // $variableLocal= array("Apple","Banana","Orange");
    // echo "<h2>Array : </h2>";
    // echo "Value : ";
    // print_r($variableLocal);
    // echo "<br>"
    // echo "Data Type : ". gettype($variableLocal) . "<br><br>";

    // NULL
    $variableLocal=null;
    echo "<h2>Boolean : </h2>";
    echo "Value : ". $variableLocal ."<br>";
    echo "Data Type : ". gettype($variableLocal) . "<br><br>";

    // // Object
    // $variableLocal=new stdClass();
    // variableLocal->name='Shawaal';
    // variableLocal->age=22;
    // echo "<h2>Object : </h2>";
    // echo "Value : ";
    // print_r($variableLocal);
    // echo "<br>";
    // echo "Data Type : ". gettype($variableLocal) . "<br><br>";

    ?>

<h1>Functions in PHP</h1>
<?php
    // $text="Hello PHP";
    // echo "<b>"."The Original String is : ".$text."<br>"
    // $lowercaseText=strtolower($text);
    // echo "Lower case text is : ".$lowercaseText."<br><br>"

    // $text="Hello World";
    // echo "<b>"."The Original String is : ".$text."<br>"
    // $newString=str_replace("World","PHP",$text);
    // echo "New text is : ".$newString."<br><br>"

    // $fruits= array("Apple","Banana","Orange");
    // echo "<b>"."Array is : ".$fruits."<br>"
    // $numOfFruits=count($fruits);
    // echo "Count is : ".$numOfFruits."<br><br>"

    $fileContent=file_get_contents("intro.txt");
    echo "Reading File Content ". $fileContent ."<br><br>"
?>

</body>
</html>