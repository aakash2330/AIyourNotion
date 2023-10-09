let intervalI:any;
const letters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';



  export async function glitchfun(initialTextStateFun:any,finalText:string,iterations:number,time:number){
    await clearInterval(intervalI);   
      let iter = 0
   intervalI = await setInterval(async ()=>{
        iter+=iterations;
        if (iter >=finalText.length) return clearInterval(intervalI);
        await initialTextStateFun(()=>{return finalText.split("").
        map((x,i)=>{if(i<iter){
        return finalText[i]}
        else return letters[Math.floor(Math.random()*26)]
  })
    .join("")
  })
  
  },time)
  }