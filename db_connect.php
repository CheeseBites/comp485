<?php

$mysqli = new mysqli("", "", "", "");


if (mysqli_connect_errno()) {
    printf("Connect failed with Error: %s Exiting now...\n", mysqli_connect_error());
    exit();
}


?>
  
 
