<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
    <style>
        .bgcolor {
            background-color: rgba(15, 23, 42, 255);
            position:absolute;
            left:0;
            top:0;
            right:0;
            bottom:0;
            height:100vh;
        }
        .projects{
            background-color: rgba(15, 23, 42, 255);
        }
        .projects .content {
            margin-left: 4%;
            margin-top: 3.5%;
        }

        .projects .content h1 {
            font-family: 'popins', sans-serif;
            font-size: 50px;
            font-weight: 550;
            text-decoration: underline #5c5efd;
            color: #FFFFFF;
        }

        
    </style>

</head>
<body>
    <?php

    $servername='localhost';
    $username='root';
    $password='';
    $database='portfolio';

    $conn=new mysqli($servername,$username,$password,$database);

    if($conn->connect_error){
        die ("Connection Failed: ". $conn->connect_error );
    }

    $sql = "SELECT * FROM projects";
    $result = $conn->query($sql);
    ?>
    <div class="bgcolor">
        <div class="projects">
            <br/> 
            <div class="content">
                <h1>PROJECTS</h1>
            <?php   
                    while ($row = $result->fetch_assoc()) {

                        echo "
                        <a href={$row['project_link']} style='text-decoration:none'>
                        <div style='background-color: #fff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); padding: 20px; text-align: center; margin: 50px; width: 85%;'>
                        <img src={$row['image']} style=' width: 450px; height: 250px; margin-bottom: 10px;'>
                            <div style='font-size: 18px; font-weight: bold; color: #333; margin-bottom: 8px;'>{$row['name']}</div>
                            <div style='font-size: 16px; color: #444; margin-bottom: 12px;'>{$row['description']}</div>
                        </div>
                        </a>
                        ";
                    }
            ?>
            </div>
            <br/><br/><br/>
        </div>
    </div>

    <?php
    $conn->close();
    ?>
</body>
</html>
