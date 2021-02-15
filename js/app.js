document.getElementById("btn1").addEventListener("click", getText);

document.getElementById("btn2").addEventListener("click", getJson);

document.getElementById("btn3").addEventListener("click", getExternal);

// Get local text
function getText() {
  fetch("./api/data.txt")
    .then(res => res.text())
    .then(data => document.querySelector(".output").innerHTML = data)
    .catch(err => document.querySelector(".output").innerHTML = err);
}

// Get local json
function getJson() {
  fetch("./api/posts.json")
    .then(res => res.json())
    .then(data => {
      let output = "";
      data.forEach((post) => {
        output += `<li>${post.title}</li>
        <li>${post.body}</li>`;
      });
      document.querySelector(".output").innerHTML = output;
    })
    .catch(err => document.querySelector(".output").innerHTML = err);
}

// Get external api data
function getExternal() {
  fetch("https://api.github.com/users/pradyu-hebbar")
    .then(res => res.json())
    .then(data => {
      let output = "";
      output = `<h2>${data.login.toUpperCase()}</h2>
      <p>${data.bio}</p>
      <div id="a-cont-lightbox">
      <a href="${data.avatar_url}" data-lightbox="a-cont-lightbox"><img src="${
        data.avatar_url
      }" alt="Image"></a>
      </div>
      
      <a href="${
        data.html_url
      }" target="_blank" class="gitlink">My Github Repos</a>`;
      document.querySelector(".output").innerHTML = output;
    })
    .catch(err => document.querySelector(".output").innerHTML = err);
}
