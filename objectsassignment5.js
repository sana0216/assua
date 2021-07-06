function Clock (hours,minutes,seconds){
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.printclock= function(){
        console.log(this.hours + ':' + this.minutes +':' + this.seconds);
    }
}
 var Clock1 =new Clock(12, 50, 10);
 Clock1.printclock();
 

