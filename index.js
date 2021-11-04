// "https://randomuser.me/api/?results=24"

let userData = [];

const fetchUser = async () => {
  await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => (userData = data.results));
  console.log(userData);
};

const userDisplay = async () => {
  await fetchUser();

  document.body.innerHTML = userData.map(
    (user) =>
      `
  <h3>${user.name.first}<h3>
  `
  );
};

userDisplay();
