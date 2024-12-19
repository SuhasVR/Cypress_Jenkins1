const scanner = require('sonarqube-scanner');
scanner(
  {
    serverUrl: 'http://sonarqube.dev.sae.cloud:9000/',
    token: "SONARSCAN_TOKEN",
    options: {
      'sonar.projectName': 'wmi-fe-qe-automation automated tests',
      'sonar.projectKey': 'wmi-fe-qe-automation',
      'sonar.projectDescription': 'wmi-fe-qe-automation QE automated tests',
      'sonar.sources': '.',
      'sonar.inclusions' : 'src/**' ,
    },
  },
  () => process.exit()
);
