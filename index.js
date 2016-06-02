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

console.log(Bar);
console.log(Li);
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


Nav.addEventListener("click", touchTrigger, false);
Bar.addEventListener("click", pageTrigger, false);
