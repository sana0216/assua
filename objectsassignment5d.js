function Clock (hour,minutes,seconds){
    this.hour = hour;
    this.minutes = minutes;
    this.seconds = seconds;
    this.printclock= function(){
        console.log(this.hour+ ':' + this.minutes +':' + this.seconds);
    }

    this.sethour = function(){
        return this.hour;
    }

    this.setminutes =function(){
         return this.minutes
    }

    this.setseconds = function(){
        return this.seconds;
    }
}

var Clock1 =new Clock(1, 50, 40);

 Clock1.printclock();

 console.log(Clock1.sethour());

 console.log(Clock1.setminutes());
 console.log(Clock1.setseconds());
 

 

 
