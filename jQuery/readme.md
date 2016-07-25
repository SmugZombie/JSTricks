JSON Get
$.getJSON( "/api/<?php echo $api_version?>/getDevices.json", function( response ) { console.log(response);  });

JSON POST
data = '{"device_id":"'+device_id+'"}';
$.post('/api/<?php echo $api_version?>/deactivateHost.json', data, function(response) { console.log(response);  }, 'json');
