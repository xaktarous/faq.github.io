const button=Array.from(document.querySelectorAll("#btn"));
const button1=Array.from(document.querySelectorAll("#btn1"));
const qst=Array.from(document.querySelectorAll("#hide-show"));
const p=Array.from(document.querySelectorAll("#qst p"));

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

for(let i=0;i<p.length;i++){
  p[i].addEventListener("click",()=>{
    if(qst[i].style.display==="none" || qst[i].style.display===""){
      button[i].style.display="none";
      button1[i].style.display="block";
      qst[i].style.display="block";
    }else{
      button1[i].style.display="none";
      button[i].style.display="block";
      qst[i].style.display="none";
    }

  })
}

