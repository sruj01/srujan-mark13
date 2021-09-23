function getPreviousDate(date){
  var day = date.day - 1;
  var month = date.month;
  var year = date.year;
  var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
  if(month-1 ===2){
    if(isLeapYear(year)){
      if(day ===0){
        day = 29;
        month--;
      }
    }
    else{
      if(day === 0){
        day = 28;
        month--;
      }
    }
  }
  else{
    if(day ===0){
      day = daysInMonth[month-2];
      month--;
    }
  }
  if(month ===0){
    month = 12;
    year--;
  }
  return{
    day: day,
    month: month,
    year: year
  };
}

function getPreviousPalindromeDate(date){
  var ctr = 0;
  var previousDate = getPreviousDate(date);
  while(1){
    ctr++;
    var isPalindrome = checkPalindromeForAllDateFormats(previousDate);
    if(isPalindrome){
      break;
    }
    previousDate = getPreviousDate(previousDate);
  }
  return [ctr, previousDate];
}
