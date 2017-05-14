<html>
<body>

this is the data scraper<br>
data is sent from here into the db<br>

<?php

$hostname = 'localhost';
$username = 'sarifind_mreed11473';
$password = '$arif_9273';
$database = 'sarifind_memorygame';
$tablename = 'data_beta';

$choice1 = $_POST["c1"];
$choice2 = $_POST["c2"];
$choice3 = $_POST["c3"];
$choice4 = $_POST["c4"];
$inage	= $_POST["age"];
$insex	= $_POST["sex"];
$inrace = $_POST["race"];
echo 'c1: ' . $choice1;
echo 'c2: ' . $choice2;
echo 'c3: ' . $choice3;
echo 'c4: ' . $choice4;
echo 'age: ' . $inage;
echo 'gen: ' . $insex;
echo 'race: ' . $inrace;


try
{
	$conn = new PDO("mysql:host=$hostname;dbname=$database", $username, $password);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	// echo "connected to $database";
	$sql = "INSERT INTO $tablename (choice1, choice2, choice3, choice4, age, gender, race) 
	VALUES ('$choice1','$choice2','$choice3','$choice4','$inage','$insex','$inrace')";
	echo $sql;
	$conn->exec($sql);
	echo "new record entered!";
}
catch(PDOException $e)
{
	echo "connection failed: " . $e->getMessage();
}

//close connection
$conn = null;

// $con = mysqli_connect('localhost','sarifind_mreed11473','$arif_9273','sarifind_memorygame');

// // Check connection
// if (mysqli_connect_errno())
// {
// 	echo "Failed to connect to MySQL: " . mysqli_connnect_error();
// }
// else
// {
// 	echo "connected. LUL";
// }
// if (!$con)
// {
// 	die('Could not connect: ' . mysqli_error($con));
// }

// if (class_exists('PDO')) echo 'PDO enabled!';

// mysqli_select_db($con,"test");
//$sql="SELECT * FROM us"

?>

</body>
</html>