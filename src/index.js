function getNode(ele) {
	return document.querySelector(ele);
};

function getNodes(ele) {
	return document.querySelectorAll(ele);
};

var Li = getNodes('.nav li');
var Isection = getNodes('#index section');
var Nav = getNode('.nav');
var Bar = getNode('#banner');
var BarLi = getNodes('#banner li');
var Divs = getNodes('body > div');

alert('123');
alert(Li);
function touchTrigger(event) {
	var target = event.target;
	var j = 0;
    for (let i = 0 ; i<Li.length; i++) {
    	Li[i].className = "";
    	Isection[i].className = "section-none";
    	if(Li[i] == target) {
    		j = i;
    	}  
    }
	target.className = "clicked";
	Isection[j].className="section-display";
}

function pageTrigger(event) {
    var target = event.target;
    var j = 0;
    for (let i = 0 ; i<BarLi.length; i++) {
    	BarLi[i].className = "all-page"; 
    	Divs[i].className = "page-none"; 
    	if(BarLi[i] == target) {
    		j = i;
    	} 
    }
	target.className = "selected-page";
	Divs[j].className="page-display";
}

// var move = getNode('.show2 ul');
// 获取元素和初始值
// var disX = 0;
// 容器鼠标按下事件
// move.onmousedown = function (event){
//     // var e = e || window.event;
//     disX = event.clientX - this.offsetLeft;
//     console.log(disX);
//     console.log(event.clientX);
//     console.log(this.offsetLeft);
//     // disY = e.clientY - this.offsetTop;
//     move.onmousemove = function (event){
//         // var e = e || window.event;
//         move.style.left = (event.clientX - disX) + 'px';
//         console.log((event.clientX - disX) + 'px');
//         // move.style.top = (e.clientY - disY) + 'px';
//     };
//     move.onmouseup = function (){
//         move.onmousemove = null;
//         .onmouseup = null;
//     };
//     return false;
// };

Nav.addEventListener("click", touchTrigger, false);
Bar.addEventListener("click", pageTrigger, false);
// move.addEventListener("click", moveChange, false);
// move.addEventListener("mousedown", moveChange1, false);
// move.addEventListener("mousemove", moveChange2, false);
// move.addEventListener("mouseup", moveChange3, false);





