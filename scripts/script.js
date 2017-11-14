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
var weekChartButton = document.querySelector("#weekChart");

weekChartButton.addEventListener('click', function()
{
    var oldActive=document.querySelector('.itemTopActive');
    if (oldActive)
    {
        oldActive.classList.remove('itemTopActive');
    }
    weekChartButton.classList.add('itemTopActive');

    clickRateChart.data.labels=["Week 42", "Week 43", "Week 44", "Week 45", "Week 46", "Week 47", "Week 48"];
    clickRateChart.data.datasets[0].data=[74, 125, 80, 78, 120, 115, 95];
    clickRateChart.update();
});

var dayChartButton = document.querySelector("#dayChart");
dayChartButton.addEventListener('click', function()
{
    var oldActive=document.querySelector('.itemTopActive');
    if (oldActive)
    {
        oldActive.classList.remove('itemTopActive');
    }
    dayChartButton.classList.add('itemTopActive');
    clickRateChart.data.labels=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    clickRateChart.data.datasets[0].data=[0, 10, 5, 25, 20, 30, 45];
    clickRateChart.update();
});

var monthChartButton = document.querySelector("#monthChart");
monthChartButton.addEventListener('click', function()
{
    var oldActive=document.querySelector('.itemTopActive');
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