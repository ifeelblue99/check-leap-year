let randomYear = (Math.random()*100+2000).toFixed()

function isLeapYear(year) {

  return (new Date(year, 1, 29).getDate() === 29)?true:false

}

console.log("is",randomYear,"a leap year?",isLeapYear(randomYear))