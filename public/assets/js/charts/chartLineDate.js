/* Chart 2 - Line Date */

// Variables set up

var view = 1;

var date = new Date();
var dateString = dateFormatAAAAMMJJ(date);
var dateNext = dateFormatAAAAMMJJ(getNextWeek(date));
var datePrev = dateFormatAAAAMMJJ(getLastWeek(date));

var firstDayMonth = dateFormatAAAAMMJJ(new Date(date.getFullYear(), date.getMonth(), 1));

// Chart set up

var ctxLineDate = document.getElementById("chartLineDate").getContext('2d');
var myChartLineDate = new Chart(ctxLineDate, {
    type: 'line',
    data: {
        labels: setLabels(dateString),
        datasets: [{
            label: '# of Reservations',
            data: setDatas(),
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

// Utility functions

function dateFormatAAAAMMJJ(date) {
	return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
}
function getNextWeek(day) {
  var nextWeek = new Date(day.getFullYear(), day.getMonth(), day.getDate() + 7);
  return nextWeek;
}
function getLastWeek(day) {
  var lastWeek = new Date(day.getFullYear(), day.getMonth(), day.getDate() - 7);
  return lastWeek;
}

function setLabels(day, view) {
	var labels = function () {
	    var tmp = null;
	    $.ajax({
	        'async': false,
	        'type': "POST",
	        'global': false,
	        'dataType': 'json',
	        'url': "/get-labels/"+day+"/"+view,
	        'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
	        'success': function (data) {
	            tmp = data;
	        }
	    });
	    return tmp;
	}();
	return labels;
}
function setDatas(view) {
	var datas = function () {
    var tmp = null;
	    $.ajax({
	        'async': false,
	        'type': "POST",
	        'global': false,
	        'dataType': 'json',
	        'url': "/get-nb-res/"+view,
	        'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
	        'success': function (data) {
	            tmp = data;
	        }
	    });
	    return tmp;
    }();
	return datas;
}

function addLabel(chart, label) {
    chart.data.labels.push(label);
    chart.update();
}

function changeDatas(chart, labels, datas) {
	chart.data.labels = [];
    labels.forEach((label) => { addLabel(chart, label); });

	chart.data.datasets = [];
	chart.data.datasets.push({
        label: '# of Reservations',
        data: datas,
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
    });
    chart.update();
}


// Functions called on template

function next(chart, labels, datas) {
	changeDatas(chart, labels, datas);

	dateNext = dateFormatAAAAMMJJ(getNextWeek(new Date(dateNext)));
	datePrev = dateFormatAAAAMMJJ(getNextWeek(new Date(datePrev)));
}

function prev(chart, labels, datas) {
	changeDatas(chart, labels, datas);

	dateNext = dateFormatAAAAMMJJ(getLastWeek(new Date(dateNext)));
	datePrev = dateFormatAAAAMMJJ(getLastWeek(new Date(datePrev)));
}