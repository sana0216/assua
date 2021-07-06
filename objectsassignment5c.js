function Clock (hour,minutes,seconds){
    this.hour = hour;
    this.minutes = minutes;
    this.seconds = seconds;
    this.printclock= function(){
        console.log(this.hour+ ':' + this.minutes +':' + this.seconds);
    }

    this.gethour = function(){
        return this.hour;
    }

    this.getminutes = function(){
        return this.minutes;
    }

    this.getseconds =function(){
        return this.seconds;
    }
}

var Clock1 =new Clock(12, 50, 10);


 Clock1.printclock();

 console.log(Clock1.gethour());

 console.log(Clock1.getminutes());

 console.log(Clock1.getseconds());

 
