
//Require the friends array
var friends = require("../data/friends");
console.log(friends)
module.exports = function(app){

    app.get("/api/friends", function(req, res){
        console.log(friends);
        res.json(friends);

    });

    app.post("/api/friends", function(req, res){
        var userSurvey = req.body;
        //console.log(userSurvey.scores);
       // console.log(req.body)
        var friendMatchArray = [];
        friends.forEach(function(friends){
            //console.log("apiRoute ln 19" ,friends.scores);
           // console.log(userSurvey.scores);
            let diff = 0;
            for(let i = 0; i < userSurvey.scores.length; i++){
                //console.log([i]);
                diff += Math.abs(friends.scores[i] - userSurvey.scores[i]);
            }
            //console.log("ln 26", typeof diff);
            friendMatchArray.push(diff);
            //console.log("ln 28 ", friendMatchArray);
        });
        //get the ID of the best friend match
        let friendMatch = friendMatchArray.indexOf(Math.min(...friendMatchArray));
        console.log(friendMatch);
        res.json(friends[friendMatch]);

        
     })
}