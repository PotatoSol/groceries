let groceryList = [];

window.onload = function(){
  document.querySelector("form").onsubmit = function(event){
    event.preventDefault();
    myFunc(event);
  }
}

function myFunc(event){
  if(event.submitter.value == "next_button"){
    groceryList.push(document.getElementById("input)").value.toUppercase())
    document.getElementById("input").value =""
    //next button pressed
  }else if(event.submitter.value == "submit_button"){
    if(document.getElementById("input").value !=""){
      groceryList.push(document.getElementById("input").value.toUppercase())
    }
    groceryList.sort()
    document.getElementById("result").innerText = groceryList
    //submit button pressed
  }
}
