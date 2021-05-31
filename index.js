
// $("button").on("click",function(event) {
//   var weight = $("inputs").val();
//   var height = $("inputs").val();
//
//   var BMI = weight/(height**2);
//
//   $("h2").toggleClass("new")
//
//
// })

const form = document.forms[0];

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const { weight, height} = this.elements;
  // or
  // const { name, description, task } = event.target.elements;
  console.log(weight.value,height.value);
  var weight1 = weight.value;
  var height1 = height.value;

  var BMI = Math.round(weight1/(height1**2))

   $("h2").text("Your BMI is " + BMI)
   $("h2").toggleClass("new")


   if (BMI < 18.5) {
     $("h3").text("You are underweight")
     $("h3").toggleClass("new")
   }

   if (BMI >18.5   &&  BMI<24.9) {

     $("h3").text("You are healthy weight")
     $("h3").toggleClass("new")

             }
   if (BMI > 24.9) {
     $("h3").text("You are overweight")
     $("h3").toggleClass("new")
         }
      // code block

});

// function runit(weight2, height2){
//
//   var weight = weight2;
//   var height = height2;
//   console.log(height);
//   var BMI = weight/(height**2);
//
//   $("h2").innerHTML("Your BMI is " + BMI)
//
// }
