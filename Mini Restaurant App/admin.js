const addItems = async () => {
  let add_item_data = {
    id: document.getElementById("id").value,
    image: document.getElementById("image").value,
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    price: document.getElementById("price").value,
    rating: document.getElementById("rating").value,
  };

  let res = await fetch("http://localhost:3000/menu", {
    method: "POST",
    body: JSON.stringify(add_item_data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await res.json();
  console.log(data);
};

const replaceItems = async () => {
  let rep_id = document.getElementById("rep_id").value;
  let rep_item_data = {
    id: document.getElementById("new_id").value,
    image: document.getElementById("rep_image").value,
    title: document.getElementById("rep_title").value,
    description: document.getElementById("rep_description").value,
    price: document.getElementById("rep_price").value,
    rating: document.getElementById("rep_rating").value,
  };

  let res1 = await fetch(`http://localhost:3000/menu/${rep_id}`, {
    method: "PUT",
    body: JSON.stringify(rep_item_data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const updateItems = async () => {
  let upd_id = document.getElementById("upd_id").value;
  let upd_item_data = {
    price: document.getElementById("upd_price").value,
  };

  let res2 = await fetch(`http://localhost:3000/menu/${upd_id}`, {
    method: "PATCH",
    body: JSON.stringify(upd_item_data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const deleteItems = async () => {
  let del_id = document.getElementById("del_id").value;
  let res4 = await fetch(`http://localhost:3000/menu/${del_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
