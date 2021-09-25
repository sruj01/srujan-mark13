function reverseStr(str){
    var listOfChars  = str.split('');
    var reverseListOfChars = listOfChars.reverse();
    var reversedStr = reverseListOfChars.join('');
    return reversedStr;
  }

  function isPalindrome(str){
    var reverse = reverseStr(str);
    return str === reverse;
  }

  function convertDateToStr(date){
    var dateStr = {day:'', month:'', year:''};
    if(date.day<10){
      dateStr.day = '0' + date.day;
    }
    else{
      dateStr.day = date.day.toString();
    }
    if(date.month<10){
      dateStr.month = '0' + date.month;
    }
    else{
      dateStr.month = date.month.toString();
    }
    dateStr.year = date.year.toString();
    return dateStr;
  }

  function getAllDateFormats(date){
    var dateStr = convertDateToStr(date);

    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;
    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
  }

  function checkPalindromeForAllDateFormats(date) {
    var listOfPalindromes = getAllDateFormats(date);
    var flag = false;
    for(var i=0; i< listOfPalindromes.length; i++){
      if(isPalindrome(listOfPalindromes[i])){
        flag = true;
        break;
      }
    }
    return flag;
  }

  function isLeapYear(year){
    if(year % 400 === 0){
      return true;
    }
    if(year % 100 === 0){
      return false;
    }
    if(year % 4 === 0){
      return true;
    }
    return false;
  }

  function getNextDate(date){
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;
    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(month === 2){
      if(isLeapYear(year)){
        if(day>29){
          day = 1;
          month ++;
        }
      }
      else {
        if(day > 28){
          day=1;
          month++;
        }
      }
    }
    else{
      if(day > daysInMonth[month-1]){
        day =1;
        month++;
      }
    }
    if(month > 12){
      month = 1;
      year++;
    }
    return {
      day: day,
      month: month,
      year: year
    };
  }

  function getNextPalindromeDate(date){
    var ctrN = 0;
    var nextDate = getNextDate(date);
    while(1){
      ctrN++;
      var isPalindrome = checkPalindromeForAllDateFormats(nextDate);
      if(isPalindrome){
        break;
      }
      nextDate = getNextDate(nextDate);
    }
    return [ctrN, nextDate];
  }

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
      if(day ===0 && month === 1){
        day = daysInMonth[month + 10];
        month = month + 11;
        year--;
      }
      else if( day === 0 && month === 2){
        day = daysInMonth[month - 2];
        month = month - 1;
      }
      else if( day === 0 && month === 3){
        day = daysInMonth[month - 2];
        month = month - 1;
      }
      else if( day === 0 && month === 4){
        day = daysInMonth[month - 2];
        month = month - 1;
      }
      else if( day === 0 && month === 5){
        day = daysInMonth[month - 2];
        month = month - 1;
      }
      else if( day === 0 && month === 6){
        day = daysInMonth[month - 2];
        month = month - 1;
      }
      else if( day === 0 && month === 7){
        day = daysInMonth[month - 2];
        month = month - 1;
      }
      else if( day === 0 && month === 8){
        day = daysInMonth[month - 2];
        month = month - 1;
      }
      else if( day === 0 && month === 9){
        day = daysInMonth[month - 2];
        month = month - 1;
      }
      else if( day === 0 && month === 10){
        day = daysInMonth[month - 2];
        month = month - 1;
      }
      else if( day === 0 && month === 11){
        day = daysInMonth[month - 2];
        month = month - 1;
      }
      else if( day === 0 && month === 12){
        day = daysInMonth[month - 2];
        month = month - 1;
      }
    }
    return{
      day: day,
      month: month,
      year: year
    };
  }

  function getPreviousPalindromeDate(date){
    var ctrP = 0;
    var previousDate = getPreviousDate(date);
    while(1){
      ctrP++;
      var isPalindrome = checkPalindromeForAllDateFormats(previousDate);
      if(isPalindrome){
        break;
      }
      previousDate = getPreviousDate(previousDate);
    }
    return [ctrP, previousDate];
  }


var dateInputRef = document.querySelector("#bday-input");
var showBtnRef = document.querySelector("#show-btn");
var resultRef = document.querySelector("#result");


function clickHandler(e){
  var bdayStr = dateInputRef.value;
    if(bdayStr !== ""){
      var listOfDate = bdayStr.split("-");
      var date = {
        day: Number(listOfDate[2]),
        month: Number(listOfDate[1]),
        year: Number(listOfDate[0])
      };
      console.log(date);
      var isPalindrome = checkPalindromeForAllDateFormats(date);

      if(isPalindrome){
        resultRef.innerText = "Your Birthday is a Palindrome";
      }
      else{
        var [ctrN, nextDate] = getNextPalindromeDate(date);
        var [ctrP, previousDate] = getPreviousPalindromeDate(date);
        if(ctrN < ctrP){
          resultRef.innerText = "Sorry☹️\t Your birthday is not a Palindrome. The next Palindrome date closest to your dob is " + nextDate.day +"-"+ nextDate.month +"-"+ nextDate.year + ", you missed it by " +ctrN+ " day(s)";
        }
        else if(ctrN === ctrP){
          resultRef.innerText = "Sorry☹️\t Your birthday is not a Palindrome. You missed 2 palindrome dates equally far away from your birth day. They are: " + nextDate.day +"-"+ nextDate.month +"-"+ nextDate.year + " and  " + previousDate.day +"-"+ previousDate.month +"-"+ previousDate.year+". You missed them by " +ctrN+ " day(s)";
        }
        else{
          resultRef.innerText = "Sorry☹️\t Your birthday is not a Palindrome. The previous Palindrome date closest to your dob was " + previousDate.day +"-"+ previousDate.month +"-"+ previousDate.year + ", you missed it by " +ctrP+ " day(s)";
        }

      }
  }
  else{
    resultRef.innerText = "Enter Birthdate";
  }
}

showBtnRef.addEventListener("click", clickHandler);
