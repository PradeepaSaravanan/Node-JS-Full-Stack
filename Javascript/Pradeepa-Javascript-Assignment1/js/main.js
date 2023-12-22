function validate() {
    let nameRegex = /^[a-zA-Z]{1,}$/;
    let emailRegex = /^[a-zA-Z0-9.-_]+@[a-zA-Z]+.[a-zA-z]{2,}$/;
    let mobRegex = /[9876]{1}[0-9]{9}$/;
    let posRegex = /^[a-z-]i/;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById('mail').value;
    let position = document.getElementById("position").value;
    let mobile = document.getElementById("mobile").value;
    // Validations
     let st1=false;
     let st2=false;
     let st3=false;
     let st4=false;
     let st5=false;
    if (!nameRegex.test(firstName)){
        alert("Enter a valid name");
    }
    else{
        st1=true;
    }
       


    if (!nameRegex.test(lastName)) {
        alert("Enter valid last name");
    }
    else{
        st2=true;
    }

    if (!emailRegex.test(email)) {
        alert("Enter valid email")
    }
    else{
        st3=true;
    }

    if (!mobRegex.test(mobile)) {
        alert("Enter valid mobile number");
    }
    else{
        st4=true;
    }

    if (!nameRegex.test(position)) {
        alert("- is not allowed")
    }
    else{
        st5=true;
    }

    // Storing into local storage
    if (nameRegex.test(firstName) && nameRegex.test(position) && mobRegex.test(mobile) &&
        emailRegex.test(email) && nameRegex.test(lastName)) {
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastname", lastName);
        localStorage.setItem("Email id", email);
        localStorage.setItem("mobile Number", mobile);
        localStorage.setItem("Applied position", position);
    }


    let personGender = document.querySelector('input[name="Gender"]:checked').value;
    localStorage.setItem("Gender",personGender);
    let city=document.getElementById("select").value;
    console.log(city);
    localStorage.setItem("City",city);
   let earlydate=document.getElementById("earlyDate").value;
   localStorage.setItem("Earliest Availabe date", earlydate);
   let preferDate=document.getElementById("preferDt").value;
   localStorage.setItem("Preferred date",preferDate);
    
   var tym = document.querySelector('input[name=time]:checked').value;
   localStorage.setItem("Interview Time",tym);

    console.log(tym);
  
   if (st1==true && st2==true && st3==true && st4==true && st5==true) {
       return  alert("your Application Submiited Successfully");
   }
   else{
    return alert("Invalid details. Please fill the form correctly and Sumbit again");
   }


     
}
 window.onload=function(){
    var name=localStorage.getItem('firstName');
    console.log(name);
    document.getElementById("firstName").value=name;
    var lname=localStorage.getItem('lastname');
    document.getElementById('lastName').value=lname;
    let email=localStorage.getItem('Email id');
    document.getElementById('mail').value=email;
    let contactNum= localStorage.getItem('mobile Number');
    document.getElementById('mobile').value=contactNum;
    let city=localStorage.getItem('City');
    document.getElementById('select').value=city;
    let appliedPosition=localStorage.getItem('Applied position');
    document.getElementById('position').value=appliedPosition;
    let earlyDate=localStorage.getItem('Earliest Availabe date');
    document.getElementById('earlyDate').value=earlyDate;
    let preferDate=localStorage.getItem('Preferred date');
    document.getElementById('preferDt').value=preferDate;

    let gender=localStorage.getItem('Gender');
    console.log(gender);
     const selected=document.querySelector(`input[type="radio"][value="${gender}"]`);
     if(selected){
        selected.checked=true;
     }
    

     let time=localStorage.getItem('Interview Time');
     const timePrefer=document.querySelector(`input[type="radio"][value="${time}"]`);
     if(timePrefer){
        timePrefer.checked=true;
     } 
 }
 
     
 



