// "https://randomuser.me/api/?results=24"

fetch("https://randomuser.me/api/?results=24")
  .then((res) => res.json())
  .then((data) => console.log(data));
