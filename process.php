<?php
include("config.php");
extract($_POST);
$sql = "INSERT INTO `contact-data`(`firstname`, `lastname`, `phone`, `email`, `message`) VALUES ('".$firstname."','".$lastname."',".$phone.",'".$email."','".$message."')";
$result = $mysqli->query($sql);
if(!$result){
  echo "Some Thing went error ".$mysqli->error;
//    die("Couldn't enter data: ".$mysqli->error);
}
echo "Thank You For Contacting Us ";
$mysqli->close();
//print_r($_POST)
?>