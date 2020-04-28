const express = require('express');
var friends = require("../data/friends.js")


module.exports = function(app){

    // app.use(express.json(friends))
    // var friends = JSON.parse(friends)

    app.get("/api/friends", function(req, res){
        res.json(friends)
    })

    app.post("/api/friends/", function(req, res){
        bestMatch = {
            name: "",
            photo: "",
            closenessScore: 0
        }
        console.log(friends)
        // console.log(typeof parseInt(dataMatch.answerArr[0]))
        dataMatch = req.body;
        // for(let i = 0; i < friends.length; i++){
        //     console.log(friends[i])
        // }
        // console.log(dataMatch)
        // friends.push(dataMatch)

        for(let j = 0; j < friends.length; j++){ //Loop through all friends
            compareScore = 0;
            for(let i = 0; i < dataMatch.scores.length; i++){ //Loop through the scores
                if(dataMatch.scores[i] == friends[j].scores[i]){
                    compareScore += 5;
                } else{
                    compareScore += 5 - Math.abs(dataMatch.scores[i] - friends[j].scores[i])
                }
            }
            if(compareScore > bestMatch.closenessScore){
                bestMatch.closenessScore = compareScore;
                bestMatch.name = friends[j].name;
                bestMatch.photo = friends[j].photo;
            }
        }
        friends.push(dataMatch)
        console.log(bestMatch)
        res.send(bestMatch)
    })
}
