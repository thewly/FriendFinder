var friends = require("../data/friends.js")



module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });
    
    app.post("/api/friends", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newfriend = req.body;
        
        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();
        
        console.log(newfriend);
        
        friends.push(newfriend);
        
        res.json(newfriend);
    });  
}