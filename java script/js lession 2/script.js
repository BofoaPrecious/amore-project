const man= "python"
const woman= "javascript"
const score1=96
const score2=108
const score3=89
const score11=88
const score12=91
const score13=110
const totalScoreForCompetitonOfPython= score1+score2+score3
console.log(totalScoreForCompetitonOfPython);
const totalScoreForCompetitionOfJavascript=score11+score12+score13
console.log(totalScoreForCompetitionOfJavascript)
const averageScoreForPython= totalScoreForCompetitonOfPython/3
console.log(averageScoreForPython)
const averageScoreForJavascript= totalScoreForCompetitionOfJavascript/3
console.log(averageScoreForJavascript)
const fuck= totalScoreForCompetitonOfPython/3 <100
console.log(fuck)
const luck= totalScoreForCompetitionOfJavascript/3 <100
console.log(luck)
if (averageScoreForPython > averageScoreForJavascript) 
{console.log(`pythons are the winners with ${averageScoreForPython}`)
    
} else {console.log(`javascript are the winners with ${averageScoreForJavascript}`)
    
}
if (averageScoreForPython <100) {console.log(`pythons are the winners with an average of ${averageScoreForPython} less than 100 points`)
    
} else{console.log(`javascript are the winners with ${averageScoreForJavascript} less than 100 points`)

}
    

 


