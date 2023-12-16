function text(){
	//profile photo
	var  im=document.form.image.value;
	if(im == ""){
		alert("Please Upload Profile Photo!!!");
		return false;
	}
	//fname
	var x=document.form.fname;
		if(x.value ==""){
			alert("Please Enter FirstName!!!");
			//document.getElementById("nameloc").innerHTML="<img src='unchecked.png' width='10px' height='10px'/>";
			document.getElementById("f1").focus();
			return false;
		}
		if(!allLetter(x))
		{
			alert("Please Enter Only Character!!!")
			//document.getElementById("f1").innerHTML= "<img src='unchecked.png'/> Please enter Only character"; 
			document.getElementById("f1").focus();
			return false;
		}
		//mname
		var y=document.form.mname;
		if(y ==""){
			alert("Please Enter MiddleName!!!");
			document.getElementById("m1").focus();
			return false;
		}
		if(!allLetter(y))
		{
			alert("Please Enter Only Character!!!");
			document.getElementById("m1").focus();
			return false;
		}      
		//lname
		var w=document.form.lname;
		if(w ==""){
			alert("Please Enter LastName!!!");
			document.getElementById("l1").focus();
			return false;
		}
		if(!allLetter(w))
		{
			alert("Please Enter Only Character!!!");
			document.getElementById("l1").focus();
			return false;
		}
		
		//gender
		var g = document.form.gender.value;
		if(g == "")
		{
			alert("Please Select Gender!!!");
			return false;
		}
		
		//dob
		if(document.form.dob.value=="")
		{
			alert("Please Enter DOB!!!");
			document.getElementById("dob1").focus();
			return false;
		}
	
		//phoneno
		var z=document.form.phoneno;
		if(z.value==""){
			alert("Please Enter the PhoneNo!!!");
			document.getElementById("pno1").focus();
			return false;
		}
		if(z.value.length!=10){
			alert("Enter 10 digit Phone Number!!!");
			document.getElementById("pno1").focus();
			return false;
		}
		if(!allnumeric(z)){
			alert("Enter valid Phone Number!!!");
			document.getElementById("pno1").focus();
			return false;
		}
		//email
		var id=document.form.email;
		if(id.value=="")
		{
		alert("Enter Email-Id!!!");
		document.getElementById("mail1").focus();
		return false;
		}
		if (! ValidateEmail(id)) {
		 alert('Please input valid Email ID!!!');
      return false;
		}
		//address
		var add=document.form.address.value;
		if(add=="")
		{
			alert("Please Enter Address!!!");
			return false;
		}

		//ssc year
		var mon=document.form.ssc.value;
		if(mon == ""){
			alert("Please Enter Year of passing in SSC!!!");
			document.getElementById("s1").focus();
			return false;
		}
		//ssc mark
		var mar=document.form.mssc;
		if(mar.value == ""){
		alert("Please Enter Score of SSC!!!");
		document.getElementById("m11").focus();
		return false; 
		}
		if (!mar.value.match(/^(\d{2})(\.\d{2})(\%)$/)){
			alert("Enter in the Format of Percentage. e.g 45.00%");
			document.getElementById("m11").focus();
			return false;
		}
		
		
		
		//hsc year
		var mon1=document.form.hsc.value;
		if(mon1 == ""){
			alert("Please Enter Year of passing in HSC!!!");
			document.getElementById("h1").focus();
			return false;
		}
		
		//hsc marks
		var mar1=document.form.mhsc;
		if(mar1.value == ""){
		alert("Please Enter Score of HSC!!!");
		document.getElementById("m2").focus();
		return false;
		}
		if (!mar1.value.match(/^(\d{2})(\.\d{2})(\%)$/)){
			alert("Enter in the Format of Percentage. e.g 45.00%");
			document.getElementById("m2").focus();
			return false;
		}
		
		//SEM1
		var s11=document.form.msem1;
		var sy=document.form.sem1;
		if(s11.value == ""  && s11.value !="NA"){
			alert("Please Write NA if not applicable!!!");
			document.getElementById("s11").focus();
			return false;
		}
		else if (!s11.value.match(/^(\d{0,2})(\.\d{2})$/) && s11.value !="NA" ){
				alert("Please Enter Valid pointer. eg 6.70");
				document.getElementById("s11").focus();
				return false;
		}
		if(sy.value == "" && s11.value !="NA"){
			alert("Enter the Year of Sem2");
			document.getElementById("sy").focus();
			return false;
		}
		//SEM2
		var s12=document.form.msem2;
		var sy1=document.form.sem2;
		if(s12.value == ""  && s12.value !="NA"){
			alert("Please Write NA if not applicable!!!");
			document.getElementById("s12").focus();
			return false;
		}
		else if (s12.value.match(/^(\d{0,2})(\.\d{2})$/) && s12.value !="NA" ){
				alert("Please Enter Valid pointer. eg 6.70");
				document.getElementById("s12").focus();
				return false;
		}	
		if(sy1.value == "" && s12.value !="NA"){
			alert("Enter the Year of Sem2");
			document.getElementById("sy1").focus();
			return false;
		}
		
		//sem3
		var s13=document.form.msem3;
		var sy2=document.form.sem3;
		if(s13.value == ""  && s13.value !="NA"){
			alert("Please Write NA if not applicable!!!");
			document.getElementById("s13").focus();
			return false;
		}
		else if (s13.value.match(/^(\d{0,2})(\.\d{2})$/) && s13.value !="NA" ){
				alert("Please Enter Valid pointer. eg 6.70");
				document.getElementById("s13").focus();
				return false;
		}
		if(sy2.value == "" && s13.value !="NA"){
			alert("Enter the Year of Sem2");
			document.getElementById("sy2").focus();
			return false;
		}
		//sem4
		var s14=document.form.msem4;
		var sy3=document.form.sem4;
		if(s14.value == ""  && s14.value !="NA"){
			alert("Please Write NA if not applicable!!!");
			document.getElementById("s14").focus();
			return false;
		}
		else if (s14.value.match(/^(\d{0,2})(\.\d{2})$/) && s14.value !="NA" ){
				alert("Please Enter Valid pointer. eg 6.70");
				document.getElementById("s14").focus();
				return false;
		}	
		if(sy3.value == "" && s14.value !="NA"){
			alert("Enter the Year of Sem2");
			document.getElementById("sy3").focus();
			return false;
		}
		//sem5
		var s15=document.form.msem5;
		var sy4=document.form.sem5;
		if(s15.value == ""  && s15.value !="NA"){
			alert("Please Write NA if not applicable!!!");
			document.getElementById("s15").focus();
			return false;
		}
		else if (s15.value.match(/^(\d{0,2})(\.\d{2})$/) && s15.value !="NA" ){
				alert("Please Enter Valid pointer. eg 6.70");
				document.getElementById("s15").focus();
				return false;
		}	
		if(sy4.value == "" && s15.value !="NA"){
			alert("Enter the Year of Sem5");
			document.getElementById("sy4").focus();
			return false;
		}
		//sem6
		var s16=document.form.msem6;
		var sy5=document.form.sem6;
		if(s16.value == ""  && s16.value !="NA"){
			alert("Please Write NA if not applicable!!!");
			document.getElementById("s16").focus();
			return false;
		}
		else if (s16.value.match(/^(\d{0,2})(\.\d{2})$/) && s16.value !="NA" ){
				alert("Please Enter Valid pointer. eg 6.70");
				document.getElementById("s16").focus();
				return false;
		}	
		if(sy5.value == "" && s16.value !="NA"){
			alert("Enter the Year of Sem6");
			document.getElementById("sy5").focus();
			return false;
		}
		//sem7
		var s17=document.form.msem7;
		var sy6=document.form.sem7;
		if(s17.value == ""  && s17.value =="NA"){
			alert("Please Write NA if not applicable!!!");
			document.getElementById("s17").focus();
			return false;
		}
		else if (s17.value.match(/^(\d{0,2})(\.\d{2})$/) && s17.value !="NA" ){
				alert("Please Enter Valid pointer. eg 6.70");
				document.getElementById("s17").focus();
				return false;
		}	
		if(sy6.value == "" && s17.value !="NA"){
			alert("Enter the Year of Sem7");
			document.getElementById("sy6").focus();
			return false;
		}
		//sem8
		var s18=document.form.msem8;
		var sy7=document.form.sem8;
		if(s18.value == ""  && s18.value !="NA"){
			alert("Please Write NA if not applicable!!!");
			document.getElementById("s18").focus();
			return false;
		}
		else if (s18.value.match(/^(\d{0,2})(\.\d{2})$/) && s18.value !="NA" ){
				alert("Please Enter Valid pointer. eg 6.70");
				document.getElementById("s18").focus();
				return false;
		}	
		if(sy7.value == "" && s18.value !="NA"){
			alert("Enter the Year of Sem8");
			document.getElementById("sy7").focus();
			return false;
		}
		
		var cz=document.form.addcerti.value;
		if(cz == ""){
			alert("Additional certificate cannot be blank");
			document.getElementById("ad1").focus();
			return false;
		}
			//College name
		var cname=document.form.collegename.value;
		if(cname == ""){
			alert("Please Enter College Name!!!");
			document.getElementById("coll1").focus();
			return false;
		}
		
		if(!isNaN(cname)){
			alert("Invalid College Name");
			document.getElementById("coll1").focus();
			return false;
		}
		//Department name
		var dpname=document.form.dname.selectedIndex;
		if(dpname == 0){
			alert("Please Select the Department!!!");
			document.getElementById("dept1").focus();
			return false;
		}
		//select year
		var yname=document.form.year.selectedIndex;
		if(yname == 0){
			alert("Please Select the Year!!!");
			document.getElementById("y1").focus();
			return false;
		}
		//hobby
		var ho=document.form.hobby.value;
		if(ho == ""){
			alert("Please Enter the Hobby!!!");
			document.getElementById("hobby1").focus();
			return false;
		}
		else if(!isNaN(ho)){
			alert("Enter valid Hobby!!!");
			document.getElementById("hobby1").focus();
			return false;
		}
		
		//skills
		var sk=document.form.skills.value;
		if(sk == ""){
			alert("Please Enter the Additional Skills!!!");
			document.getElementById("sk1").focus();
			return false;
		}
		else if(!isNaN(sk)){
			alert("Enter valid Additional Skills!!!");
			document.getElementById("sk1").focus();
			return false;
		}
		
		//course
		if ( ( form.addcourses[0].checked == false ) && ( form.addcourses[1].checked == false ) && ( form.addcourses[2].checked == false ) && ( form.addcourses[3].checked == false )  && ( form.addcourses[4].checked == false ) && ( form.addcourses[5].checked == false ) && ( form.addcourses[6].checked == false ) && ( form.addcourses[7].checked == false ) && ( form.addcourses[8].checked == false)) {
			alert("Please checked atleast one Additional Courses!!!");
			return false;
		}
		
}
function ValidateEmail(inputText)
			 {
				var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
				if(inputText.value.match(mailformat))
					{
					
					return true;
					}
				else
					{
					return false;
					}
			}
			

			function allnumeric(inputtxt)
               {
                  var numbers = /^[0-9]+$/;
                  if(inputtxt.value.match(numbers))
                  {
                    return true;
                  }
                  else
                  {
                    return false;
                  }
               }
function allLetter(inputtxt)
                {
                     var letters = /^[A-Za-z]+$/;
                     if(inputtxt.value.match(letters))
                     {
              	         return true;
                     }
                     else
                    {
              	        return false;
                    }
                }	