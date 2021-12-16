const data = JSON.parse(sessionStorage.getItem("outlet"));

const outlet_name = document.getElementsByClassName("outlet-name")[0];
const outlet_location = document.getElementsByClassName("outlet-location")[0];
const outlet_address = document.getElementsByClassName("outlet-location")[1];
const outlet_pic = document.getElementsByClassName("outlet-pic")[0];
const outlet_description = document.getElementsByClassName("outlet-description")[0];

outlet_name.innerHTML = data.name
outlet_location.getElementsByTagName("h3")[0].innerHTML = data.address;
outlet_pic.innerHTML = `<img src="${data.pic}" alt="${data.name}">`;
outlet_description.getElementsByTagName("p")[0].innerHTML = data.description;
outlet_address.getElementsByTagName("p")[0].innerHTML = data.location;
