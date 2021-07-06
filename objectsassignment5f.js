function Clock (hours,minutes,seconds){
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.printclock= function(){
        console.log(this.hours + ':' + this.minutes +':' + this.seconds);
    }


    this. = function(seconds){
        this.hours = parseInt(seconds/3600);
        this.minutes =parseInt ((seconds-this.hours*3600) / 60);
        this.seconds = seconds - ((this.hours*3600) + (this.minutes*60) );
       }

    }
 var Clock1 =new nowClock(12, 50, 10);

 Clock1.nowClock(10000);

 Clock1.printclock();
 

 