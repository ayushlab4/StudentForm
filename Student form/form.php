
<?php
if(isset($_POST['submit'])){
	
include'connect.php';

$image = $_FILES['image']['name'];
$fname = $_POST['fname'];
$mname = $_POST['mname'];
$lname = $_POST['lname'];
$gender = $_POST['gender'];
$dob= $_POST['dob'];
$phoneno = $_POST['phoneno'];
$email = $_POST['email'];
$address = $_POST['address'];
$ssc = $_POST['ssc'];
$mssc = $_POST['mssc'];
$hsc = $_POST['hsc'];
$mhsc = $_POST['mhsc'];
$sem1 = $_POST['sem1'];
$msem1 = $_POST['msem1'];
$sem2 = $_POST['sem2'];
$msem2 = $_POST['msem2'];
$sem3 = $_POST['sem3'];
$msem3 = $_POST['msem3'];
$sem4 = $_POST['sem4'];
$msem4 = $_POST['msem4'];
$sem5 = $_POST['sem5'];
$msem5 = $_POST['msem5'];
$sem6 = $_POST['sem6'];
$msem6 = $_POST['msem6'];
$sem7 = $_POST['sem7'];
$msem7 = $_POST['msem7'];
$sem8 = $_POST['sem8'];
$msem8 = $_POST['msem8'];
$collegename = $_POST['collegename'];
$dname = $_POST['dname'];
$year  = $_POST['year'];
$hobby = $_POST['hobby'];
$skills = $_POST['skills'];
$addcourses=implode(',', $_POST['addcourses']);

$a = mysqli_query($connect,"INSERT INTO fom VALUES('$image','$fname','$mname','$lname','$gender','$dob','$phoneno','$email','$address','$ssc','$mssc','$hsc','$mhsc','$sem1','$msem1','$sem2','$msem2','$sem3','$msem3','$sem4','$msem4','$sem5','$msem5','$sem6','$msem6','$sem7','$msem7','$sem8','$msem8','$collegename','$dname','$year','$hobby','$skills','$addcourses')")or die("Cannoct Insert");
echo("SS");
}



if(isset($_FILES['image'])){
      $errors= array();
      $file_name = $_FILES['image']['name'];
      $file_size =$_FILES['image']['size'];
      $file_tmp =$_FILES['image']['tmp_name'];
      $file_type=$_FILES['image']['type'];
      $file_ext=strtolower(end(explode('.',$_FILES['image']['name'])));
      
      $expensions= array("jpeg","jpg","png");
      
      if(in_array($file_ext,$expensions)=== false){
         $errors[]="extension not allowed, please choose a JPEG or PNG file.";
      }
      
      if($file_size > 2097152){
         $errors[]='File size must be excately 2 MB';
      }
      
      if(empty($errors)==true){
         move_uploaded_file($file_tmp,"images/".$file_name);
         echo "Success";
      }else{
         print_r($errors);
      }
   }

?>

<!DOCTYPE html>
<html>
<head>
	<title>CSI Membership form</title>
	<style>
		fieldset {
    		display: block;
			width: 50%;
			text-align:center;
			margin-left: 25%;
    		margin-right: 25%;
				}
		button:hover {
			 background-color:#1E90FF;
				}
	</style>

	<style>
		input,select,button{
			padding: 5px 8px;
			margin: 4px 0;
			display: inline-block;
			border: 1px solid #ccc;
			border-radius: 3px;
			box-sizing: border-box;
		}
		select{
			padding:11px;
			width:100%;
			border-radius:4px;
			text:bold;
			}
		input[type=text],input[type=date],input[type=mail],input[type=tel],input[type=date]{
			padding:11px;
			width:99%;
			box-sizing:border-box;
		}

		input[type=submit] {
			background-color: #1E90FF;
			color: white;
			padding: 5px 8px;
			margin: 4px 0;
			border: none;
			border-radius: 3px;
			cursor: pointer;
		}

		input[type=submit]:hover {
			background-color:#45a049;
		}
	</style>

	<style>
		legend{
			color:#1E90FF;
		}
		th{
			font-size:16;
		    text-align:center;
		}

		td{
			font-size:14;
			color:blue;
		text-align:left;
		text-transform:capitalize ;
		}
		.td2{
			color:blue;
			text-align:left;
			text-transform:lowercase;
		}
		.td1{
			text-transform:uppercase;
			color:blue;
			text-align:left;
		}
	</style>
</head>
<body style="background-color:gray;">

