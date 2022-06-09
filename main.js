var screen = document.getElementById('screen');
function display(num){
    screen.value +=num;
}

function Clear(){
    screen.value = '';
}
function del(){
    screen.value = screen.value.slice(0, -1);
}
var btn = document.getElementById('b1');

var amount = 1000000;
var cName = document.getElementById('name');

function start(){
    var eName = prompt('Enter your name');
    if (eName === ''){
       alert('Field cant be blank,click on start button and enter your name');
    }
    else{
        screen.value = `Welcome ${eName}`;
        cName.innerHTML = eName;
       
    }
    
}
    function submit(){
    var amount = 150000;
    var pin = 1234;
    var result ='Processing....';;
    var ePin = prompt('Enter Your Pin');
    
    if(ePin != pin){
        screen.value = 'Wrong Pin! Account Blocked';
    }
    else{
        var eAmount = prompt('Enter Amount');
        if(eAmount > amount){
            screen.value = 'Insufficient Fund';
        }
        else{
            
            setTimeout((e) => {
                screen.value = 'Please Take Your Cash'; 
            }, 3000);

            screen.value = result;
        }
    }
}

      
  
   
