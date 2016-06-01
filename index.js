var getNode = function(ele) {
	return document.querySelector(ele);
};

var Nav = getNode('.nav');

console.log(Nav.childNodes);
function touchTrigger(event) {
    var Li = document.querySelectorAll('.nav li');
    console.log(Li);
    for (var i = 0 ; i<Li.length; i++) {
    	Li[i].className = "";
    }
	var target = event.target;
	target.className = "clicked";
	// target.style.color="#fff";
	// target.style.borderBottom="2px solid #fff";
	// target.style.fontSize="16px";
}

Nav.addEventListener("click", touchTrigger, false);
