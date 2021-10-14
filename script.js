function game(){
    let randNumber = parseInt(Math.random()*(100-1)+1); // 1 - 100
    let attemp = 10;
    trying();
    function trying(){
        let userNumber = prompt("Введите число", '');
        function checkNumber(){
            if(!isNaN(parseFloat(userNumber))){
                return;
            } else{
                userNumber = prompt("Вы ввели не число. Введите заново.", '');
                checkNumber();
            }
        }
        checkNumber();
        userNumber = Number(userNumber);

        if(userNumber>randNumber){
            alert("Загаданное число меньше");
        } else if(userNumber<randNumber){
            alert("Загаданное число больше");
        } else{
            alert("Вы угадали число :)");
            return;
        }

        if(attemp==1){
            alert("У вас кончились попытки. Вы проиграли :_(");
            if(confirm("Хотите начать игру заново?")){
                game();
            } else{
                return;
            }
        }
        alert("У вас осталось "+(--attemp)+" попыток");
        trying();
    }
}
game();