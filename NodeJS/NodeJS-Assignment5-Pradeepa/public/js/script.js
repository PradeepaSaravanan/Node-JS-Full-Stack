let status = {
	1: "one",
	2: "two",
	3: "three",
	4: "four",
};
var users_json = "";
function visibileUserForm() {
	console.log("Visible called!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
	var formVisible = document.getElementById('addUserForm');
	var formUp = document.getElementById('updateUserForm');
	formUp.style.display = 'none';
	if (formVisible.style.display === 'block') {
		formVisible.style.display = 'none';
	}
	else {
		formVisible.style.display = 'block';
	}
}

window.onload = getdata;
function getdata() {
	console.log("Displayy called1111")
	var req = new XMLHttpRequest();
	req.open('GET', 'http://localhost:8080/buddylist', true);
	// req.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
	req.send();
	req.onreadystatechange = function () {
		if (req.readyState == 4) {
			if (req.status == 200) {
				users_json = JSON.parse(req.responseText);
			
				console.log("Users Json", users_json);
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
				event.preventDefault();

			}
		}
	}



	// var availability = "";
	// let disp = "";
	// for (let keys in users_json) {
	// 	if (users_json[keys].presence == 1) availability = 'one'
	// 	else if (users_json[keys].presence == 2) availability = 'two'
	// 	else if (users_json[keys].presence == 3) availability = 'three'
	// 	else if (users_json[keys].presence == 4) availability = 'four'
	// 	disp += `<div class="user">
	// 		<div class="img-container">
	// 			<img src=${users_json[keys].profilePicture} class='user-image ${availability}' alt="user image" />
	// 		</div>
	// 		<div class="user-detail">
	// 		<p class="user-name">${users_json[keys].name}</p>
	// 		<p class="user-message"> ${users_json[keys].statusMessage}</p>
	// 		</div>
	// 		<div class='three-btn'>
	// 			<div class="dropdown">
	// 				<a class="" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-three-dots-vertical"></i></a>
	// 				<ul class="dropdown-menu">
	// 					<li><button id='USR0001' onclick='deleteItem(${users_json[keys].userId})'class="dropdown-item ">Delete</button></li>
	// 					<li><button  id='update-USR0001' onclick='updateItem(${users_json[keys].userId})'class="dropdown-item ">Update</button></li>
	// 				</ul>
	// 			</div>
	// 		</div>
	// 	</div>`


	// }
	//document.getElementById('root').innerHTML = disp;

}






function addUser() {
	console.log("Add user Called......")

	var userName = document.getElementById('name').value;
	var stsMsg = document.getElementById('statusMessage').value;
	var profileLink = document.getElementById('profilePicLink').value;
	var availability = document.getElementById('presence').value;

	var req = new XMLHttpRequest();
	req.open('POST', 'http://localhost:8080/buddylist', true);
	req.setRequestHeader('Content-type', 'application/json');
	//let users=JSON.stringify(newObj)
	req.send(JSON.stringify({
		userId: users_json.length + 1,
		name: userName,
		statusMessage: stsMsg,
		profilePicture: profileLink,
		presence: availability
	}));
	req.onreadystatechange = function () {
		if (req.readyState === 4) {
			if (req.status === 201) {
				getdata();
				event.preventDefault();

				document.getElementById('addUserForm').reset();


			} else {
				console.log("Faliedddd");
			}
		}
	}

	event.preventDefault();
}









function deleteItem(userid) {

	var req = new XMLHttpRequest();
	var url = 'http://localhost:8080/buddylist/'+userid;
	console.log("URL:::", url);
	req.open('DELETE', url, true);
	req.setRequestHeader('content-type', 'application/json');
	req.send();
	req.onreadystatechange = function () {
		if (req.readyState == 4) {
			if (req.status == 200) {
				getdata();
			}
			else {
				console.log("Faliedddddddddddddd");
			}
		}
	}
}


var ids = "";
function updateItem(userid) {
	console.log("update user item called");
	let formAdd = document.getElementById('addUserForm');
	let formUpdate = document.getElementById('updateUserForm');
	formAdd.style.display = 'none';
	formUpdate.style.display = 'block';


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
	var index = users_json.findIndex(obj => obj.userId == userid);

	document.getElementById('name1').value = users_json[index].name;
	document.getElementById('statusMessage1').value = users_json[index].statusMessage;
	document.getElementById('profilePicLink1').value = users_json[index].profilePicture;
	document.getElementById('presence1').value = users_json[index].presence;

	event.preventDefault();

}
//  console.log("id of update1:", ids);
function updateUser(userIndex) {
	 console.log("Update user calleddd!!!!")
	let names = document.getElementById('name1').value;
	let msgs = document.getElementById('statusMessage1').value;
	let profiles = document.getElementById('profilePicLink1').value;
	let presents = document.getElementById('presence1').value;

	var req = new XMLHttpRequest();
	var url = 'http://localhost:8080/buddylist/'+userIndex;
	console.log("put url:", url);
	req.open('PUT', url, true);
	req.setRequestHeader('content-type', 'application/json');
	// let data=JSON.stringify(upObj)
	req.send(JSON.stringify({		
		name:names,
		statusMessage: msgs,
		profilePicture: profiles,
		presence: presents
	}));
	req.onreadystatechange = function () {
		console.log("ready state called")
		if (req.readyState == 4) {
			console.log("ready state called2222")
			if (req.status == 200) {
  
				console.log(req.responseText);
			   getdata();
			}
			else {
				console.log("Failed!!!!!!!!!!!!!!!")
			}
		}
	}



	// console.log("User update called");
	// console.log("updated index:", userIndex);
	// let xen = users_json.findIndex(x => x.userId == userIndex)
	// console.log("index of id:", xen)

	// console.log("values after submitting update form", names, msgs, profiles, presents);

	// users_json[xen].name = names;
	// users_json[xen].statusMessage = msgs;
	// users_json[xen].profilePicture = profiles;
	// users_json[xen].presence = presents;
	// display();
	// clear();


	event.preventDefault();

}

function clear() {
	document.getElementById('name1').value = "";
	document.getElementById('statusMessage1').value = "";
	document.getElementById('profilePicLink1').value = "";
	document.getElementById("presence1").value = "";
}
function clearAdd() {
	document.getElementById('name').value = "";
	document.getElementById('statusMessage').value = "";
	document.getElementById('profilePicLink').value = "";
	document.getElementById("presence").value = "";
}