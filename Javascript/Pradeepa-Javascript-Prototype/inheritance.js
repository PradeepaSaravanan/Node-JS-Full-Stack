// parent Class
function Curriculum(name, duration) {
    this.name = name;
    this.duration = duration;
}


//  Method to enroll student
Curriculum.prototype.enrollStudent = function (studName) {
   
    this.sname =this.studName;
    course = this.name;
    courseDuration = this.duration;  
    console.log("Student Enrollment");
    console.log("Name:"+studName+" Course:"+course+" CourseDuration:"+courseDuration)

}
// Method to display details
Curriculum.prototype.displayDetails=function(){
    console.log("Display details!!!");
    console.log(  "Student Name:"+this.studentName+"  Course:"+this.name +"  Course Duration:"+this.duration+" Mobile number:"+this.mobileNum);
}
// Cbse class inheriting from Curriculum
function Cbse(name, duration, board) {
    Curriculum.call(this, name, duration);
    this.board = board
}
//set Cbse prototype to instance of Curriculum
Cbse.prototype = Object.create(Curriculum.prototype);
Cbse.prototype.constructor = Cbse;
 // Icse class inheriting from Curriculum  
function Icse(name,duration,studname,mobile){
    Curriculum.call(this, name, duration);
    this.studentName=studname;
    this.mobileNum= mobile;

}
//set Icse prototype to instance of Curriculum
Icse.prototype = Object.create(Curriculum.prototype);
Icse.prototype.constructor = Icse;

let cbse = new Cbse("Node Js", 23, "CBSE");
cbse.enrollStudent("Pradeepa");

let icse= new Icse("Javascript",34,"Kaviya",9876567800);
icse.displayDetails();