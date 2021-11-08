function first(){
  fetch("https://gitlab.com/api/v4/projects/31142703")
  .then(response => response.json())
  .then(data => document.getElementById("w").innerHTML=JSON.stringify(data) )
}
function second(){
  fetch("https://gitlab.com/api/v4/projects/31142659")
  .then(response => response.json())
  .then(data => document.getElementById("x").innerHTML=JSON.stringify(data) )
}
function third(){
  fetch("https://gitlab.com/api/v4/projects/31142659")
  .then(response => response.json())
  .then(data => document.getElementById("y").innerHTML=JSON.stringify(data) )
}
function fourth(){
  fetch("https://gitlab.com/api/v4/projects/31142629")
  .then(response => response.json())
  .then(data => document.getElementById("z").innerHTML=JSON.stringify(data) )
}
function fifth(){
  fetch("https://gitlab.com/api/v4/projects/31142640")
  .then(response => response.json())
  .then(data => document.getElementById("a").innerHTML=JSON.stringify(data) )
}