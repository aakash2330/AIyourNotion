export default function Glitch ({GlitchText}:{GlitchText:string}){


    const letters:string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval:any = null;


    function glitchfn(e:any){
        let iteration = 0;
        clearInterval(interval);
        interval = setInterval(() => {
          e.target.innerText = e.target.innerText
            .split("")
            .map((letter: any, index: number) => {
              if (index < iteration) {
                return e.target.dataset.value[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");
          if (iteration >= e.target.dataset.value.length) {
            clearInterval(interval);
          }
    
          iteration += 1 / 3;
        }, 30);
      };



    return (
        <>
        <h1 className="glitchText" data-value={GlitchText} onMouseEnter={(e)=>glitchfn(e)}>{GlitchText}</h1>
        </>
    )
}




// usage = >

{/* <Glitch GlitchText="Login"></Glitch> */}