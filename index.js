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

  /**
   * Formatting the date in the chosen format
   *
   * @param   {Date}  date  Date in ISO format
   *
   * @return  {string}        Date in the chosen format
   */
  const dateParser = (/** @type {Date} */ date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return newDate;
  };

  document.body.innerHTML = userData
    .map(
      (user) =>
        `
        <div class="card">
            <img src=${user.picture.large} alt="photo de ${user.name.last}">
            <h3>${user.name.first}<h3>
            <p>${user.location.city}, ${dateParser(user.dob.date)}</p>
            <em>Membre depuis : ${user.registered.date} jours</em>
        </div>    
        `
    )
    .join("");
};

userDisplay();
