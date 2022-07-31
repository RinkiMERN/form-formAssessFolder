let section=document.querySelector(".form");
let form = document.createElement("form");
form.setAttribute("method","POST");
form.setAttribute("action","");
form.setAttribute("name","myForm");

let div1 = document.createElement("div");

let labName=document.createElement("label");
    labName.setAttribute("for","name");
    labName.textContent="Enter UserName";

let inputName=document.createElement("input");
    inputName.setAttribute("type","text");

div1.appendChild(labName);
div1.appendChild(inputName);

let div2 = document.createElement("div");

let labPass=document.createElement("label");
    labPass.setAttribute("for","password");
    labPass.textContent="Enter Password";

let inputPass=document.createElement("input");
    inputPass.setAttribute("type","password");


div2.appendChild(labPass);
div2.appendChild(inputPass);

let div3 = document.createElement("div");

let labEmail=document.createElement("label");
    labEmail.setAttribute("for","email");
    labEmail.textContent="Enter Email";

let inputEmail=document.createElement("input");
    inputEmail.setAttribute("type","email");


div3.appendChild(labEmail);
div3.appendChild(inputEmail);

let div4 = document.createElement("div");

let labNum=document.createElement("label");
    labNum.setAttribute("for","number");
    labNum.textContent="Enter Number";

let inputNum=document.createElement("input");
    inputNum.setAttribute("type","number");


div4.appendChild(labNum);
div4.appendChild(inputNum);

let btn=document.createElement("button");
btn.setAttribute("type","submit");
btn.setAttribute("value","Submit");
btn.style.width="100px";
btn.style.height="30px";
btn.innerHTML="SUBMIT";
form.style.width="300px";
form.style.height="400px";
form.appendChild(div1);
form.appendChild(div2);
form.appendChild(div3);
form.appendChild(div4);
form.appendChild(btn);
// section.append(form);
document.body.append(form);




btn.onclick=function(e){
e.preventDefault();

let inp=inputName.value;
let inp1=inputPass.value;
let inp2=inputEmail.value;
let inp3=inputNum.value;

document.body.innerHTML=`<h1> ${inp}</h1> <h2>${inp1}</h2> <h3> ${inp2} </h3> <h3> ${inp3}</h3> `;
}