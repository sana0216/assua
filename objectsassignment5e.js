 function Clock (hour,minutes,seconds){
    this.hour = hour;
    this.minutes = minutes;
    this.seconds = seconds;
    this.printclock= function(){
        console.log(this.hour+ ':' + this.minutes +':' + this.seconds);
    }

    this.tick = function(){
        this.seconds++;
    }
}

var Clock1 =new Clock(1, 50, 40);
 Clock1.tick();
 
 Clock1.printclock();

 
