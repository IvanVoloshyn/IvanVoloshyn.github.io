<!-- аналізується версія браузера:-->
browserName=navigator.appName;
browserVer=parseInt(navigator.appVersion);
if (browserName=="Netscape" && browserVer >= 3) version="n3";
else version="n2";

if (version=="n3") {
	graphred=new Image(20,20);
	graphred.src="img/Banner_red.jpg";
	graphdefault=new Image(20,20);
	graphdefault.src="img/Banner.jpg";
}
function graphON(graphName) {
	if (version=="n3") {
		red_default=eval(graphName + "red.src");
		document.images[graphName].src=red_default;
		}
}
function graphOFF(graphName) {
	if (version=="n3") {
		default_red=eval(graphName + "default.src");
		document.images[graphName].src=default_red;
		}
}