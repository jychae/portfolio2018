<?php
if(empty($_POST)('submit'))
{
  echo "Form is not submitted!";
  exit;
}
if(empty ($_POST["Fullname"]) ||
empty($_POST["email"]))
{
  echo "Please fill the form";
  exit;
}
$name = $_POST["fullname"];
$email = $_POST["email"];

 ?>
