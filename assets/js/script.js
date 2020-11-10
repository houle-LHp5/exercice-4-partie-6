let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];

const houle = document.getElementById("houle");


days.forEach(element => {
let houleButton = document.createElement("button");
houleButton.classList.add("btn","btn-primary","m-1");
if(element == "Samedi"|| element =="Dimanche"){
    houleButton.classList.add("btn-warning");
}
houleButton.textContent = element;
houle.appendChild(houleButton);

});

