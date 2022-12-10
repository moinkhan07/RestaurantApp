let item_ls = JSON.parse(localStorage.getItem("Items"));
let details = document.getElementById("details");
let price = document.getElementById("price");
let final = document.getElementById("final");

let appendData = (data) => {
  data.forEach((el, i) => {
    let div_title = document.createElement("div");
    div_title.setAttribute("class", "title");
    let title = document.createElement("p");
    title.innerText = el.title;
    let remove = document.createElement("button");
    remove.innerText = "Remove";
    remove.setAttribute("class", "rem_btn");
    remove.onclick = function () {
      item_ls.splice(i, 1);
      localStorage.setItem("Items", JSON.stringify(item_ls));
      window.location.reload();
    };
    div_title.append(title, remove);
    details.append(div_title);

    let div_price = document.createElement("div");
    div_price.setAttribute("class", "div_price");
    let price_ = document.createElement("p");
    price_.innerText = el.price;
    div_price.append(price_);
    price.append(div_price);
  });
};
appendData(item_ls);

let sum = 0;
for (let i = 0; i < item_ls.length; i++) {
  sum = sum + parseInt(item_ls[i].price);
}
let final_amount = document.createElement("h2");
final_amount.innerText = "₹" +  sum;
final.append(final_amount);

let checkout_payment = document.getElementById("checkout_payment");

checkout_payment.onclick = function(){
  window.location.href = "./success.html"
}
