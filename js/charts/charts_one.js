// Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Google Adwords', 3],
          ['Yandex', 1]
        ]);
       // Create the data table.
        var data2 = new google.visualization.DataTable();
        data2.addColumn('string', 'Topping');
        data2.addColumn('number', 'Slices');
        data2.addRows([
          ['Google Adwords', 4],
          ['Yandex', 2]
        ]);

        // Set chart options
        var options = {'pieHole': 0.5,
                       'legend': 'none',
                       slices: {
                          0: { color: '#8fd3f4' },
                          1: { color: '#b5fffc' }
                        },
                       pieSliceTextStyle: {
                          color: '#000',
                          fontSize:'13'
                        },
                       chartArea:{
                          width:'100%',
                          height:'100%',
                          top:15
                       },
                       'tooltip': {
                          fontSize:'14',
                      }
                  
                      };
        // Set chart options
        var options2 = {'pieHole': 0.3,
                       'legend': 'none',
                       slices: {
                          0: { color: '#c41aeb' },
                          1: { color: '#fc9afc' }
                        },
                       pieSliceTextStyle: {
                          color: '#000',
                          fontSize:'13'
                        },
                       chartArea:{
                          width:'100%',
                          height:'100%',
                          top:15
                       },
                       'tooltip': {
                          fontSize:'14',
                      }
                
                      };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div_one'));
        chart.draw(data, options);
        var chart = new google.visualization.PieChart(document.getElementById('chart_div_two'));
        chart.draw(data2, options2);
        }






