// let startingValue = 40;
// let timer = document.getElementById("clicker__counter");
// timer = function time() {
//     if (startingValue == 0) {
//         clearInterval(interval);
//         alert('Вы победили в конкурсе!');
//     } else {
//         document.getElementById("clicker__counter").innerHTML = startingValue--;
//     }
// }
// let interval = setInterval(timer, 1000);

let h = 0, m = 0, s = 40;
let dateEnd = new Date();
dateEnd.setHours(h);
dateEnd.setMinutes(m);
dateEnd.setSeconds(s);
(()=> {
    let diff = dateEnd - new Date();
    if(diff <= 0){
        document.getElementById("clicker__counter").innerHTML = "Время закончилось!";
        return;
    }
    else{
        diff/=1000;
        document.getElementById("clicker__counter").innerHTML = (Math.floor(diff/60/60).toString().length< 2?"0":"")+ Math.floor(diff/60/60)+":";
        diff -= Math.floor(diff/60/60)*60*60;
        document.getElementById("clicker__counter").innerHTML += (Math.floor(diff/60).toString().length <2?"0":"")+Math.floor(diff/60)+":";
        diff -= Math.floor(diff/60)*60;
        document.getElementById("clicker__counter").innerHTML += (diff.toString().length <2?"0":"")+diff;
    }
    setTimeout(arguments.callee,1000);
})();