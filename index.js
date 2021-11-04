// "https://randomuser.me/api/?results=24"

let userData = [];

/**
 * Asynchronous function. Retrieves each user's data and then stores it in a array
 *
 * @return  {Promise}  Data stored in the userData array
 */
const fetchUser = async () => {
  await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => (userData = data.results))
    .then((userData) => console.log(userData));
};

/**
 * Asynchronous function. Displaying each user's maps
 *
 * @return  {Promise}  Displaying each user's maps
 */
const userDisplay = async () => {
  await fetchUser();
  document.body.innerHTML = userData
    .map(
      (user) =>
        `
        <div class="card">
            <img src=${user.picture.large} alt="photo de ${user.name.last}">
            <h3>${user.name.first}<h3>
            <p>${user.location.city}, ${user.dob.date}</p>
            <em>Membre depuis : ${user.registered.date} jours</em>
        </div>    
        `
    )
    .join("");
};

userDisplay();
