var friends = require("../data/friends.js")


// return the friends object
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });


    app.post("/api/friends", function (req, res) {

        console.log(req.body.scores);

        // new friend's information & parse
        var newfriend = req.body;
        for (var i = 0; i < newfriend.scores.length; i++) {
            newfriend.scores[i] = parseInt(newfriend.scores[i]);
        }

        var bestFriendIndex = 0;
        var maximumDifference = 40;

        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 0;
            for (var j = 0; j < friends[i].scores; j++) {
                var difference = Math.abs(newfriend.scores[j] - friends[i].scores[j]);
                totalDifference += difference;
            }
            if (totalDifference < maximumDifference) {
                bestFriendIndex = i;
                maximumDifference = totalDifference;
            }
        }

        friends.push(newfriend);

        res.json(friends[bestFriendIndex]);
    });
};