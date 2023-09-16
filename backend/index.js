require("dotenv").config();

// express run our http server
const express = require("express");

// cors allow us to make request from our frontend
const cors = require("cors");

// axios allow us to make http request
const axios = require("axios");

// express 
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

// ---------------------------------------
// sign up 
// ---------------------------------------

app.post("/signup", async (req, res) => {
    const { username, secret, email, first_name, last_name } = req.body;

     // Store a user-copy on Chat Engine!
    try {
        const r = await axios.post(
        "https://api.chatengine.io/users/",
        { username, secret, email, first_name, last_name },
        { headers: { "Private-Key": process.env.CHAT_ENGINE_PRIVATE_KEY } }
        );
        return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }
});

// ---------------------------------------
// log in 
// ---------------------------------------

app.post("/login", async (req, res) => {
    const { username, secret } = req.body;
  
    // Fetch this user from Chat Engine in this project!
    try {
      const r = await axios.get("https://api.chatengine.io/users/me/", {
        headers: {
          "Project-ID": process.env.CHAT_ENGINE_PROJECT_ID,
          "User-Name": username,
          "User-Secret": secret,
        },
      });
      return res.status(r.status).json(r.data);
    } catch (e) {
      return res.status(e.response.status).json(e.response.data);
    }
});
  
return app.listen(4000, () => {
    console.log("Listening on port 4000");
});


// -----------------------
//  test just for usenrame 
// -----------------------

// require("dotenv").config();

// // express run our http server
// const express = require("express");

// // cors allow us to make request from our frontend
// const cors = require("cors");

// // axios allow us to make http request
// const axios = require("axios");

// // express 
// const app = express();
// app.use(express.json());
// app.use(cors({ origin: true }));

// // ---------------------------------------
// // simple autrhenticate with just username
// // ---------------------------------------

// console.log("CHAT_ENGINE_PRIVATE_KEY:", process.env.CHAT_ENGINE_PRIVATE_KEY);

// app.post("/authenticate", async (req, res) => {
//     const { username } = req.body;
    
//     try {
//         const r = await axios.put(
//             "https://api.chatengine.io/users/",
//             { username: username, secret: username, first_name: username,},
//             { headers: { "Private-Key": process.env.CHAT_ENGINE_PRIVATE_KEY } }
//         )
//         return res.status(r.status).json(r.data);
//     } catch (e) {
//         if (e.response) {
//             return res.status(e.response.status).json(e.response.data);
//         } else {
//             return res.status(500).json({ error: 'Internal Server Error' });
//         }
//     }
// });

// return app.listen(4000, () => {
//     console.log("Listening on port 4000");
// });
