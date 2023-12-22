window.onload = display;
var formData = "";
function display() {
    var userPlus = document.getElementById("addUser");
    var addModal = document.getElementById("modalAddUser");

    userPlus.addEventListener("click", () => {
        addModal.classList.add("show");
        addModal.style.display = "block";
    })

    window.addEventListener("click", (event) => {
        if (event.target == addModal) {
            addModal.style.display = "none";
        }
    });


    var req = new XMLHttpRequest();
    req.open('GET', 'https://65018911736d26322f5bda6a.mockapi.io/users', true);
    req.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    req.send();
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                console.log(req.responseText);
                let users = JSON.parse(req.responseText);
                formData = users;
                let disp = `<tr id="tableHeadings">
                <th class="name" id="name1">Name</th>
                <th class="age">Age</th>
                <th class="state">State</th>
                <th class="functions">Functions</th>
            </tr>`
                for (let i in users) {
                    disp += `<tr id="user${users[i].id}" id="user1">
                   <td  contenteditable="false" id="name${users[i].id}">${users[i].Name}</td>
                    <td contenteditable="false" id="age${users[i].id}">${users[i].Age}</td>
                    <td contenteditable="false" id="state${users[i].id}">${users[i].State}</td>
                    <td  class="functions">
                        <button class="edit" onclick="editUser('${users[i].id}')" type="button" id="btn1"><i class="fa-solid fa-pen-clip"></i></button>
                        <button class="deleteB" onclick="deleteUser('${users[i].id}','${users[i].Name}');"type="button" id="btn2"><i class="fa-solid fa-trash-can"></i></button>
                        <button  class=" btn btn-success updateUs"  id="upuser${users[i].id}" onclick="updateUser(${users[i].id})" type="button" id="1"><i class="fa fa-upload" aria-hidden="true"></i></button>
                    </td>
                </tr>`
                }
                // console.log(disp);
                document.getElementById('table').innerHTML = disp;



            }
            else {
                console.log("Failed");
            }
        }
    }

};



function editUser(userId){
      console.log("usersssss", userId);
    console.log("edit called!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    document.getElementById('age'+userId).setAttribute("contenteditable","true");
    document.getElementById('name'+userId).setAttribute("contenteditable","true");
    document.getElementById('state'+userId).setAttribute("contenteditable","true");
    document.getElementById('upuser'+userId).style.display='block';
    let update= document.getElementById('btn1');
    let del=document.getElementById('btn2');
    update.style.width='33%';
    del.style.width='33%';



}


function updateUser(userId){
    // let disp=document.getElementById('')
  let upObj= {
    "Name": document.getElementById('name'+userId).innerHTML,
    "Age": document.getElementById('age'+userId).innerHTML,
    "State": document.getElementById('state'+userId).innerHTML,

  }
  console.log("upObj", upObj);
  var req = new XMLHttpRequest();
  var url = 'https://65018911736d26322f5bda6a.mockapi.io/users/'+userId;
  req.open('PUT', url, true);
  req.setRequestHeader('content-type', 'application/json');
  let data=JSON.stringify(upObj)
  req.send(data);
  req.onreadystatechange = function () {
      if (req.readyState == 4) {
          if (req.status == 200) {

              console.log(req.responseText);
              display();
          }
          else {
              console.log("Failed!!!!!!!!!!!!!!!")
          }
      }
  }
}
function deleteUser(userid, Name) {
    var modal = document.getElementById("deleteModal");
    modal.classList.add("show");
    modal.style.display = "block";

    var cancelDelete = document.querySelectorAll(".deleteCancel");
    cancelDelete.forEach((btn) => {
        btn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    });

    var confirmDelete = document.querySelector(".confirmDelete");
    confirmDelete.addEventListener("click", () => {
        modal.style.display = "none";

        var req = new XMLHttpRequest();
        var url = 'https://65018911736d26322f5bda6a.mockapi.io/users/' + userid;
        req.open('DELETE', url, true);
        req.setRequestHeader('content-type', 'application/json');
        req.send();
        req.onreadystatechange = function () {
            if (req.readyState == 4) {
                if (req.status == 200) {
                    display();
                }
                else {
                    console.log("Faliedddddddddddddd");
                }
            }
        }
    });

    document.getElementById('userDeleted').innerHTML = Name;
}


function addUser() {
    // console.log("Add called");
    let Nam = document.getElementById('inputName').value;
    let age = document.getElementById('inputAge').value;
    let st = document.getElementById('inputState').value;

    let users = {
        'Name': Nam,
        'Age': age,
        'State': st
    }
    var req = new XMLHttpRequest();
    var url = 'https://65018911736d26322f5bda6a.mockapi.io/users'
    req.open('POST', url, true);
    req.setRequestHeader('content-type', 'application/json');
    req.send(JSON.stringify(users));
    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            if (req.status == 201) {
                display();
                document.getElementById('addUserForm').reset();
            }
            else {
                console.log("Failed!!!!!!!!!!!!!!!")
            }
        }
    }
//    display();
    let blockAdd = document.getElementById('modalAddUser');
    blockAdd.style.display = "none";
}

