 
    var students={
        "abhi@gmail.com":{
            "firstName":"Abhishek",
            "lastName":"Verma",
            "mobile":"9067543456",
            "age":25,
            "city":"Delhi"
        },
        "babu@gmail.com":{
            "firstName":"Babu",
            "lastName":"Annan",
            "mobile":"6285543456",
            "age":20,
            "city":"Hyderabad"
        },
        "deepa@gmail.com":{
            "firstName":"Deepa",
            "lastName":"Kumari",
            "mobile":"9876543216",
            "age":6,
            "city":"Chennai"
        },
        "deepakumar@gmail.com":{
            "firstName":"Deepa",
            "lastName":"Jothi",
            "mobile":"6455543216",
            "age":29,
            "city":"Chennai"
        },
        "deepalakshmi@gmail.com":{
            "firstName":"Deepa",
            "lastName":"Laskshmi",
            "mobile":"9566432116",
            "age":16,
            "city":"Chennai"
        },
        "Rajesh@gmail.com":{
            "firstName":"Rajesh",
            "lastName":"Loganathan",
            "mobile":"95344532116",
            "age":23,
            "city":"Chennai"
        },
        "Maha@gmail.com":{
            "firstName":"Maha",
            "lastName":"Rajesh",
            "mobile":"6387651342",
            "age":22,
            "city":"Chennai"
        },
        "Lossikha@gmail.com":{
            "firstName":"Losshika",
            "lastName":"Sridhar",
            "mobile":"609051342",
            "age":32,
            "city":"Chennai"
        },
        "matthi@gmail.com":{
            "firstName":"Mathivathani",
            "lastName":"Bharath",
            "mobile":"8765513426",
            "age":56,
            "city":"Thiruvannamalai"
        },
        "Ezhil@gmail.com":{
            "firstName":"Ezhil",
            "lastName":"Rani",
            "mobile":"909051342",
            "age":100,
            "city":"California"
        },
        "Saviitha@gmail.com":{
            "firstName":"Savithasini",
            "lastName":"R",
            "mobile":"909051342",
            "age":7,
            "city":"Bangalore"
        },
        "Priya@gmail.com":{
            "firstName":"Priya",
            "lastName":"Vishal",
            "mobile":"800051342",
            "age":23,
            "city":"Bangalore"
        },
        "kannan@gmail.com":{
            "firstName":"Gokul",
            "lastName":"Kannan",
            "mobile":"700051342",
            "age":34,
            "city":"Dharmapuri"
        },
        "balaji@gmail.com":{
            "firstName":"Balaji",
            "lastName":"Kalimuthu",
            "mobile":"700051342",
            "age":34,
            "city":"Madurai"
        },
        "ragul@gmail.com":{
            "firstName":"Ragul",
            "lastName":"AK",
            "mobile":"5000051342",
            "age":34,
            "city":"Hyderabad"
        },
        "Bhavya@gmail.com":{
            "firstName":"Bhavya",
            "lastName":"Shree",
            "mobile":"700051342",
            "age":12,
            "city":"Tirupathi"
        },
        "Hindu@gmail.com":{
            "firstName":"Hingu",
            "lastName":"Saggurthi",
            "mobile":"700051342",
            "age":34,
            "city":"Dharmapuri"
        },
        "akanksha@gmail.com":{
            "firstName":"Akanksha",
            "lastName":"Singh",
            "mobile":"700051342",
            "age":34,
            "city":"Bangalore"
        },
        "vishwa@gmail.com":{
            "firstName":"Vishwa",
            "lastName":"Dharshan",
            "mobile":"700051342",
            "age":34,
            "city":"Kancheepuram"
        },
        "Tamil@gmail.com":{
            "firstName":"tamil",
            "lastName":"Selvi",
            "mobile":"700051342",
            "age":23,
            "city":"Chennai"
        },
        "Dhivya@gmail.com":{
            "firstName":"Dhivya",
            "lastName":"Bharathi",
            "mobile":"700051342",
            "age":3,
            "city":"Noida"
        },
        "Udhai@gmail.com":{
            "firstName":"Udhaishree",
            "lastName":"S",
            "mobile":"700051342",
            "age":34,
            "city":"UP"
        },
        "Harini@gmail.com":{
            "firstName":"Harini",
            "lastName":"Devi",
            "mobile":"700051342",
            "age":34,
            "city":"Pune"
        },
    
    }

    function loadData(){
        if(localStorage.getItem('users')==null){
            localStorage.setItem("users", JSON.stringify(students));
        }
       // console.log("Page Fully loaded");
        let newStud= localStorage.getItem('users');
       // console.log(newStud);
       let studList= JSON.parse(newStud)
        // console.log(studList["abhi@gmail.com"].firstName);

         let table="<div class='table'> <div class='header'><span class='data1'>Fullname</span> <span class='data1'>Age</span> <span class='data1'>Mobile</span> <span class='data1'>Email</span> <span class='data1'>City</span></div> <div class='row-group'>";

         for(let keys in studList){
            // console.log(studList[keys].firstName);
            table+=`<div class='row'><span class='data'> ${studList[keys].firstName} ${studList[keys].lastName} </span> `;
            table+=`<span class='data'>${studList[keys].age}</span> <span class='data'>${studList[keys].mobile}</span>`;
            table+=`<span class='data'>${keys}</span> <span class='data'>${studList[keys].city}</span> </div>`
            
         }

         table+="</div></div>"
         document.getElementById('display-table').innerHTML=table;  
    }