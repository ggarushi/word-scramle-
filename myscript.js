let words=['cricket','chess','baseball','volleyball','swimming','football','shooting','pubg'];
let newword="";
let jumbword="";
const tog=document.querySelector('input');
let play=false;
const createn=()=>{
  let randn=Math.floor(Math.random()*words.length);
  return words[randn];
}
const game=(arr)=>{
  for(let i=arr.length-1;i>=0;i--)
  {
    let temp=arr[i];
    let j=Math.floor(Math.random()*(i+1));
    arr[i]=arr[j];
    arr[j]=temp;
  }

  return arr;
}
function guessgame()
{
  let tex=document.querySelector(".mainele")
  if(!play){
    play=true;
   document.querySelector(".btn").innerHTML = "Guess";
const tog=document.querySelector('input');

   tog.style.display='block';
   newword=createn();
   jumbword=game(newword.split("")).join("");
   tex.innerHTML=jumbword;
   setTimeout(function(){
     if(tog.value=="")
     {
       tog.style.display='none';
       document.querySelector(".btn").style.visibility='none';
       tex.innerHTML=`Sorry,time is over,you lost`;
       play=false;
     }
   },15000)
   }
   else
   {
     let userl=document.querySelector('input').value;
     play=false;
     if(newword===userl){
  tex.innerHTML=`It's correct`;
      document.querySelector(".btn").innerHTML=`START AGAIN`;
       document.querySelector('input').value="";

   }
   else {
    document.querySelector(".mainele").innerHTML="sorry ,it's wrong";
    document.querySelector(".btn").innerHTML=`START AGAIN`;
    document.querySelector('input').value="";

   }
 }

}
