let Display = document.getElementById('time');
let [sec , min , hour ] = [ 0 , 0 , 0 ];
let timer = 0;
let sp = document.querySelectorAll('span');


function start() {

    sec++;
    if (sec == 60 ) {
        min++
        sec=0;

        if (min==60) {

            hour++;
            min=0;   
        }
    }

    let h = hour < 10 ? "0" + hour : hour ;
    let m = min < 10 ? "0" + min : min ;
    let s = sec < 10 ? "0" + sec : sec ;

    Display.innerText = h + " : " + m+ " : " + s;

}

function Startwatch() {

    
    if (timer !== null) {

        clearInterval(timer);
        
    }
    timer = setInterval(start,1000);

    sp.forEach((span) => {
        span.classList.add('start');
      });
}

function stop() {

    clearInterval(timer);
    sp.forEach((span) => {
        span.classList.remove('start');
      });
    
}

function Reset() {

    clearInterval(timer);
    [sec , min , hour ] = [ 0 , 0 , 0 ];
    Display.innerText =  "00 : 00 : 00";
    sp.forEach((span) => {
        span.classList.remove('start');
      });
    
}

