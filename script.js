google.charts.load('current', {
    'packages': ['gantt']
  });
  google.charts.setOnLoadCallback(drawChart);
  
  function drawChart() {
  
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Task ID');
    data.addColumn('string', 'Task Name');
    data.addColumn('string', 'Resource');
    data.addColumn('date', 'Start Date');
    data.addColumn('date', 'End Date');
    data.addColumn('number', 'Duration');
    data.addColumn('number', 'Percent Complete');
    data.addColumn('string', 'Dependencies');
  
    data.addRows([
      ['Documentation', 'Documentation', 'documentation',
        new Date(2018, 0, 1), new Date(2021, 0, 1), null, 0, null
      ],
      ['Digitization', 'New Digitization', 'digitization',
        new Date(2018, 0, 1), new Date(2021, 0, 1), null, 0, null
      ],
      ['AdAggregation', 'Ad Aggregation', 'ad aggregation',
        new Date(2018, 0, 1), new Date(2021, 0, 1), null, 0, null
      ],
      ['RevisedDataModel', 'Implement Revised Data Model', 'db',
        new Date(2018, 0, 1), new Date(2018, 1, 1), null, 0, null
      ],
      ['UpdatedStandard', 'Update FOTM Intake Standard', 'standard',
        new Date(2018, 1, 1), new Date(2018, 1, 15), null, 0, 'RevisedDataModel'
      ],
      ['CoreAPI', 'Core API', 'api',
        new Date(2018, 1, 15), new Date(2018, 4, 15), null, 0, 'RevisedDataModel'
      ],
      ['AnalysisAPI', 'Analysis API', 'api',
        new Date(2018, 4, 15), new Date(2018, 9, 15), null, 0, 'CoreAPI'
      ],
      ['CrowdSourcing', 'Crowdsourcing App 2.0', 'crowdsourcing',
        new Date(2018, 9, 15), new Date(2019, 2, 15), null, 0, 'CoreAPI,AnalysisAPI'
      ],
      ['CrowdSourcingTesting', 'Crowdsourcing App 2.0 Testing', 'testing',
        new Date(2019, 2, 15), new Date(2019, 4, 15), null, 0, 'CrowdSourcing'
      ],
      ['EducatorWebPortal', 'Educator Web Portal', 'education',
        new Date(2019, 2, 15), new Date(2019, 6, 15), null, 0, 'AnalysisAPI,CrowdSourcing'
      ],
      ['EducatorWebPortalTesting', 'Educator Web Portal Testing', 'testing',
        new Date(2019, 6, 15), new Date(2019, 8, 15), null, 0, 'EducatorWebPortal'
      ],
      ['AdminWebPortal', 'Admin Web Portal', 'admin',
        new Date(2019, 6, 15), new Date(2019, 9, 15), null, 0, 'EducatorWebPortal'
      ],['AdminWebPortalTesting', 'Admin Web Portal Testing', 'testing',
        new Date(2019, 9, 15), new Date(2020, 1, 15), null, 0, 'AdminWebPortal'
      ],['EndToEndTesting', 'End To End Testing', 'testing',
        new Date(2020, 1, 15), new Date(2020, 3, 15), null, 0, 'AdminWebPortalTesting,EducatorWebPortalTesting,CrowdSourcingTesting'
      ],['Kiosk', 'Kiosk Sessions', 'demoing',
        new Date(2020, 3, 15), new Date(2021, 0, 1), null, 0, null
      ],['Workshops', 'Workshops', 'demoing',
        new Date(2020, 3, 15), new Date(2021, 0, 1), null, 0, null
      ],['Classroom', 'Local Classroom Demos', 'demoing',
        new Date(2020, 3, 15), new Date(2021, 0, 1), null, 0, null
      ],['Bugfixes', 'Bugfixes / Minor Feedback Implementation', 'bugfix',
        new Date(2020, 3, 15), new Date(2021, 0, 1), null, 0, null
      ]
    ]);
  
    var options = {
      height: 2000,
      width: 1500,
      gantt: {
        trackHeight: 40
      }
    };
  
    var chart = new google.visualization.Gantt(document.getElementById('gantt_fotm'));
  
    chart.draw(data, options);
  }