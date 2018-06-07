document.getElementById('cityName').onkeypress=function(){
    var key=event.which;
    if(key>=65 && key<=90 ||key>=97 && key<=122)
    {
        $('#weather').prop("disabled", false);
        $('#forecast').prop("disabled", false);
        return true;
    }
    else
        return false;
}
document.getElementById('cityName').onkeyup=function(){
    if(document.getElementById('cityName').value=="")
    {
         $('#weather').prop("disabled", true);
         $('#forecast').prop("disabled", true);
         console.log("cityname null");
    }
}
$("#weather").click(function(){

    const cityName=$('#cityName').val();
    $('#chart-container').addClass('content-hide');
    
    $.ajax({
        type: 'GET',
        url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=27baf75c38a20fcdbb19c1d9e2d867e5`,
        success: function(data){
            console.log('in success callback');
            console.log(data);
            const currentTemp=Math.round(data.main.temp-273);
            const currentPressure = data.main.pressure;
            const humidity = data.main.humidity;
            $('#temperature').html(currentTemp);
            $('#pressure').html(currentPressure);
            $('#humidity').html(humidity);
            $('.table').removeClass('content-hide');
        },
        error: function(err){
            console.log('in error callbar');
            console.log(err);
        }
    });
});
$('#forecast').click(() => {
    $('table').addClass('content-hide');
    const cityName = $('#cityName').val();
    // Hit the API
    // On Success, parse the forecast information from the response
    // and update the options in the chart
    $.ajax({
        type: 'GET',
        url: `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=27baf75c38a20fcdbb19c1d9e2d867e5`,
        success: (data) => {
            console.log('In success callback');
            console.log(data);
            listOfDates = data.list.map((ele) => moment(ele.dt * 1000).format('dddd, h:mm a'));
            console.log(listOfDates);
            listOfTemp = data.list.map(ele => Math.round(ele.main.temp - 273));
            console.log(listOfTemp);
            plotChart(listOfTemp, listOfDates);
        },
        error: (err) => {
            console.log('In error callback');
            console.log(err);
        }
    });

    const plotChart = (tempArr, datesArr) => {
        $('#chart-container').removeClass('content-hide');
        Highcharts.chart('chart-container', {
            chart: {
                type: 'spline'
            },
            title: {
                text: 'Monthly Average Temperature'
            },
            xAxis: {
                categories: datesArr
            },
            yAxis: {
                title: {
                    text: 'Temperature'
                },
                labels: {
                    formatter: function () { return this.value + '°'; }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true
            },
            plotOptions: {
                spline: {
                    marker: {
                        radius: 4,
                        lineColor: '#FFFFFF',
                        lineWidth: 1
                    }
                }
            },
            series: [{
                name: cityName,
                marker: {
                    symbol: 'square'
                },
                data: tempArr

            }]
        });
    }

})