$(function () {
	var pathName = window.location.pathname;
	pathName = pathName.split('/').pop();
	//document.getElementById("jstest").innerHTML = pathName;

	var element = document.getElementById(pathName);
	element.style.backgroundColor = "#33ff33";
	element.style.borderRadius = "20px";
});