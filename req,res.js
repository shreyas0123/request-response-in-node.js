const http = require('http'); //http module require for creating server

const server = http.createServer((req,res)=>{  //creating server that has call back function consisting of request,response as a parameter
    const url = req.url; //retrieves the URL path from the incoming HTTP request and assigns it to a constant variable called url.
    //client making an reqquest for eg 'localhost/home' to server  then server needs to respond back as 'Welcome home'
    let message = ''; //it holds empty string when client make an request as explained above 'Welcome home' will be stored in message

    if (url === '/home'){
        message = 'Welcome home';
    } else if(url === '/about'){
        message = 'Welcome to About Us page';
    } else if(url === '/node'){
        message = 'Welcome to my Node Js project';
    }
    res.writeHead(200,{'Content-Type':'text/plain'}); //responses giving back to client as plain/text type
    //res.write('<head><title>Welcome to my Node Js projec<title></head>');
    //we set the status code to 200, which means the request was successful
    //status code 402 means file not found
    res.write(message); //writes the response body to the clien
    res.end();//to prevent the client from waiting indefinitely for the response.
    //server keeps loading in order to prevent that
})

server.listen(3000);
//create server will listen port 3000 in your local computer
//send back the response