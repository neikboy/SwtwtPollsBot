async function doRequest() {
    // Open this file in a text editor and follow the steps below: 

    /*
        Open the poll website where you want to bot in your browser (this is made for chrome and I don't know if it works in other browsers)
        
        Copy the id from the poll URL.
        The id can be found in the URL between the e/ and the /viewform : 
        "https://docs.google.com/forms/d/e/  {this_is_the_id}  /viewform"
        the ID should look something like this "1FAIpQLSedBFk5nG7X0rnuRXAu1qfrPGF0Ban1uvmYo7WCzkbv8rNjKw"

        Paste the id in-between the "" below.
    */

    let formsId = "Replace_this_with_id";

    /* 
        In your browser, before you submit your response press F12 or Rightclick => Inspect
        Then go to the network tab at the top
        If you havent selected all your choices do it now.
        Then press "submit" on the page. ! Dont close the page after submitting !

        Now there should be multiple entries in the network tab.
        Click on the "formResponse" go to Payload and click "view source".
        Copy the text and paste it in-between the "" below.
    */

    let payload = "Replace_this_with_payload";

    /*
        Now you can copy everything in this file into the console in your browser, on the page you kept open (F12 => Console OR Rightclick => Inspect => Console)
        To start the bot (After pasting this in the console and pressing enter), 
        just type botPoll(123) where 123 is the amount of votes and then press enter. 
        You can change this number to any number.
        
        This bot is not that fast compared to other ones but i did this on purpose to not get timed out.
        It sends about 2 votes every second and you need to keep your window open for it to continue sending.
        Good luck and have fun :D
    */

    let url = "https://docs.google.com/forms/d/e/" + formsId + "/formResponse";
    let data = payload.substring(0,payload.indexOf("&dlut="));
    
    let res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data,
    });
}

var wait = (ms) => {
    const start = Date.now();
    let now = start;
    while (now - start < ms) {
      now = Date.now();
    }
}

function botPoll(amount){
    for (let index = 0; index < amount; index++) {
        doRequest();
        console.log(( index + 1 ) + " Votes sent!");
        wait(500);
    }
}



