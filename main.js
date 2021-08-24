var removeCartItemButtons = document.getElementsByClassName("delete");
for (var i = 0; i < removeCartItemButtons.length; i++) {
  let button = removeCartItemButtons[i];
  button.addEventListener("click", function () {
    button.parentElement.remove();
    changeFinalPrice();
  });
}

var minus = document.getElementsByClassName("minus-btn");
for (var i = 0; i < minus.length; i++) {
  let minuss = minus[i];
  minuss.addEventListener("click", function () {
    if (minuss.nextElementSibling.value >= 2) {
      minuss.nextElementSibling.value--;
    }
    changeFinalPrice();
  });
}

var plus = document.getElementsByClassName("plus-btn");
for (var i = 0; i < plus.length; i++) {
  let pluss = plus[i];
  pluss.addEventListener("click", function () {
    pluss.previousElementSibling.value++;
    changeFinalPrice();
  });
}

var red = document.getElementsByClassName("like");
for (var i = 0; i < red.length; i++) {
  let redd = red[i];
  redd.addEventListener("click", function () {
    if (redd.style.color != "red") {
      redd.style.color = "red";
    } else {
      redd.style.color = "black";
    }
  });
}

function changeFinalPrice() {
  var items = document.getElementsByClassName("Item");
  console.log(items);
  var finalPrice = document.getElementById("finalPrice");
  var prices = document.getElementsByClassName("price");
  var quantities = document.getElementsByClassName("Quant");
  let totalPrice = 0;
  for (let i = 0; i < items.length; i++) {
    totalPrice = totalPrice + prices[i].innerHTML * quantities[i].value;
  }
  finalPrice.value = totalPrice;
  console.log(totalPrice);
}
