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

var move = getNode('.show2 ul');
var disX = 0;

move.onmousedown = function (event){
    disX = event.clientX - this.offsetLeft;
    console.log(disX);
    console.log(event.clientX);
    console.log(this.offsetLeft);
    move.onmousemove = function (event){
        move.style.left = (event.clientX - disX) + 'px';
        console.log((event.clientX - disX) + 'px');
    };
    move.onmouseup = function (){
        move.onmousemove = null;
        move.onmouseup = null;
    };
    return false;
};

Nav.addEventListener("click", touchTrigger, false);
Bar.addEventListener("click", pageTrigger, false);





