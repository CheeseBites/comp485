<?php
require_once( "db_connect.php" );

$userNameProvider = $mysqli->real_escape_string($_GET['username']);
$passwordProvider = $mysqli->real_escape_string($_GET['password']);

$query = "select password from users where username= '" . $userNameProvider . "'";

$queryrun = $mysqli->query( $query ) or die( $mysqli->error . __LINE__ ); 


if ( $queryrun->num_rows > 0 ) {
                while ( $row = $queryrun->fetch_assoc() ) {
                                if ( !strcmp( $row['password'], $passwordProvider ) ) {
                                                echo "Successfully logged in,  " . $_GET['username'];
                                                
                                }
                                else {
                                                echo "Username " . $_GET['username'] . " already exists. <br/>";
                                                
                                                
                                }

                                
                                
                } 
} 

else {
                
                
                $result = $mysqli->query( "insert into users(password,username) values (
             '" . $passwordProvider . "' ,'" . $userNameProvider . "')" ) or die( $mysqli->error . __LINE__ );
                
                
                if ( $result ) {
                                echo "Success! Your username " . $_GET['username'] . " was successfully registered";
                                
                }
                else {
                                echo "Failure in insertion";
                                die( 'Invalid query: ' . mysql_error() );
                                
                }
}

$mysqli->close();
?>