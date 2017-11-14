var pages=document.getElementsByClassName("page");
var currentPage=0;
loginForm.addEventListener("keypress",function(e)
{
	if(e.keyCode==13)
	{
		login();
	}
})
btnLogin.addEventListener("click",login);
function login()
{
	if(loginForm.user.value=="admin"&&loginForm.pass.value=="pass")
	{
		pages[currentPage].classList.remove("pageActive");
		currentPage=1;
		pages[currentPage].classList.add("pageActive");
	}
	else
	{
		console.log("Error");
	}
}

btnSettings.addEventListener("click",openSettings);
function openSettings()
{	
	var backA=document.createElement("DIV");
	backA.classList.add("back");
	testerz.appendChild(backA);
	createSettingsPage(backA);
	

}
function createSettingsPage(parent)
{
	var container=document.createElement("DIV");
	container.classList.add("settingsContainer");
	parent.appendChild(container);
	var photo=document.createElement("DIV");

}