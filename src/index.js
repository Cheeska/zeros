
module.exports =  function getZerosCount(number) {

            const fives = 5;

            var count5 = 0;
            //var count2 = 0; 


            do{
                number = number /fives;
                count5 += Math.floor(number);

            }
            while (number!= 0)


            return count5;
        }

