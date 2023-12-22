let status = {
	1: "one",
	2: "two",
	3: "three",
	4: "four",
};

let users_json = [{
	userId: 1,
	name: "Jon Snow",
	profilePicture:
		"https://cg0.cgsociety.org/uploads/images/original/hosseindiba-jon-snow-1-b968195d-au6q.jpeg",
	statusMessage: "We become what we think about!",
	presence: 1,
},
{
	userId: 2,
	name: "Daenerys Targaryen",
	profilePicture:
		"https://preview.redd.it/hlxen8gtwpm01.jpg?width=640&crop=smart&auto=webp&v=enabled&s=a3c43bcbfc1db31d542ef67071559264358b3d2b",
	statusMessage: "A positive mindset brings positivethings.",
	presence: 3,
},
{
	userId: 3,
	name: "Tyrion Lannister",
	profilePicture:
		"https://mir-s3-cdn-cf.behance.net/project_modules/fs/6a3f5237411193.573f25019c8bf.jpg",
	statusMessage: "One small positive thought can change your whole day",
	presence: 3,
},
{
	userId: 4,
	name: "Jaime Lannister",
	profilePicture:
		"https://cg0.cgsociety.org/uploads/images/original/hosseindiba-jon-snow-1-b968195d-au6q.jpeg",

	statusMessage: "I am a rockstar",
	presence: 1,
},
{
	userId: 5,
	name: "Arya Stark",
	profilePicture:
		"https://64.media.tumblr.com/21de4501827aba1c6463ce2ae6a36780/tumblr_ps5le9xxRb1w9a5vgo1_1280.jpg",
	statusMessage: "I am using Gradious messenger",
	presence: 4,
}];

function visibileUserForm() {
	console.log("Visible called!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
	var formVisible = document.getElementById('addUserForm');
    var formUp= document.getElementById('updateUserForm');
	formUp.style.display='none';
	if (formVisible.style.display === 'block') {
		formVisible.style.display = 'none';
	}
	else {
		formVisible.style.display = 'block';
	}
}
window.onload=display;
function display() {
	var availability = "";
	let disp = "";
	for (let keys in users_json) {
		if (users_json[keys].presence == 1) availability = 'one'
		else if (users_json[keys].presence == 2) availability = 'two'
		else if (users_json[keys].presence == 3) availability = 'three'
		else if (users_json[keys].presence == 4) availability = 'four'
		disp += `<div class="user">
			<div class="img-container">
				<img src=${users_json[keys].profilePicture} class='user-image ${availability}' alt="user image" />
			</div>
			<div class="user-detail">
			<p class="user-name">${users_json[keys].name}</p>
			<p class="user-message"> ${users_json[keys].statusMessage}</p>
			</div>
			<div class='three-btn'>
				<div class="dropdown">
					<a class="" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-three-dots-vertical"></i></a>
					<ul class="dropdown-menu">
						<li><button id='USR0001' onclick='deleteItem(${users_json[keys].userId})'class="dropdown-item ">Delete</button></li>
						<li><button  id='update-USR0001' onclick='updateItem(${users_json[keys].userId})'class="dropdown-item ">Update</button></li>
					</ul>
				</div>
			</div>
		</div>`


	}
	document.getElementById('root').innerHTML = disp;

}






function addUser() {

	let newUserObj = new Object();
	const userName = document.getElementById('name').value;
	var stsMsg = document.getElementById('statusMessage').value;
	console.log(stsMsg);
	var profileLink = document.getElementById('profilePicLink').value;
	console.log(profileLink);
	var availability = document.getElementById('presence').value;
	console.log(availability);
	newUserObj.userId = users_json.length+1;
	newUserObj.name = userName;
	newUserObj.statusMessage = stsMsg;
	newUserObj.profilePicture = profileLink;
	newUserObj.presence = availability;

	console.log(newUserObj);

	users_json.unshift(newUserObj);
	display();
clearAdd();
	event.preventDefault();



}

function deleteItem(userid) {

	for (let keys in users_json) {
		if (users_json[keys].userId == userid) {
			users_json.splice(keys, 1)
		}
	}
	display();

}
var ids = "";
function updateItem(userid) {
	console.log("update user item called");
	 let formAdd= document.getElementById('addUserForm');
	 let formUpdate=document.getElementById('updateUserForm');
	 formAdd.style.display='none';
	 formUpdate.style.display='block';
	 
      
	let showForm = ` <div class='form'>
		<div class="input">
			<input type="text" name="" id="name1" placeholder="Name">
		</div>
		<div class="input">
			<input type="text" name="" id="statusMessage1" placeholder="Status Message">
		</div>
		<div class="input">
			<input type="text" name="" id="profilePicLink1" placeholder="Profile Picture Link">
		</div>
		<div class="input">
			<select name="" id="presence1">
				<option value="1">Availble</option>
				<option value="2">Busy</option>
				<option value="3">idle</option>
				<option value="4">Not loggedin</option>
			</select>
		</div>
		<div>
			<button class="btn" onclick="updateUser(${userid})">Update Details</button>
		</div>
	</div>`;

	document.getElementById('updateUserForm').innerHTML = showForm;

	document.getElementById('name1').value = users_json[userid - 1].name;
	document.getElementById('statusMessage1').value = users_json[userid - 1].statusMessage;
	document.getElementById('profilePicLink1').value = users_json[userid - 1].profilePicture;
	document.getElementById('presence1').value = users_json[userid - 1].presence;

   event.preventDefault();

}
//  console.log("id of update1:", ids);
function updateUser( userIndex) {
      console.log("User update called");
	  console.log("updated index:",userIndex);
	 let xen=users_json.findIndex(x=>x.userId==userIndex)
	 console.log("index of id:", xen)
	let names = document.getElementById('name1').value;
	let msgs = document.getElementById('statusMessage1').value;
	let profiles = document.getElementById('profilePicLink1').value;
	let presents = document.getElementById('presence1').value;
	console.log("values after submitting update form", names, msgs, profiles, presents);

	 users_json[xen].name=names;
     users_json[xen].statusMessage=msgs;
	 users_json[xen].profilePicture=profiles;
	 users_json[xen].presence=presents;
	display();
	clear();


	event.preventDefault();

}

function clear(){
	document.getElementById('name1').value="";
	document.getElementById('statusMessage1').value="";
	document.getElementById('profilePicLink1').value="";
	document.getElementById("presence1").value="";
}
function clearAdd(){
	document.getElementById('name').value="";
	document.getElementById('statusMessage').value="";
	document.getElementById('profilePicLink').value="";
	document.getElementById("presence").value="";
}