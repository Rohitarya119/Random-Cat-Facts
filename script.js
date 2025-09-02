const URL = "https://catfact.ninja/facts";
const factPara = document.querySelector("#facts");
const btn = document.querySelector("#btn");

const getFacts = async() => {
    let response = await fetch(URL);
    let data = await response.json();

    // pick a random fact
    let randomIndex = Math.floor(Math.random() * data.data.length);
    factPara.innerText = data.data[randomIndex].fact;
};

btn.addEventListener("click", getFacts);