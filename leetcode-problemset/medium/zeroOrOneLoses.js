// Players with 0 or 1 loses
// Difficulty: Medium

//You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.

// Return a list answer of size 2 where:

// answer[0] is a list of all players that have not lost any matches.
// answer[1] is a list of all players that have lost exactly one match.
// The values in the two lists should be returned in increasing order.

// Note:

// You should only consider the players that have played at least one match.
// The testcases will be generated such that no two matches will have the same outcome.


var findWinners = function(matches) {

    let losers = {} 

    for(let i = 0; i < matches.length; i++){  
        if(losers[matches[i][1]]){
            losers[matches[i][1]] += 1
        } else {
            losers[matches[i][1]] = 1
        }

        if(!losers[matches[i][0]]){
            losers[matches[i][0]] = 0
        }

    }

    let oneLoss = []
    let noLoss = []

    for(team in losers){
        if (losers[team] === 0){
            noLoss.push(team)
        } else if (losers[team] === 1){
            oneLoss.push(team)
        }
    }
    return [noLoss, oneLoss]
};

//0 not lost
//1 lost 1
console.log(findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]))
//expected output: [ [ '1', '2', '10' ], [ '4', '5', '7', '8' ] ]