var flights = "";

function display() {

    console.log("Display is called!!!");

     var content = `<table border>
     <tr>
         <th>Source</th>
         <th>Destination</th>
         <th>Arrival Time</th>
         <th>Departure_Time</th>
         <th>travel_date</th>
         <th>cost</th>
     </tr>`;
     for (let i in flights) {
                 content += `
         <tr><td>${flights[i].source}</td>
          <td>${flights[i].destination}</td>
          <td>${flights[i].arrival_Time}</td>
          <td>${flights[i].departure_Time}</td>
          <td>${flights[i].travel_Date}</td>
          <td>${flights[i].cost}</td>
          <td>
          <button onclick='addCustomer("${flights[i]._id}")'>BOOK</button>
          <td></tr> `
     }
     document.getElementById('flights').innerHTML = content+"</table>";

 }

 
window.onload=getroutes();
 function getroutes() {
    console.log("getRoutes called!!!");
    var req = new XMLHttpRequest();
    req.open("GET", "http://localhost:5000/searchflights", true);
    req.send();
    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            if (req.status === 200) {
                flights = JSON.parse(req.responseText);
                display();
                event.preventDefault();
            }
        }
    }
}
let flight_id=""

function addCustomer(id){
   let form= document.getElementById('book');
   form.style.display='block';
   flight_id=id;
// let display=""
    for(keys in flights){
        if(flights[keys]._id=== id){
            console.log("source:::",flights[keys].source)
            document.getElementById('flightNumber').value=flights[keys].flight_number;
            document.getElementById('source').value=flights[keys].source;
            document.getElementById('destination').value=flights[keys].destination;
            document.getElementById('arrivalTime').value=flights[keys].arrival_Time;
            document.getElementById('departureTime').value=flights[keys].departure_Time;
            document.getElementById('price').value=flights[keys].cost;


            // display+=`Flight Number:  ${flights[keys].flight_number}</p>
            // <p>Source: ${flights[keys].source}</p>
            // <p>Destination:  ${flights[keys].destination}</p>
            // <p> Arrival Time:   ${flights[keys].arrival_Time}</p>
            // <p>Price per Ticket: ${flights[keys].cost}</p>
            // `
        }
    }

 document.getElementById('details').innerHTML=display;
}

function confirm(){
    let name=document.getElementById('txtName').value;
    let age=document.getElementById('txtAge').value;
    let phone=document.getElementById('txtPhone').value;
    let Aadhar=document.getElementById('txtAadhar').value;
    let passport=document.getElementById('txtPassport').value;
    let email= document.getElementById('txtEmail').value;
    let flight_num=document.getElementById('flightNumber').value;
    let source=document.getElementById('source').value
    let destination=document.getElementById('destination').value
    let arrivalT=document.getElementById('arrivalTime').value
    let departureT=document.getElementById('departureTime').value
    let price=document.getElementById('price').value

    var req = new XMLHttpRequest();
	req.open('POST', 'http://localhost:5000/customer', true);
	req.setRequestHeader('Content-type', 'application/json');
	//let users=JSON.stringify(newObj)
	req.send(JSON.stringify({
		customer_name:name,
		customer_age: age,
		phone: phone,
		aadhar_id: Aadhar,
		passport_number: passport,
        email:email,
        flight:{
        flight_number:flight_num,
        source:source,
        destination:destination,
        arrival_Time:arrivalT,
        departure_Time:departureT,
        cost:price
        }
	}));
	req.onreadystatechange = function () {
		if (req.readyState === 4) {
			if (req.status === 201) {
				// getdata();
                alert("Your ticket Booked Successfully");
                showTicket();
                console.log("Added Successfully")
				event.preventDefault();

				//document.getElementById('addUserForm').reset();


			} else {
				console.log("Faliedddd");
			}
		}
	}
}

function showTicket(){
    
}































// //window.onload = searchFlight;
// let fligts="";
// function display(){

//     let content="";

//     var req = new XMLHttpRequest();

// 	req.open('GET', 'http://localhost:5000/searchflights/651ef8539108261ddbdd812b', true);
// 	// req.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
// 	req.send();
// 	req.onreadystatechange = function () {
// 		if (req.readyState == 4) {
// 			if (req.status == 200) {
// 				flights=JSON.parse(req.responseText);
//                 content+=`<span>`
                   

// 				}
// 				document.getElementById('root').innerHTML = disp;
// 				event.preventDefault();

// 			}
// 		}
// 	}
// }



   










// function searchFlight(){

//     console.log("search Flight is called!!")
//     var src= document.getElementById('src').value;
//     var dest= document.getElementById('dest').value;
//     var travelDate= document.getElementById('dt').value;
//     console.log(travelDate);
//     //var url = `http://localhost:5000/searchflights?source=${src}&destination=${dest}`;
//     var url = "http://localhost:5000/searchflights?source=" + src + "&destination=" + dest;
// //    var url = "http://localhost:5000/getflightDetails/"+src+"/"+dest+"/"+travelDate    &travel_Date=${travelDate};
//     var disp ="Hai";
// 	var req = new XMLHttpRequest();
//     req.open('GET',url,true);
//     req.send();
// 	req.onreadystatechange = function () {
// 		if (req.readyState == 4) {
// 			if (req.status == 200) {
				
//                 disp+=this.responseText

//             }
// 				document.getElementById('root').innerHTML = disp;
// 				event.preventDefault();

//         }
//     }
       
       
// }

