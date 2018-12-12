/* Chart 3 - Doughnut */


// Chart set up

var ctxDoughnut = document.getElementById("chartDoughnut").getContext('2d');
var myChartDoughnut = new Chart(ctxDoughnut, {
    type: 'doughnut',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: function () {
			    var tmp = null;
			    $.ajax({
			        'async': false,
			        'type': "POST",
			        'global': false,
			        'dataType': 'json',
			        'url': "/get-nb-res",
			        'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
			        'success': function (data) {
			            tmp = data;
			        }
			    });
			    return tmp;
		    }(),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});