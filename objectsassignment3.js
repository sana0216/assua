function Song(name,artist,albumname,year,musicdirector){
 this.name = name,
this.artist = artist,
this.albumname = albumname
this.year=year,
this.musicdirector = musicdirector,
this .play =function(){
    console.log(this.name + "is playing");
}
}

var Song1 = new Song('maguva maguva','sidSriram','Vakeelsaab',2021,'SS thaman');
console.log(Song1.albumname + 'isplaying');
Song1.play();

 var Song2 = new Song('chitti','Ram','jathiratnalu',2021,'radhan');
 console.log(Song2.musicdirector + ' is giving music');
Song2.play();

var Song3 = new Song('manohari','revanth','bahubahli', 2015,'keeravani');
console.log(Song3.musicdirector  + ' is singing the song');
Song3.play();

console.log(Song1.albumname + 'isplaying');
Song1.play();

