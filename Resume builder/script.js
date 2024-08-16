
// Initial setup: hide the resume preview
document.getElementById("cv-template").style.display = "none";

function addNewWEField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    document.getElementById("weFieldsContainer").appendChild(newNode);
}

function removeWEField() {
    let weFieldsContainer = document.getElementById("weFieldsContainer");
    let weFields = weFieldsContainer.getElementsByClassName("weField");

    if (weFields.length > 1) {
        weFieldsContainer.removeChild(weFields[weFields.length - 1]);
    }
}

function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    document.getElementById("aqFieldsContainer").appendChild(newNode);
}

function removeAQField() {
    let aqFieldsContainer = document.getElementById("aqFieldsContainer");
    let aqFields = aqFieldsContainer.getElementsByClassName("eqField");

    if (aqFields.length > 1) {
        aqFieldsContainer.removeChild(aqFields[aqFields.length - 1]);
    }
}

function generateCV(){

    // Check if any mandatory field is empty
    const mandatoryFields = ["nameField", "contactField", "addressField", "fbField", "instaField", "linkedField", "objectiveField"];
    let allFieldsFilled = true;

    for (const field of mandatoryFields) {
        const fieldValue = document.getElementById(field).value.trim();
        if (!fieldValue) {
            allFieldsFilled = false;
            break;
        }
    }

    // Display alert if any mandatory field is empty
    if (!allFieldsFilled) {
        alert("Fill out all the fields to generate your resume.");
        return;
    }


    // console.log("generating CV");
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;
    // direct
    document.getElementById("nameT2").innerHTML = nameField;

    //contact
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

    //address
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;

    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;

    document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;

    //objective

    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    //we
    let wes = document.getElementsByClassName("weField");
    let str = "";
    for (let e of wes){
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML = str;

    //aq

    let aqs = document.getElementsByClassName("eqField");
    let str1 = "";
    for (let e of aqs){
        str1 += `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML = str1;

    document.getElementById("cv-form").style.display = "none";

    document.getElementById("cv-template").style.display = "block";
}

function changeTemplate() {
    // Get the selected template value from the dropdown
    let selectedTemplate = document.getElementById("templateSelect").value;

    // Update the class of the CV template div
    document.getElementById("cv-template").className = selectedTemplate;
}


//print cv
function printCV(){
    window.print();
}