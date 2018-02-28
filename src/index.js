
//module.exports =
        function getZerosCount(number) {

            const fives = 5;

            var count5 = 0;
            var count2 = 0;


            do{
                if(number % fives === 0) {
                    count5 +=  number/fives;
                    number = number/fives;

                }

            }
            while (number!= 0)

            return count5 + count2;
        }



console.log(getZerosCount(84583674));