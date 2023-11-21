const titleItems = [
    "Genetics Simulator: Create a BEAST",
    "Genetics Simulator: Create a MONSTER",
    "Genetics Simulator: Create life",
    "Genetics Simulator: Kill an innocent cell",
    "Genetics Simulator: Torture microscopic organisms",
    "Genetics Simulator: WHAT DID YOU DO",
    "Genetics Simulator: I know what you did"
];
setInterval(()=>{
    document.head.querySelector("title").innerText = titleItems[Math.floor(Math.random()*titleItems.length)];
},8000);

function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}