let imageDiv = document.getElementById('imageDiv');

function superHeroGenerator(e) {
let ajax = new XMLHttpRequest();
ajax.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        console.log(this.response);
        let superheroObject = JSON.parse(this.response);
        let imageURL = superheroObject.image.url;
        let superName = superheroObject.name;
        imageDiv.innerHTML += `<div><h1>${superName}</h1><img src="${imageURL}" alt="${superName}"></div>`
    }
}

ajax.open("GET", `https://www.superheroapi.com/api.php/3010887702523717/${Math.floor(Math.random() * 730) + 1  }`, true);

ajax.send();
}

document.getElementById('superheroButton').addEventListener("click", superHeroGenerator);