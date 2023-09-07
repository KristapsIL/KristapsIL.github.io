const response = await fetch("vasara.json")
const vasara = await response.json();
console.log(vasara)

const main = document.getElementById("main")
vasara.forEach((vasara) => {

    const article = document.createElement("article");
    main.appendChild(article)

    const div = document.createElement("div")
    div.className = "divs"
    article.appendChild(div)

    const img = document.createElement("img");
    img.alt = vasara["darit"]
    img.src = vasara["img"]
    div.appendChild(img);

    const text = document.createElement("a");
    text.className = "atext"    
    text.textContent = vasara["text"]
    div.appendChild(text)
});