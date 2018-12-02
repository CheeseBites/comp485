<?php

$mysqli = new mysqli("localhost", "root", "", "comp485");


//echo $mysqli;
//Check connection 
if (mysqli_connect_errno()) {
    printf("Connect failed with Error: %s Exiting now...\n", mysqli_connect_error());
    exit();
}


?>
  
 
