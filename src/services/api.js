//------------------------------------------------------------------------------------------------------------------
// urls
//------------------------------------------------------------------------------------------------------------------

const baseURL = "http://localhost:3000";
const signinURL = baseURL + "/signin";

//------------------------------------------------------------------------------------------------------------------
// sign in post request
//------------------------------------------------------------------------------------------------------------------

export function signin(username, password) {
  return fetch(signinURL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ username, password })
  }).then(resp => resp.json());
}

//------------------------------------------------------------------------------------------------------------------
// validate get request
//------------------------------------------------------------------------------------------------------------------

export function validate() {
  return fetch("http://localhost:3000/validate", {
    headers: { Authorisation: localStorage.token }
  }).then(resp => resp.json());
}

//------------------------------------------------------------------------------------------------------------------
// inventory get request
//------------------------------------------------------------------------------------------------------------------

export function getInventory() {
  return fetch("http://localhost:3000/inventory", {
    headers: { Authorisation: localStorage.token }
  }).then(r => r.json());
}

//------------------------------------------------------------------------------------------------------------------
// create user
//------------------------------------------------------------------------------------------------------------------

export function createUser(username, password) {
  return fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  }).then(resp => resp.json()); //
}

//------------------------------------------------------------------------------------------------------------------
// create pot
//------------------------------------------------------------------------------------------------------------------

export function createPot(name, description, goal, date, id) {
  return fetch("http://localhost:3000/inventory", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      description: description,
      goal: goal,
      date: date,
      user_id: id
    })
  }).then(resp => resp.json()); //
}

//------------------------------------------------------------------------------------------------------------------
// update spending
//------------------------------------------------------------------------------------------------------------------

export function updateSpending(daily, weekly, monthly, user_id) {
  debugger
  return fetch(`http://localhost:3000/users/${user_id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      daily: daily,
      weekly: weekly,
      monthly: monthly
    })
  })
  // .then(resp => resp.json()); //
}


export function createCharityUser(userId, charityId, donation) {
  return fetch("http://localhost:3000/charity_users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user_id: userId,
      charity_id: charityId,
      donation: donation
    })
  }).then(resp => resp.json());
}

// export function updateUser(userId, donation, balance) {
//   return fetch(`http://localhost:3000/users/${userId}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       balance: balance - donation
//     })
//   }).then(resp => resp.json());
// }

// export function updateCharity(charityId, donation, balance) {
//   return fetch(`http://localhost:3000/charities/${charityId}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       balance: balance + donation
//     })
//   }).then(resp => resp.json());
// }
//------------------------------------------------------------------------------------------------------------------
// EXPORT
//------------------------------------------------------------------------------------------------------------------

export default { signin, validate, getInventory };

// we will be able to import validate by name or we can impoet the who api.js - this just gives us more options
