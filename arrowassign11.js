var fibonacci = (num) => {
    var before = 0;
    var actual = 1;
    var next = 1;

  for(let i =0;i<num; i++){
      console.log(next)
      before=actual+next;
      actual = next;
      next = before;
  }
}
(fibonacci (200));