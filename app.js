const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

// Inorder to use the local files like img and css we need to make them static.
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
});

app.post('/', (req, res) => {
    const first = req.body.firstName;
    const last = req.body.lastName;
    const email = req.body.email;
    const data = {
        members: 
        [
            {
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: first,
                LNAME: last
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us11.api.mailchimp.com/3.0/lists/3ec9c99f27"
    const options = {
        method: "POST",
        auth: "harshit: your API Key"
    }

    const request = https.request(url, options, function(response){

        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        }else{
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    })

    // if error encounter
    request.on("error", function(err){
        response.sendFile(__dirname + "/failure.html");
        console.log(err);
    })

    request.write(jsonData); 
    request.end();
});

app.post('/failure', function(req, res){
    res.redirect('/');
})

// app.listen(3000, (req, res) => {
//     console.log("Server is running on port 3000");
// })

//this is need to be done inorder to deploy it 
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port 3000");
})

// apikey
// 66f5bb4d2c54352707cb358a68aa8776-us11 [revoked]

// list id
// 3ec9c99f27

// https://usX.api.mailchimp.com/3.0/lists/{list_id}

// backend on 
// https://us11.admin.mailchimp.com/lists/members/ [for owner]

