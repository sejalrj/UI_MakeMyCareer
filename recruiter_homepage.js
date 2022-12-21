$(document).ready(function(){
    console.log('this is run on page load');
    getJobPostings();
});


function getJobPostings() {
          $.ajax({
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Methods': '*',
                'Content-Type': 'application/json'
            },
            contentType: "application/json",
            method: "GET",
            url: "https://pvpx4f2oyd.execute-api.us-east-1.amazonaws.com/dev",
            // data: JSON.stringify({
            //     "name": "name",
            //     "email": "email",
            //     "password": "password"
            // })
          }).done(function() {
            $(this).addClass( "done" ); 
          });
      };
      

function CreateJobRole() {
          $.ajax({
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Methods': 'OPTIONS, POST'
            },
            contentType: "application/json",
            method: "POST",
            url: "https://e3uyya0frh.execute-api.us-east-1.amazonaws.com/dev/createjob",
            data: JSON.stringify({
                "name": "name",
                "email": "email",
                "password": "password"
            })
          }).done(function() {
            $(this).addClass( "done" ); 
          });
      };