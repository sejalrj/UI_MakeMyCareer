function contactCandidate(){
    let email_body = $('#email_body').val();
      $.ajax({
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': 'OPTIONS, POST',
            'Content-Type': 'application/json'

        },
        contentType: "application/json",
        method: "POST",
        url: "https://vimb0ibx3h.execute-api.us-east-1.amazonaws.com/dev",
        data: JSON.stringify({
            "email_body": email_body,
        })
      }).done(function() {
        $(this).addClass( "done" );
      });
}