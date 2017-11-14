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
	document.getElementsByClassName("back")[0].classList.add("backActive");

}