<form>
	
	<fieldset style="border-radius:30px;border:3px solid black;">
		<legend><h1 style="text-shadow:5px 5px 5px brown;">Personal Detail</h1></legend>
		<table align="right" cellpadding=5>
		<tr>
				<td><?php echo" <img src='images/$image' width='130px' height='100px' align='left'>";	?></td>
			</tr>
			</table>
		<table align="left">	
				
			<tr>
				<th>Name</td>
				<th>:</th>
				<td class="td1"><?php echo"$fname  $mname  $lname"  ?></td>
			</tr>
				<th>Gender</th>
				<th>:</th>
				<td><?php echo"$gender" ?></td>
			
			<tr>
				<th>Date Of Birth</th>
				<th>:</th>
				<td><?php echo"$dob" ?></td>
			</tr>
			<tr>		
				<th>Contact</th>
				<th>:</th>
				<td><?php echo"$phoneno" ?></td>
			</tr>

			<tr>
				<th>Email</th>
				<th>:</th>.
				<td class="td2"><?php echo"$email"  ?></td>
			</tr>

			<tr>
				<th>Address</th>
				<th>:</th>
				<td><?php echo"$address" ?></td>
			</tr>
		</table>
	</fieldset>
<fieldset style="border-radius:30px;border:3px solid black;"> 
<legend><h1 style="text-shadow:5px 5px 5px brown;">Education Qualification</h1></legend>
<table align="center" cellpadding=8>
<caption><h3 style="color:brown">INTER GRADUATE</h3></caption>
<tr>
<th>Education</th>
<th>SSC</th>
<th>HSC</th>
</tr>
<tr>
<th>Year</th>
<td><?php echo"$ssc" ?></th>
<td><?php echo"$hsc" ?></th>
</tr>
<th>Percentage</th>
<td><?php echo"$mssc" ?></td>
<td><?php echo"$mhsc" ?></td>
</tr>
</table>
<table align="center" cellpadding=10>
<caption><h3 style="color:brown">GRADUATE</h3></caption>
<tr>
<th>Education</th>
<th>Sem-I</th>
<th>Sem-&#8545;</th>
<th>Sem-&#8546;</th>
<th>Sem-&#8547;</th>
<th>Sem-&#8548;</th>
<th>Sem-&#8549;</th>
<th>Sem-&#8550;</th>
<th>Sem-&#8551;</th>
</tr>
<tr>
<th>Year</th>
<td><?php echo"$sem1" ?></th>
<td><?php echo"$sem2" ?></th>
<td><?php echo"$sem3" ?></th>
<td><?php echo"$sem4" ?></th>
<td><?php echo"$sem5" ?></th>
<td><?php echo"$sem6" ?></th>
<td><?php echo"$sem7" ?></th>
<td><?php echo"$sem8" ?></th>
</tr>
<tr>
<th>CGPI</th>
<td><?php echo"$msem1" ?></td>
<td><?php echo"$msem2" ?></td>
<td><?php echo"$msem3" ?></td>
<td><?php echo"$msem4" ?></td>
<td><?php echo"$msem5" ?></td>
<td><?php echo"$msem6" ?></td>
<td><?php echo"$msem7" ?></td>
<td><?php echo"$msem8" ?></td>
</tr>
</table>
</fieldset>

	
	<fieldset style="border-radius:30px;border:3px solid black;">
<legend><h1 style="text-shadow:5px 5px 5px red;">College Details</h1></legend>
		<table align="left">
			<tr>
				<th>College Name</th>
				<th>:</th>
				<td class="td1"><?php echo"$collegename" ?></td>
			</tr>
			<tr>
				<th>Department Name</th>
					<th>:</th>
					<td><?php echo"$dname" ?></td>
			</tr>
			<tr>
				<th>Year</th>
				<th>:</th>
				<td><?php echo"$year" ?></td>
			</tr>
</table>
	</fieldset>
	<fieldset style="border-radius:30px;border:3px solid black;">
<legend><h1 style="text-shadow:5px 5px 5px orange;">Additional Details</h1></legend>
		<table align="left">
			<tr>
				<th>Hobby</th>
				<th>:</th>
				<td><?php echo"$hobby" ?></td>
			</tr>
			<tr>
				<th>Additional Skills</th>
				<th>:</th>
				<td><?php echo"$skills" ?></td>
			</tr>
			<tr>
			<th><b>Techical Skills</b></th>
				<th>:</th>	
				<td><?php echo"$addcourses" ?></td>
			</tr>
		</table>
	</fieldset>
</form>
 
</body>
</html>