////////////////////////////
////      全局变量             ////
////////////////////////////
//图片周期定时器
var glableTimer = null;
//图片位置定时器
var timer = null;
//容器元素(移动的就是它的偏移量)
var containerSlideUl = document.querySelector("#container_slide>ul");
var containerSlideDiv = document.querySelector("#container_slide");
var isMoving = false;
var targetL = 0;

////////////////////////////
////      移动动画             ////
////////////////////////////
function slideAction (targetLeft) {
	clearInterval(timer);
	timer = setInterval(function () {
		var distance = (targetLeft - parseInt(containerSlideUl.style.left)) / 7;
		var targetDis = distance >0 ? Math.ceil(distance) : Math.floor(distance);
		if (parseInt(containerSlideUl.style.left) == targetLeft) {
			if (parseInt(containerSlideUl.style.left) <= -7356) {
				containerSlideUl.style.left = "-1226px";
			}
			if (parseInt(containerSlideUl.style.left) >=0) {
				containerSlideUl.style.left = "-6130px";
			}
			//符合条件，停止移动
			clearInterval(timer);
			isMoving = false;
		} else {
			containerSlideUl.style.left = parseInt(containerSlideUl.style.left) + targetDis + "px";
			isMoving = true;
		}		
	},50);
}
////////////////////////////
////      轮播周期             ////
////////////////////////////
clearInterval(glableTimer);
//自动轮播(3秒一个图片周期)
function autoSlide () {
	glableTimer = setInterval(function () {
		if (!isMoving) {
			targetL = containerSlideUl.offsetLeft;
		}
		slideAction(targetL - 1226);
	}, 4000);
}

//第一次进入轮播图应该自动播放
autoSlide();

////////////////////////////
////      左右按钮              ////
////////////////////////////
//左右按钮相关
function leftRightClick (e) {
	//只有在图片动画停止时才可点击移动图片
	if (!isMoving) {
		if (e.target.className == "first_bt") {
			//向左
			slideAction(containerSlideUl.offsetLeft + 1226);
		} else{
			//向右（second_bt）
			slideAction(containerSlideUl.offsetLeft - 1226);
		}
	}
}

//左按钮事件
document.querySelector(".first_bt").onmouseover = function () {
	document.querySelector(".first_bt").style.backgroundPosition = "0 0";
}
document.querySelector(".first_bt").onmouseout = function () {
	document.querySelector(".first_bt").style.backgroundPosition = "66% 0";
}
document.querySelector(".first_bt").onclick = leftRightClick;

//右按钮事件
document.querySelector(".second_bt").onmouseover = function () {
	document.querySelector(".second_bt").style.backgroundPosition = "33% 0";
}
document.querySelector(".second_bt").onmouseout = function () {
	document.querySelector(".second_bt").style.backgroundPosition = "100% 0";
}
document.querySelector(".second_bt").onclick = leftRightClick;

////////////////////////////
////      停止轮播            ////
////////////////////////////
containerSlideDiv.onmouseover = function () {
	//停止定时器
	clearInterval(glableTimer);
}
containerSlideDiv.onmouseout = function () {
	autoSlide();
}
			