

function findMatching(driver, list) {
    return driver.filter(
     (possibleMatch) => possibleMatch.toLowerCase() === list.toLowerCase()
    );
}

function fuzzyMatch(driver, list) {
    return driver.filter(
         (possibleMatch) => possibleMatch.toLowerCase().indexOf(list.toLowerCase())===0
 );}


 function matchName(driver, list){
    return driver.filter((possibleMatch) => possibleMatch.name === list);
 }


        