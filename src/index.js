module.exports = function toReadable (number) {
    function unit (unitNumber) {
        if (((number%100)/10|0) === 1) {
            return '';
        } else {
            switch (unitNumber) {
                case 0:
                  if (number === 0) {
                    return 'zero ';
                  } else {
                    return '';
                  }
                case 1:
                return 'one ';
                case 2:
                return 'two ';
                case 3:
                return 'three ';
                case 4:
                return 'four ';
                case 5:
                return 'five ';
                case 6:
                return 'six ';
                case 7:
                return 'seven ';
                case 8:
                return 'eight ';
                case 9:
                return 'nine ';
            }
        }
    }
    function dozens (dozenNumber) {
        if (dozenNumber === 1) {
            switch (number%10) {
                case 0:
                return 'ten ';
                case 1:
                return 'eleven ';
                case 2:
                return 'twelve ';
                case 3:
                return 'thirteen ';
                case 4:
                return 'fourteen ';
                case 5:
                return 'fifteen ';
                case 6:
                return 'sixteen ';
                case 7:
                return 'seventeen ';
                case 8:
                return 'eighteen ';
                case 9:
                return 'nineteen ';
              }
        } else {
            switch (dozenNumber) {
                case 0:
                return '';
                case 2:
                return 'twenty ';
                case 3:
                return 'thirty ';
                case 4:
                return 'forty ';
                case 5:
                return 'fifty ';
                case 6:
                return 'sixty ';
                case 7:
                return 'seventy ';
                case 8:
                return 'eighty ';
                case 9:
                return 'ninety ';
              }

        }
    }
    function hundreds (hundredsNumber) {
        switch (hundredsNumber) {
            case 0:
            return '';
            case 1:
            return 'one hundred ';
            case 2:
            return 'two hundred ';
            case 3:
            return 'three hundred ';
            case 4:
            return 'four hundred ';
            case 5:
            return 'five hundred ';
            case 6:
            return 'six hundred ';
            case 7:
            return 'seven hundred ';
            case 8:
            return 'eight hundred ';
            case 9:
            return 'nine hundred ';
          }
    }
    return (hundreds(number/100|0) + dozens((number%100)/10|0) + unit(number%100%10)).slice(0,-1);
}
