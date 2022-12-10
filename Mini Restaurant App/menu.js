let items_arr = JSON.parse(localStorage.getItem("Items")) || [];
const getData = async (page_num) => {
  try {
   let res = await fetch(
      `http://localhost:3000/menu?_page=${page_num}&_limit=${5}`
    );
    let data = await res.json();
    console.log(data);
    appendData(data);
  } catch (error) {
    console.log(error);
  }
};
getData();
let container = document.getElementById("container");
const appendData = (data) => {
  container.innerHTML = null;
  data.forEach((el) => {
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.src = el.image;
    let div2 = document.createElement("div");
    div2.setAttribute("class", "data_");
    let title = document.createElement("h2");
    title.innerText = el.title;
    let price = document.createElement("p");
    price.innerText = "Price : " + el.price;
    let rating = document.createElement("p");
    rating.innerText = "Rating : " + el.rating;
    let desc = document.createElement("p");
    desc.innerText = el.description;
    let book = document.createElement("button");
    book.innerText = "BOOK";
    book.setAttribute("class", "book");
    book.onclick = function(){
      items_arr.push(el);
      localStorage.setItem("Items",JSON.stringify(items_arr));
    }
    div2.append(title, price, rating, desc, book);
    div.append(image, div2);
    container.append(div);
  });
};


const showButtons = (results) => {
  let button_div = document.getElementById("buttons");
  button_div.innerHTML = null;
  let button = Math.ceil(results / 5);
  for (let i = 1; i <= button; i++) {
    let btn = document.createElement("button");
    btn.innerText = i;
    btn.onclick = function () {
      getData(i);
    };
    button_div.append(btn);
  }
};

showButtons(50);


