//List App
let del = [];
let persons = document.querySelector(".persons");
let spano = document.querySelector(".listapp div button span");
let input = document.querySelector(".listapp div  input");
function handleChange(e) {
  del.push(e.key);
  if (e.key == "Backspace") {
    let x = del.pop();
    let y = del.pop();
  }
  if (
    e.key == "CapsLock" ||
    e.key == "Tab" ||
    e.key == "Shift" ||
    e.key == "Alt" ||
    e.key == "AltGraph" ||
    e.key == "Control"
  ) {
    let x = del.pop();
  }
  spano.textContent = del.join("");
}
function f1() {
  if (input.value.length == 0) {
    console.log("hi");
    spano.innerText = "";
    del = [];
  }
}

function handleAjout(btn) {
  let spanvalue = btn.querySelector("span").innerText;
  let li = document.createElement("li");
  li.innerText = spanvalue;
  persons.appendChild(li);
}
//Exercice 2
let personneVaccinees = [];
let vaccinees = document.querySelector(".vaccinees");
let enregistree = document.querySelector(".enregistrees");
function AjoutPersonne(e) {
  e.preventDefault();
  let input = document.querySelector("form input");
  if (input.value) {
    let li = document.createElement("li");
    let btn = document.createElement("button");
    btn.textContent = "X";
    btn.setAttribute("onclick", "vaccine(this)");
    let spano = document.createElement("span");
    spano.textContent = `esm: ${input.value}`;
    li.append(spano);
    li.appendChild(btn);
    enregistree.appendChild(li);
    input.value = "";
  }
}
const vaccine = (element) => {
  // Methode 1
  let esm = element.parentElement.querySelector("span").textContent;
  let deletebtn = document.createElement("button");
  deletebtn.innerText = "X";
  deletebtn.style.backgroundColor = "red";
  deletebtn.setAttribute("onclick", "Delete(this)");
  let newvaccine = document.createElement("li");
  newvaccine.append(esm);
  newvaccine.appendChild(deletebtn);
  vaccinees.appendChild(newvaccine);
  element.parentElement.remove();
  //Methode 2
  // let newlist = [...enregistree.children].map((element) =>element.querySelector("button"));
  //   let filtredlist=newlist.filter((element) =>{
  //       if(element.clicked== true){
  //           return true
  //       }else {
  //           return false
  //       }
  //   })
  //   console.log(filtredlist);
};
const Delete = (element) => {
  element.parentElement.remove();
};
// Exercice 3
let btn = document.querySelector("#poster");
let users = document.querySelector(".users");
let inputo = document.querySelector("#user");
let file = document.querySelector("#file");
let imagesa = document.querySelector(".images");

function AjoutPost(e) {
  e.preventDefault();
  let li = document.createElement("li");
  let deletebtn = document.createElement("button");
  deletebtn.textContent = "supprimer";
  deletebtn.setAttribute("onclick", "handledelete(this)");
  let spano = document.createElement("span");

  spano.textContent = `TiTre: ${e.target.querySelector("[type='text']").value}`;
  li.appendChild(deletebtn);
  li.append(spano);

  handleFile(file);
  let imguser = document.createElement("img");
  //    imguser.src=imagesa.children[0].src;
  setTimeout(() => {
    imguser.src = imagesa.firstElementChild.src;
    imguser.setAttribute("width", "80px");
    imguser.setAttribute("height", "80px");
    li.append(imguser);
    users.appendChild(li);
  }, 500);

  inputo.value = "";
}
imagesa.style.display = "none";
function handleFile(input) {
  if (input.files && input.files[0]) {
    let reader = new FileReader();
    reader.onload = function (e) {
      let img = document.querySelector(".images");
      let imguser = document.createElement("img");
      imguser.src = e.target.result;
      img.prepend(imguser);
    };
    console.log(input.files);

    reader.readAsDataURL(input.files[0]);
  }
}
function handledelete(btn) {
  btn.parentElement.remove();
}
