function person(name,school,level){
    this.name = name;
    this.school = school;
    this.level = level;
    this.ChangeLevel = function(level){
        this.level = level
    }
}
var student1 = new person("Kezia","Codetrain","Gent12")
console.log(student1.name)
console.log(student1.school)
console.log(student1.level)
student1.ChangeLevel("Gent11")
console.log(student1.level)

//Date 
function printTime() {
    var d = new Date();
    var hours = d.getFullYear();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    document.body.innerHTML = hours+":"+mins+":"+secs;
  }
  console.log(printTime.hours)
  console.log(printTime.mins)
  console.log(printTime.secs)