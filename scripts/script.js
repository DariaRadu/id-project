//CLICK RATE CHART
var ctx = document.getElementById('clickRateChart').getContext('2d');
var clickRateChart = new Chart(ctx, 
{
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: 
        [{
            label: "Click Rate",
            borderColor: '#004977',
            backgroundColor:'#004977',
            /* borderColor: 'rgb(255, 99, 132)', */
            fill:0,
            lineTension:0.3,
            data: [0, 10, 5, 25, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: 
    {
        scales : 
        {
            xAxes : 
            [{
                gridLines : 
                {
                    display : false
                }
            }]
        }
    }
});

//CHANGING BETWEEN DAY/WEEK/MONTH
var dayChartButton = document.getElementsByClassName("topLine")[0].getElementsByClassName("itemTop")[0];
dayChartButton.addEventListener('click', function()
{
    var oldActive=document.getElementsByClassName("topLine")[0].getElementsByClassName('itemTopActive')[0];
    if (oldActive)
    {
        oldActive.classList.remove('itemTopActive');
    }
    dayChartButton.classList.add('itemTopActive');
    clickRateChart.data.labels=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    clickRateChart.data.datasets[0].data=[0, 10, 5, 25, 20, 30, 45];
    clickRateChart.update();
});

var weekChartButton = document.getElementsByClassName("topLine")[0].getElementsByClassName("itemTop")[1];

weekChartButton.addEventListener('click', function()
{
    var oldActive=document.getElementsByClassName("topLine")[0].getElementsByClassName('itemTopActive')[0];
    if (oldActive)
    {
        oldActive.classList.remove('itemTopActive');
    }
    weekChartButton.classList.add('itemTopActive');

    clickRateChart.data.labels=["Week 42", "Week 43", "Week 44", "Week 45", "Week 46", "Week 47", "Week 48"];
    clickRateChart.data.datasets[0].data=[74, 125, 80, 78, 120, 115, 95];
    clickRateChart.update();
});



var monthChartButton = document.getElementsByClassName("topLine")[0].getElementsByClassName("itemTop")[2];
monthChartButton.addEventListener('click', function()
{
    var oldActive=document.getElementsByClassName("topLine")[0].getElementsByClassName('itemTopActive')[0];
    if (oldActive)
    {
        oldActive.classList.remove('itemTopActive');
    }
    monthChartButton.classList.add('itemTopActive');
    clickRateChart.data.labels=["June", "July", "August", "September", "October", "November", "December"];
    clickRateChart.data.datasets[0].data=[200, 220, 210, 245, 260, 248, 235];
    clickRateChart.update();
});

//SERIES CHART
var ctx2 = document.getElementById('seriesChart').getContext('2d');
var seriesChart = new Chart(ctx2, 
{
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: 
    {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: 
        [{
            label: "FX Weekly",
            borderColor: '#004977',
            backgroundColor:'#004977',
            /* borderColor: 'rgb(255, 99, 132)', */
            fill:0,
            lineTension:0.3,
            data: [100, 110, 105, 125, 120, 130, 145]
        },
        {
            label: "Nordic and Baltics Economies",
            borderColor: 'red',
            backgroundColor:'red',
            /* borderColor: 'rgb(255, 99, 132)', */
            fill:0,
            lineTension:0.3,
            data: [90, 100, 95, 115, 90, 103, 140]
        },
        {
            label: "Eye-Opener",
            borderColor: 'blue',
            backgroundColor:'blue',
            /* borderColor: 'rgb(255, 99, 132)', */
            fill:0,
            lineTension:0.3,
            data: [110, 100, 115, 135, 124, 150, 130]
        },
        {
            label: "FX Strategies",
            borderColor: 'green',
            backgroundColor:'green',
            /* borderColor: 'rgb(255, 99, 132)', */
            fill:0,
            lineTension:0.3,
            data: [150, 120, 125, 125, 120, 130, 145]
        },
        {
            label: "Rates Strategy",
            borderColor: 'pink',
            backgroundColor:'pink',
            /* borderColor: 'rgb(255, 99, 132)', */
            fill:0,
            lineTension:0.3,
            data: [108, 109, 145, 136, 127, 139, 158]
        }]
    },

    // Configuration options go here
    options: 
    {
        scales : 
        {
            xAxes : 
            [{
                gridLines : 
                {
                    display : false
                }
            }]
        }
    }
});

var tempSec1 = document.getElementsByClassName("topLine")[1].getElementsByClassName("itemTop")[0];
tempSec1.addEventListener('click', function()
{
    var oldActive=document.getElementsByClassName("topLine")[1].getElementsByClassName('itemTopActive')[0];
    if (oldActive)
    {
        oldActive.classList.remove('itemTopActive');
    }
    tempSec1.classList.add('itemTopActive');
    seriesChart.data.labels=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    seriesChart.data.datasets[0].data=[105,108,112,115,120,122,125];
    seriesChart.data.datasets[1].data=[95,100,110,111,111,112, 115];
    seriesChart.data.datasets[2].data=[115,117,117,125,127,133, 135];
    seriesChart.data.datasets[3].data=[125,124,126,127,125,125, 125];
    seriesChart.data.datasets[4].data=[145,145,144,142,138,137, 136];
    seriesChart.update();
});
var tempSec2 = document.getElementsByClassName("topLine")[1].getElementsByClassName("itemTop")[1];

tempSec2.addEventListener('click', function()
{
    var oldActive=document.getElementsByClassName("topLine")[1].getElementsByClassName('itemTopActive')[0];
    if (oldActive)
    {
        oldActive.classList.remove('itemTopActive');
    }
    tempSec2.classList.add('itemTopActive');

    seriesChart.data.labels=["Week 42", "Week 43", "Week 44", "Week 45", "Week 46", "Week 47", "Week 48"];
    seriesChart.data.datasets[0].data=[110,107, 105,115,120, 125, 120];
    seriesChart.data.datasets[1].data=[100,98, 95,105,110, 115, 90];
    seriesChart.data.datasets[2].data=[100,110, 115,125,130, 135, 124];
    seriesChart.data.datasets[3].data=[120,123, 125,126,127, 125, 120];
    seriesChart.data.datasets[4].data=[145,142,141, 136,130,129, 127];
    seriesChart.update();
});

var tempSec3 = document.getElementsByClassName("topLine")[1].getElementsByClassName("itemTop")[2];
tempSec3.addEventListener('click', function()
{
    var oldActive=document.getElementsByClassName("topLine")[1].getElementsByClassName('itemTopActive')[0];
    if (oldActive)
    {
        oldActive.classList.remove('itemTopActive');
    }
    tempSec3.classList.add('itemTopActive');
    seriesChart.data.labels=["June", "July", "August", "September", "October", "November", "December"];
    seriesChart.data.datasets[0].data=[100, 110, 105, 125, 120, 130, 145];
    seriesChart.data.datasets[1].data=[90, 100, 95, 115, 90, 103, 140];
    seriesChart.data.datasets[2].data=[110, 100, 115, 135, 124, 150, 130];
    seriesChart.data.datasets[3].data=[150, 120, 125, 125, 120, 130, 145];
    seriesChart.data.datasets[4].data=[108, 109, 145, 136, 127, 139, 158];
    seriesChart.update();
});

//NEW SCRIPT
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
closeIcon.addEventListener("click",function()
{
	document.getElementsByClassName("backActive")[0].classList.remove("backActive");
});

//SEARCH BAR DUMMY
var counter = 0;
var value = "";

var blueprintSearch = 
'<li><div class="result-label" style="background-color: {{color}}">\
    {{letter}}\
</div>\
<div class="result-text">\
    <a href="">{{name}}</a>\
    <a href="">{{title}}</a>\
</div></li>';


var ajResult = [
{	"letter":"A",
    "color":"red",
    "name":"Adam Hegedus",
    "title":"Filming and Photography"},
{	"letter":"L",
    "color":"teal",
    "name":"Lynn P. Asmussen",
    "title":"Drawing circles"},
{	"letter":"C",
    "color":"#222",
    "name":"Claudiu C.",
    "title":"Coding C# faster than you"},
{	"letter":"D",
    "color":"pink",
    "name":"Daria Darling",
    "title":"Doing the deed of doodleling"},
{	"letter":"L",
    "color":"darkgreen",
    "name":"Line Hjort K.",
    "title":"Maker of green kale chips"}
];

$('#form-searchbar input').on('input', search(this.value));

function search(value)
{
    $('#textSpan').html(value);
    counter=value.length;
    showResult(counter)
    if(counter > 0)
    {
        $('#search-box').css('display','flex');	
    }
    else
    {
        $('#search-box').hide();
    }
}

var name ="";
var title ="";
var letter ="";
var color ="";
var result ="";

function showResult(number){
    $('#search-list').html("");

    for(var i = 0 ; i<ajResult.length; i++){

        letter=ajResult[i].letter;
        color=ajResult[i].color;
        name=ajResult[i].name;
        title=ajResult[i].title;

        result = blueprintSearch.replace("{{letter}}",letter);
        result = result.replace("{{name}}",name);
        result = result.replace("{{title}}",title);
        result = result.replace("{{color}}",color);
        
        $('#search-list').append(result);
    }
}

//make the search disappear by clicks, if there is no content
var inputContent = "";
document.addEventListener("click", function()
{
    inputContent = $('#form-searchbar input').val();
    if (inputContent == ""){
        $('#search-box').hide();
    }
});