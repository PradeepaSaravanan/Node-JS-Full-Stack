


function loadData() {
  // let xtr1=document.getElementById('div2');
  // xtr1.style.backgroundColor='red';
  // xtr1.style.border='2px solid blue';
  // xtr1.style.borderRadius='5px';

  let mystyle = `background-color :yellow;
  border:2px solid green;
  border-radius: 15px;
  padding-left:50px;
  font-size: 25px;
  `;

  let x = document.getElementById('div2');
  x.style.cssText = mystyle;

 // ADD  EVENT LISTENER
  let button = document.querySelector('button');
  button.addEventListener('click', () => {
    const ele = document.querySelector('#id');
    ele.style.setProperty('background-color','blue','important');
    ele.style.backgroundColor = 'red';
    ele.style.color = 'green';
    ele.style.padding = '30px';
  })

 // GET ELEMENT BY CLASS NAME
  const cls1 =`background-color: red;
  
  padding: 30px;
  font-size: 30px;
  border-radius:20px;
  margin:30px;
  `;
  const cls2=`background-color: green;
  
  padding: 30px;
  font-size: 30px;
  border-radius:20px;
  margin:30px;
  `;
  const str = document.getElementsByClassName('demo2');
 str[0].style.cssText=cls1;
 str[1].style.cssText=cls2;
 str[2].style.cssText=cls1;
 str[3].style.cssText=cls2;

//  for( let i=0;i<str.length;i++){
//   str[i].style.cssText=cls2;
//  }
  
//   str[0].style.backgroundColor = 'green';
//   str[1].style.color= 'red';


//// DOCUMENT BY TAG NAME
const tagN= document.getElementsByTagName('h3');
tagN[0].style.backgroundColor='orange';
// ADD REMOVE  TOGGLE CLASS
str[2].classList.add('new-class');
 str[2].classList.remove('new-class');

  
 const element=document.getElementsByTagName('p');
 //element[1].style.setProperty("background-color", "green","important");
 element[1].style.backgroundColor="red";

 




}

function toggleFunc(){
  let tog= document.getElementById("toggle");
  tog.classList.toggle("mystyle");
}








  