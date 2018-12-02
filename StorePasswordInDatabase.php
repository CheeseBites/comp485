<?php
require_once( "db_info.php" );

//echo $_GET['username']." ".$_GET['password'];

$userNameProvider = $mysqli->real_escape_string($_GET['username']);
$passwordProvider = $mysqli->real_escape_string($_GET['password']);

$query = "select password from gesturepassword where username= '" . $userNameProvider . "'";

$queryrun = $mysqli->query( $query ) or die( $mysqli->error . __LINE__ ); 


if ( $queryrun->num_rows > 0 ) {
                
                //$row = mysql_fetch_array($queryrun);
                while ( $row = $queryrun->fetch_assoc() ) {
                                
                                if ( !strcmp( $row['password'], $passwordProvider ) ) {
                                                //Successful and unlock doors
                                                echo "Successfully logged in,  " . $_GET['username'];
                                                //$row->close();
                                                
                                }
                                else {
                                                //failed authentication
                                                echo "Username " . $_GET['username'] . " already exists. <br/>";
                                                
                                                
                                }

                                
                                
                } 
} 

else {
                
                
                $result = $mysqli->query( "insert into gesturepassword(password,username) values (
             '" . $passwordProvider . "' ,'" . $userNameProvider . "')" ) or die( $mysqli->error . __LINE__ );
                
                
                if ( $result ) {
                                //insert successful
                                echo "Success! Your username " . $_GET['username'] . " was successfully registered";
                                
                } //$result
                else {
                                //insert failure
                                echo "Failure in insertion";
                                die( 'Invalid query: ' . mysql_error() );
                                
                }
}

$mysqli->close();
?>