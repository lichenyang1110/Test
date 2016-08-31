var header_rightShop = document.querySelector("#header_right>img");
var header_hiddenDiv = document.querySelector("#header_hidden");
var header_nav_right = document.querySelector("#header_nav_right");
header_rightShop.onmouseover = function () {
	header_rightShop.src = "img/shop1.png";
	header_hiddenDiv.style.display = "block"
	header_nav_right.style.display = "none";
}
header_rightShop.onmouseout = function () {
	header_rightShop.src = "img/shop.png";
	header_hiddenDiv.style.display = "none";
	header_nav_right.style.display = "block";
}
