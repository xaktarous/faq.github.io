const button=Array.from(document.querySelectorAll("#btn"));
const button1=Array.from(document.querySelectorAll("#btn1"));
const qst=Array.from(document.querySelectorAll("#hide-show"));


for(let i=0;i<button.length;i++){
    button[i].addEventListener("click",()=>{
        button[i].style.display="none";
        button1[i].style.display="block";
        qst[i].style.display="block";
      })
}

for(let i=0;i<button.length;i++){
    button1[i].addEventListener("click",()=>{
        button1[i].style.display="none";
        button[i].style.display="block";
        qst[i].style.display="none";
      })
}



