Template.main.avgGSR = function() {
     return {
         colors: ["#2b908f", "#90ee7e", "#f45b5b", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
             "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"
         ],
         chart: {

             type: 'spline',
             animation: Highcharts.svg, // don't animate in old IE
             marginRight: 10,
             events: {
                 load: function() {

                     // set up the updating of the chart each second
                     var series = this.series[0];
                     setInterval(function() {
                         var x = (new Date()).getTime(), // current time
                             y = Session.get("avgGSR");
                         series.addPoint([x, y], true, true);
                     }, 1000);
                 }
             }
         },
         title: {
             text: 'Live GSR Average Data'
         },
         xAxis: {
             type: 'datetime',
             tickPixelInterval: 150
         },
         yAxis: {
             title: {
                 text: 'Value'
             },
             plotLines: [{
                 value: 0,
                 width: 1,
                 color: '#F44336'
             }]
         },
         tooltip: {
             formatter: function() {
                 return '<b>' + this.series.name + '</b><br/>' +
                     Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                     Highcharts.numberFormat(this.y, 2);
             }
         },
         legend: {
             enabled: false
         },
         exporting: {
             enabled: false
         },
         series: [{
             name: 'Galvanic Skin Response (Average)',
             data: (function() {
                 // generate an array of random data
                 var data = [],
                     time = (new Date()).getTime(),
                     i;

                 for (i = -19; i <= 0; i += 1) {
                     data.push({
                         x: time + i * 1000,
                         y: Math.random()
                     });
                 }
                 return data;
             }())
         }]
     };
 }

 Template.main.rtValue = function() {
     return {
         colors: ["#1976D2", "#90ee7e", "#f45b5b", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
             "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"
         ],
         chart: {
             type: 'spline',
             animation: Highcharts.svg, // don't animate in old IE
             marginRight: 10,
             events: {
                 load: function() {

                     // set up the updating of the chart each second
                     var series = this.series[0];
                     setInterval(function() {
                         var x = (new Date()).getTime(), // current time
                             y = Session.get("rtValue");;
                         series.addPoint([x, y], true, true);
                     }, 1000);
                 }
             }
         },
         title: {
             text: 'Live GSR Data'
         },
         xAxis: {
             type: 'datetime',
             tickPixelInterval: 150
         },
         yAxis: {
             title: {
                 text: 'Value'
             },
             plotLines: [{
                 value: 0,
                 width: 1,
                 color: '#F44336'
             }]
         },
         tooltip: {
             formatter: function() {
                 return '<b>' + this.series.name + '</b><br/>' +
                     Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                     Highcharts.numberFormat(this.y, 2);
             }
         },
         legend: {
             enabled: false
         },
         exporting: {
             enabled: false
         },
         series: [{
             name: 'Galvanic Skin Response (Real Time)',
             data: (function() {
                 // generate an array of random data
                 var data = [],
                     time = (new Date()).getTime(),
                     i;

                 for (i = -19; i <= 0; i += 1) {
                     data.push({
                         x: time + i * 1000,
                         y: Math.random()
                     });
                 }
                 return data;
             }())
         }]
     };
 };