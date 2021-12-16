const data = JSON.parse(sessionStorage.getItem("outlet"));

const doc = document.getElementsByClassName("queue-detail")[0];

doc.getElementsByTagName("h1")[0].innerHTML = data.name;