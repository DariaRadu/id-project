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
var icons=document.getElementsByTagName("i");
for (var i=0;i<icons.length;i++)
{
	icons[i].addEventListener("click",iconClick);
}
function iconClick(e)
{
		var icon=e.target;
		var el=e.target.parentElement.getElementsByTagName("span")[0];
		icon.classList.remove("fa-pencil");
		icon.classList.add("fa-times");
		icon.dataset.ex=el.innerHTML;
		icon.removeEventListener("click",iconClick);
		el.contentEditable=true;
		el.focus();
		document.secretPar=icon;
		setTimeout(function(){document.addEventListener("click",save)},1000);
		el.style.backgroundColor="white";
		icon.addEventListener("click",iconCancel);

}
function save(e)
{
	document.secretPar.parentElement.getElementsByTagName("span")[0].contentEditable=false;
	document.secretPar.parentElement.getElementsByTagName("span")[0].style.backgroundColor="rgba(0,0,0,0)";
	document.secretPar.classList.remove("fa-times");
	document.secretPar.classList.add("fa-pencil");
	document.removeEventListener("click",save);
	document.secretPar.dataset.ex="";
}
function iconCancel(e)
{
	document.removeEventListener("click",save);
	e.target.classList.remove("fa-times");
	e.target.classList.add("fa-pencil");
	var el2=e.target.parentElement.getElementsByTagName("span")[0];
	if(e.target.dataset.ex)
	el2.innerHTML=e.target.dataset.ex;
	el2.contentEditable=false;
	el2.style.backgroundColor="rgba(0,0,0,0)";
	e.target.addEventListener("click",iconClick);
	e.target.removeEventListener("click",iconCancel);
}