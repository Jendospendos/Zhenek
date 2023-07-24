import "./style.css";

const doActionEazy = document.querySelector("#doActionEazy");
const doActionHard = document.querySelector("#doActionHard");

const TA_EazyResponse = document.querySelector("#TA_EazyResponse");
const TA_HardResponse = document.querySelector("#TA_HardResponse");

const TA_sendRequset = document.querySelector("#TA_sendRequset");

const RouteEazy = document.querySelector("#RouteEazy");
const RouteHard = document.querySelector("#RouteHard");

const doActionE = async () => {
  var route = RouteEazy.value;
  var selectedOption = EazySelect.EazyMethod.options[EazySelect.EazyMethod.selectedIndex].value; 
  if (selectedOption == "getAll" & route.slice(-5) == "users"){
    const response = await fetch(route);
    const allUsers = await response.json();
    TA_EazyResponse.value = JSON.stringify(allUsers, null, 2);
  }
  if (selectedOption == "getById" & route.slice(-1) in ["1", "2", "3", "4", "5" ,"6", "7", "8", "9"]){
    const response = await fetch(route);
    const User = await response.json();
    TA_EazyResponse.value = JSON.stringify(User, null, 2);

  }
  if (selectedOption == "deleteById" & route.slice(-1) in ["1", "2", "3", "4", "5" ,"6", "7", "8", "9"]){
    const response = await fetch(route, {method: "DELETE",});
    const User = await response.json();
    TA_EazyResponse.value = JSON.stringify(User, null, 2);
  }
};

const doActionH = async () => {
  var route = RouteHard.value;
  var selectedOption = HardSelect.HardMethod.options[HardSelect.HardMethod.selectedIndex].value; 
  const data = JSON.parse(TA_sendRequset.value);

  if (selectedOption == "post" & route.slice(-5) == "users"){
    const response = await fetch(route, {body: JSON.stringify(data), headers: {"Content-Type": "application/json",}, method: "POST",});
    const newUser = await response.json();
    TA_HardResponse.value = JSON.stringify(newUser, null, 2);
  }
  if (selectedOption == "put" & route.slice(-1) in ["1", "2", "3", "4", "5" ,"6", "7", "8", "9"]){
    const response = await fetch(route, {body: JSON.stringify(data),headers: {"Content-Type": "application/json",},method: "PUT",});
    const updatedUser = await response.json();
    TA_HardResponse.value = JSON.stringify(updatedUser, null, 2);

  }
};

doActionEazy.addEventListener("click", doActionE);
doActionHard.addEventListener("click", doActionH);