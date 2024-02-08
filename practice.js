const findTheMovie = (movieTitle, movieYear, arrOfMovies) =>{
   for(let temp1 of arrOfMovies)
     {
       if(temp1.title===movieTitle && temp1.year===movieYear)
       {
         const store={
           title:movieTitle,
           director:temp1.director,
           year:movieYear
         };
         return store;
       }
       else
         continue;
     }
   }

   console.log(findTheMovie('The  Dark Knight',2008,
      [
          {
              title:'Star Wars',
              director:'George Lucas',
              year:1977
          },
                     
          {
              title:'The  Dark Knight',
              director:'Christopher Nolan',
              year:2008
          }
      ]))


function stringCombine(str1, str2){
   return str1+" "+str2;
   }

console.log(stringCombine("my name is abdullah","i live in dhaka"));
function prize(num){
    const first100Prize=100;
    const second100Prize=90;
    const remainingPrize=70;
    const totallprize=0;
    if(num<=100)
      return first100Prize*num;
    else
       {
        if(num<=200)
           return (((num-100)*second100Prize)+first100Prize*100);
        else
          return (((num-200)*remainingPrize)+100*first100Prize+100*second100Prize);
       }
      
}
console.log(prize(220));


function calculator(a,opparator,b){
    switch(opparator){
        case "+":
            return a+b;
        case "-":
            return a-b;
        case "*":
            return a*b;
        case "/":
            return a/b;
        default:
           return "not valid" 
    }
}



console.log(calculator(10*2,"+",5));
(function auto(){
    console.log("hello i am alive");
     
})();


function finds(numbers){
  for(let i of numbers)
  {
    console.log(i.basic*i.incrementPercent/100,(i.basic*i.incrementPercent/100)*i.exp,((i.basic*i.incrementPercent/100)*i.exp)+i.basic);
  }
}
console.log(finds([
    {employ:"h1",exp:5,basic:1000,incrementPercent:10},
     {employ:"h2",exp:3,basic:2000,incrementPercent:15},
     {employ:"h3",exp:7,basic:3000,incrementPercent:20},
]))



