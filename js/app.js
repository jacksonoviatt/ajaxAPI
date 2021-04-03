

// get element 'image div
let imageDiv = document.getElementById('imageDiv');

// Here I give our function a name and set the argument to take in event details
function superHeroGenerator(e) {
// Here I set the variable ajax to represent the XMLHttpRequest
let ajax = new XMLHttpRequest();

// Here is the function that brings in the JSON string from the API
// if everything is in order.
// I then used JSON.parse to change the API's string to a JS object
// I was then able to use key value pairs to access this object and
// then display them on the page using innerHTML
ajax.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        console.log(this.response);
        let superheroObject = JSON.parse(this.response);
        let imageURL = superheroObject.image.url;
        let superName = superheroObject.name;
        imageDiv.innerHTML += `<div><h1>${superName}</h1><img src="${imageURL}" alt="${superName}"></div>`
    }
}

// Here we use ajax to access our API
// I used math random to randomly choose a superhero ID number in the URL
ajax.open("GET", `https://www.superheroapi.com/api.php/3010887702523717/${Math.floor(Math.random() * 730) + 1  }`, true);

ajax.send();
}

// I then used addEvent listener to mak this all happen on the click of a button
document.getElementById('superheroButton').addEventListener("click", superHeroGenerator);