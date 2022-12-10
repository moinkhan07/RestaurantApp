
let register = async () => {
  let register_data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    username: document.getElementById("username").value,
    mobile: document.getElementById("mobile").value,
    description: document.getElementById("description").value,
  };
  let res = await fetch(
    `https://masai-api-mocker.herokuapp.com/auth/register`,
    {
      method: "POST",
      body: JSON.stringify(register_data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  let data = await res.json();
  console.log(data);
};

let login = async () => {
  let login_data = {
    username: document.getElementById("username2").value,
    password: document.getElementById("pass2").value,
  };

  let res_2 = await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
    method: "POST",
    body: JSON.stringify(login_data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  let data_2 = await res_2.json();
  let {username} = login_data; //destructuring
  let {token} = data_2; // destructuring
  getProfile(username,token)
  console.log(data_2);
};
// let login_data_store = JSON.parse(localStorage.getItem("login")) || [];
let getProfile = async (userName, token) => {
  let res_3 = await fetch(
    `https://masai-api-mocker.herokuapp.com/user/${userName}`,
    {
      method: "GET", //optional bcz "GET" is by default
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  let data_3 = await res_3.json();
  console.log(data_3);
  // login_data_store = [];
  // login_data_store.push(data_3);
  // localStorage.setItem("login",JSON.stringify(login_data_store));
   alert(`Welcome ${data_3.name}`);
  window.location.href = "./admin.html";
};

