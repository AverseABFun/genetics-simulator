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
},8000)