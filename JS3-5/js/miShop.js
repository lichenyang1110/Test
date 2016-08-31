//header购物车的悬浮事件
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

//header_nav的悬浮事件
var header_nav_hover = document.querySelectorAll(".header_nav_hover");

var header_nav_bottom = document.getElementById("header_nav_bottom");
var box_hidden = document.querySelectorAll(".box_hidden");
function headerNarHover (e) {
	for (var i = 0; i < header_nav_hover.length; i++) {
		//如果悬浮的是当前元素，设置display为block
		if (e.target == header_nav_hover[i]) {
			header_nav_bottom.style.display = "block";
			box_hidden[i].style.display = "block";
		} else{
//			header_nav_bottom.style.display = "none";
			box_hidden[i].style.display = "none";
		}
	}
}

//当鼠标离开时把header_nav_bottom隐藏
var header_nav_ul = document.querySelector("#header_nav>ul");
function headerNarHidden (e) {
//	console.log(e.target);
//	console.log(e.currentTarget);
//	console.log(this);
//	if (e.target != header_nav_ul || e.target != header_nav_bottom) {
//		header_nav_bottom.style.display = "block";
//	} else {
		header_nav_bottom.style.display = "none";
//	}
}
header_nav_ul.onmouseout = headerNarHidden;

//给每一个header_nav_hover添加响应函数
for (var i = 0; i < header_nav_hover.length; i++) {
	header_nav_hover[i].onmouseover = headerNarHover;
	header_nav_hover[i].onmouseout = function(e){
		e.stopPropagation();
	};
}
//给隐藏的盒子定义函数，让鼠标悬浮在其上面时显示
function headerNarVisit (e) {
		header_nav_bottom.style.display = "block";	
}

//给隐藏的盒子添加响应事件
header_nav_bottom.onmouseover = headerNarVisit;
header_nav_bottom.onmouseout = headerNarHidden;