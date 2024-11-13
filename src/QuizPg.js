import {useState, useEffect} from 'react';



const QuizPg = ({genre, bg, questions, setActivate,diff, set_Diff, dd, diffAnchor}) => {
    
    let Diff = parseInt(diff)
    let countdown
    let timeUp
    let [i, set_i] = useState(Math.floor(Math.random() * 4)) // The overall controller
    let [a, set_a] = useState(questions[Diff][i].opt1)
    let [b, set_b] = useState(questions[Diff][i].opt2)
    let [c, set_c] = useState(questions[Diff][i].opt3)
    let [d, set_d] = useState(questions[Diff][i].opt4)
    setTimeout(()=>{
        document.querySelector('.quiz').style.opacity = '1'
    }, 2000)
    
    const catSelect = ()=>{
        document.querySelector('body').style.overflowY = 'hidden'
        document.querySelector('.quiz').style.transform = 'translate(0 ,100%)'

        setTimeout(()=>{
            document.querySelector('.landBg').style.display = 'flex'
            document.querySelector('.landBg').style.transform = 'translate(0, 0)'
            document.querySelector('.landBg').classList.add('landBack')
            
            setTimeout(()=>{
                document.querySelector('body').style.overflowY = 'visible'
                document.querySelector('.landBg').classList.remove('landBack')
                setActivate(false)
            },1000)
            
        }, 3000)
        

        
    }

    const redo = () =>{
        document.querySelector('.redo').style.animation = 'pick 0.7s ease 0s 1 normal forwards'
        set_Diff(diffAnchor)
       
        setTimeout(()=>{
            document.querySelector('.quiz').style.opacity = '0'
            setTimeout(()=>{
                setActivate(false)
                setTimeout(()=>{
                    setActivate(true)
                }, 500)
            }, 1000)
            
        }, 1000)
        
        
    }

    const [seconds, setSeconds] = useState(30);

    const [startCountdown, setStartCountdown] = useState(false); // New state for the condition
  
    // This useEffect starts the countdown when 'startCountdown' becomes true
    useEffect(() => {
      if (startCountdown) {
        countdown = setInterval(() => {
          if (seconds > 0) {
            setSeconds(seconds - 1);
          }
          
        }, 1000);
        
  
        // Clear the interval when the component unmounts or when the condition changes
        return () => clearInterval(countdown);
      }
    }, [startCountdown, seconds]);
    
    if(seconds == 0){
        // alert("Time")
        timeUp = true
      }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
  
    // Replace this with your actual condition
    let conditionToStartCountdown; // Replace with your condition logic
    if(Diff == 3){
        conditionToStartCountdown = true;
    }
    
  
    useEffect(() => {
      // Check your condition here and set 'startCountdown' accordingly
      
      if (conditionToStartCountdown) {
        setStartCountdown(true);
        document.querySelector(".timeBox").style.color = 'black'
        document.querySelector('.timeBox').style.animation = 'timeShake 0.5s ease 0s infinite normal forwards'
        document.querySelector(".timerActive").style.visibility = 'visible'
        document.querySelector(".timerActive").style.opacity = '1'
        document.querySelector(".timerActive").classList.add('announce')
      setTimeout(()=>{
            
        // document.querySelector(".timerActive").style.opacity = '0'
        document.querySelector(".timerActive").style.visibility = 'hidden'
        // document.querySelector(".timerActive").classList.remove('announce')
    }, 2000)
      }
    }, [conditionToStartCountdown]);
  

    
    

    ////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////   questions AND OPTIONS DISPLAY LOGIC   ////////////////////////
    
    let rd = Math.round(Math.random() * 10) // Used to randomise the options that are displayed
    let i_check // Ensures the same question isn't repeated
    let [qCount, setQCount] = useState(1)  // Lets the program keep track of how many questions answered
    
    
    let [points, setPoints] = useState(0) // Used to keep track of the points gained


    
    let [qBoxDisplay, setqBoxDisplay] = useState(questions[Diff][i].q)
    let rank

    let [streak, setStreak] = useState(1)

    const check = (choosen) => {
        document.querySelectorAll('.ansBox').forEach((box)=>{box.style.pointerEvents = 'none'})
        if(choosen == questions[Diff][i].a){
            setStreak(streak + 1)
            switch(choosen){
                case a:{
                    set_a('CORRECT!')
                    document.querySelectorAll('.ansBox')[0].classList.add('Gverdict')
                    break}
                case b:{
                    set_b('CORRECT!')
                    document.querySelectorAll('.ansBox')[1].classList.add('Gverdict')
                    break}
                case c:{
                    set_c('CORRECT!')
                    document.querySelectorAll('.ansBox')[2].classList.add('Gverdict')
                    break}
                case d:{
                    set_d('CORRECT!')
                    document.querySelectorAll('.ansBox')[3].classList.add('Gverdict')
                    break}
            }
            // setqBoxDisplay('CORRECT!')
            setPoints((points)=>(points+10))
            questions[Diff][i].check = 'answered'

            setTimeout(()=>{
                
                i_check = Math.floor(Math.random() * questions[Diff].length)

                document.querySelectorAll('.ansBox').forEach((item)=>{item.classList.remove('Gverdict')})
                
                while(true){
                    if((streak == 3 || points == 20) && Diff != 3 && dd == 'On'){
                        set_Diff(Diff + 1)
                        document.querySelector('.focus').style.visibility = 'visible'
                        document.querySelector('.focus').classList.add('focusRank')
                        setTimeout(()=>{
                            document.querySelector('.focus').style.visibility = 'hidden'
                            document.querySelector('.focus').classList.remove('focusRank')
                        }, 2500)
                        setStreak(1)
                    }
                    if(qCount >= questions[Diff].length - 1){
                        qCount = questions[Diff].length - 1
                        set_i(qCount)
                        break
                    }
                    if(questions[Diff][i_check].check == 'answered' ||  questions[Diff][i_check].id == 'last'){
                        i_check = Math.floor(Math.random() * questions[Diff].length)
                    }else{
                        set_i(i_check)
                        setQCount(qCount + 1)
                        break
                    }
                    
                    
                    
                }
                document.querySelectorAll('.ansBox').forEach((box)=>{box.style.pointerEvents = 'all'})
            }, 2000)
        }
        else{
            setStreak(1)
            switch(choosen){
                case a:{
                    set_a('WRONG!')
                    document.querySelectorAll('.ansBox')[0].classList.add('Bverdict')
                    break}
                case b:{
                    set_b('WRONG!')
                    document.querySelectorAll('.ansBox')[1].classList.add('Bverdict')
                    break}
                case c:{
                    set_c('WRONG!')
                    document.querySelectorAll('.ansBox')[2].classList.add('Bverdict')
                    break}
                case d:{
                    set_d('WRONG!')
                    document.querySelectorAll('.ansBox')[3].classList.add('Bverdict')
                    break}
            }
            setTimeout(()=>{
                let box = document.querySelectorAll('.ansBox')
                if(a == questions[Diff][i].a){
                    // console.log('hello')
                    box[0].classList.add('correction')}
                else if(b == questions[Diff][i].a){
                    box[1].classList.add('correction')
                }else if(c == questions[Diff][i].a){
                    box[2].classList.add('correction')
                }else if(d == questions[Diff][i].a){
                    box[3].classList.add('correction')
                }
            }, 1200)
            
            // setqBoxDisplay('WRONG!')
            questions[Diff][i].check = 'answered'

            setTimeout(()=>{

                i_check = Math.floor(Math.random() * questions[Diff].length)

                document.querySelectorAll('.ansBox').forEach((item)=>{item.classList.remove('Bverdict');
                item.classList.remove('correction')})
                while(true){
                    if(questions[Diff][i_check].check == 'answered' ||  questions[Diff][i_check].id == 'last'){
                        i_check = Math.floor(Math.random() * questions[Diff].length)
                    }else{
                        set_i(i_check)
                        setQCount(qCount + 1)
                        break
                    }
                    
                    if(qCount == questions[Diff].length - 1){
                        set_i(qCount)
                        break
                    }
                }
                document.querySelectorAll('.ansBox').forEach((box)=>{box.style.pointerEvents = 'all'})
            }, 3200)
        }
        
    }
    useEffect(() =>{
        
        if(questions[Diff][i].id == 'last' || timeUp == true){
            if(points == 70 && dd == 'On' && diffAnchor == 2){
                setqBoxDisplay(<>👑<br/>PERFECT!!!</>)
                document.querySelector('.questionBox').classList.add('perfect')
            }
            else if(points == 70 && dd == 'On' && diffAnchor < 2){
                setqBoxDisplay('PERFECT!!!')
            }
            else if(points == 70 && dd != 'On'){
                setqBoxDisplay('AWESOME!')
            }
            else if(points < 40){
                switch(genre){
                    case 'anime': setqBoxDisplay("Surely this isn't your strongest performance...")
                    break
                    case 'games': setqBoxDisplay("Game over...")
                    break
                    case 'general': setqBoxDisplay("Generally speaking, your didn't do too well...")
                    break
                }
            }
            else{
                setqBoxDisplay('~ END ~')
            }
            
            document.querySelectorAll('.ansBox').forEach((box)=>{box.style.pointerEvents = 'none'; box.style.color = 'transparent';})
            setStartCountdown(false);
            clearInterval(countdown);
            document.querySelector('.timeBox').style.animation = 'timeShake 0.5s ease 0s 0 normal forwards'
            
            
            setTimeout(()=>{
                document.querySelector('.score').setAttribute('id','scoreMove')
                
            }, 1000)

            setTimeout(()=>{
                document.querySelector('.menuBox').style.display = 'flex'
            }, 2000)
            
            
        }
        else{
            setqBoxDisplay(questions[Diff][i].q)
        }
        switch(rd){
            case 0:{
                set_a(questions[Diff][i].opt1)
                set_b(questions[Diff][i].opt4)
                set_c(questions[Diff][i].opt3)
                set_d(questions[Diff][i].opt2)
                break
            }
            case 1:{
                
                set_a(questions[Diff][i].opt3)
                set_b(questions[Diff][i].opt4)
                set_c(questions[Diff][i].opt1)
                set_d(questions[Diff][i].opt2)
                break
            }
            case 2:{
                
                set_a(questions[Diff][i].opt4)
                set_b(questions[Diff][i].opt3)
                set_c(questions[Diff][i].opt2)
                set_d(questions[Diff][i].opt1)
                break
            }
            case 3:{
                
                set_a(questions[Diff][i].opt3)
                set_b(questions[Diff][i].opt2)
                set_c(questions[Diff][i].opt1)
                set_d(questions[Diff][i].opt4)
                break
            }
            case 4:{
                set_a(questions[Diff][i].opt1)
                set_b(questions[Diff][i].opt4)
                set_c(questions[Diff][i].opt3)
                set_d(questions[Diff][i].opt2)
                break
            }
            case 5:{
                set_a(questions[Diff][i].opt3)
                set_b(questions[Diff][i].opt4)
                set_c(questions[Diff][i].opt1)
                set_d(questions[Diff][i].opt2)
                break
            }
            case 6:{
                set_a(questions[Diff][i].opt4)
                set_b(questions[Diff][i].opt3)
                set_c(questions[Diff][i].opt2)
                set_d(questions[Diff][i].opt1)
                break
            }
            case 7:{
                
                set_a(questions[Diff][i].opt3)
                set_b(questions[Diff][i].opt2)
                set_c(questions[Diff][i].opt1)
                set_d(questions[Diff][i].opt4)
                break
            }
            case 8:{
                set_a(questions[Diff][i].opt4)
                set_b(questions[Diff][i].opt1)
                set_c(questions[Diff][i].opt3)
                set_d(questions[Diff][i].opt2)
                break
            }
            case 9:{
                set_a(questions[Diff][i].opt2)
                set_b(questions[Diff][i].opt3)
                set_c(questions[Diff][i].opt4)
                set_d(questions[Diff][i].opt1)
                break
            }
            default:{
                
                set_a(questions[Diff][i].opt4)
                set_b(questions[Diff][i].opt1)
                set_c(questions[Diff][i].opt3)
                set_d(questions[Diff][i].opt2)
            }
            
        }
        
    }, [i, timeUp])


    let title = genre.toUpperCase()
    switch(Diff){
        case 0: rank = 'Easy'
        
        break
        case 1: rank = 'Medium';
        // alert('hii')
        
        break
        case 2: rank = 'Hard'
        
        break
        case 3: rank = 'SUPER!'
    }
    
    return (
        <>

            <div className="w-[100%] relative bg-white quiz" style={{opacity: 0, transition: '1s',height: '100vh', overflowY: 'hidden'}}>
                
                {/* ////////////////////////////   TITLE BOX   ////////////////////////////// */}
                <div style={{ color: 'white',}} 
                className="w-[100%] h-[13.76vh] border-b-8 border-stone-300 centerText title relative z-30">
                    
                    {title}
                </div>
                
                
                {/* ////////////////////////////   QUESTION BOX   //////////////////////////// */}
                <div className="w-[100%] h-[27.34vh] centerText relative z-30 questionBox">
                    {qBoxDisplay}
                    <div id='rank' className='centerText rounded-tr-[15px] rounded-br-[15px]'>
                        {rank}
                    </div>
                    <div className='focus'>
                        
                    </div>
                    <div className="timeBox centerText shadow-2xl absolute bg-zinc-300 rounded-tl-[15px] rounded-bl-[15px]">
                    { `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`}

                </div>

                </div>
            

                {/* ////////////////////////////   ANIMATED BG   //////////////////////////// */}
                <ul className="background" style={{background: bg}}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                </ul>

                {/* //////////////////////////////   OPTIONS   //////////////////////////////// */}
                <section className="w-[100%] h-[58.9vh] relative z-30 ansArea" 
                style={{display: 'flex',justifyContent: 'center', alignItems: 'center',
                backgroundColor: 'transparent', zIndex:'5'}}>
                    <div className=" h-[80%] ansBoxParent">
                        <button className="   rounded-[10px] shadow-2xl ansBox ansBoxHover centerText" onClick={()=>{check(a)}} >
                            {a}
                        </button>
                        <button className="   rounded-[10px] shadow-2xl ansBox ansBoxHover centerText" onClick={()=>{check(b)}}>
                            {b}
                        </button>
                        <button className="   rounded-[10px] shadow-2xl ansBox ansBoxHover centerText" onClick={()=>{check(c)}}>
                            {c}
                        </button>
                        <button className="   rounded-[10px] shadow-2xl ansBox ansBoxHover centerText" onClick={()=>{check(d)}}>
                            {d}
                        </button>
                    </div>
                    
                </section>



                

                
                        
                <div className=" absolute z-10 score centerText">
                    {points}/70
                </div>
                <div className="menuBox">
                    <button className="catSelect menu" onClick={catSelect}>
                        Category select
                    </button>
                    
                    <button className="redo menu" onClick={redo}>
                        Redo
                    </button>
                </div>

                
                <div className='timerActive centerText'>
                    Timer is now Active!!!
                </div>
                </div>
        
            
           
        </>
     );
}
 
export default QuizPg;