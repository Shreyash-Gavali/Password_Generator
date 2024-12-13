import {useState,useEffect,useRef} from 'react';
import CopyBtn from './CopyBtn'
export default function Container()
{
  
   let currentLength = useRef();
   let num = useRef();
   let char = useRef();
   const [length,setLength] = useState(5);
   const [charAllowed,setChar] = useState(false);
   const [numbersAllowed,setNumbers] = useState(false);
   
   function changeLength()
   {
     setLength(currentLength.current.value)
   }
   function changeChar()
   {
    let val = char.current.checked;
    setChar(val)
    console.log("Char value is"+charAllowed)
   }
   function changeNum()
   {
            let val = num.current.checked;
            setNumbers(val)
    }

    const [pass,setPass] = useState('');
   useEffect(()=>{
    const numbers = [0,1,2,3,4,5,6,7,8,9]
    const specialChars = ['!','@','#','$','%','^','&','*','(',')','-','_',"+","="]
    const characters = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"
    ]
    let pass = "";
    
        for(let i=0 ;i<length;i++)
        {
            if(charAllowed === true && numbersAllowed === false)
            {
                let randSpecialChar = specialChars[Math.floor(Math.random()*specialChars.length)];
                let randChar = characters[Math.floor(Math.random()*characters.length)];
               pass+=randSpecialChar + randChar;
               if(pass.length > length)
                {
                    pass = pass.slice(length-pass.length);
                }
                else if(length === 1)
                    {
                        pass=pass+randSpecialChar
                    }
                
            }
            else if(numbersAllowed===true && charAllowed === false)
            {
                let randNum = numbers[Math.floor(Math.random()*numbers.length)];
                let randChar = characters[Math.floor(Math.random()*characters.length)];
                pass +=randNum+randChar;
                if(pass.length > length)
                    {
                        pass = pass.slice(length-pass.length);
                    }
                    else if(length === 1)
                    {
                        pass=pass+randNum
                    }
            }
            else if(numbersAllowed === true && charAllowed === true && char.current.disabled===false && num.current.disabled ===false)
                {
               
                    let randNum = numbers[Math.floor(Math.random()*numbers.length)];
                    let randChar = characters[Math.floor(Math.random()*characters.length)];
                    let randSpecialChar = specialChars[Math.floor(Math.random()*specialChars.length)];
                    pass +=randNum+randChar+randSpecialChar
                    if(pass.length > length)
                        {
                    pass = pass.slice(length-pass.length);
                }
                else if(length === 1)
                    {
                        pass=pass.slice(-1)
                    }
                    
                console.log(pass)
            }
            else
            {
                
                console.log(characters)
                let randChar = characters[Math.floor(Math.random()*characters.length)];
              
                pass += randChar; 

            }
        }
        setPass(pass)
    
   },[length,charAllowed,numbersAllowed])
    // console.log(currentLength)
    return(
        <div className=" sm: w-[90vw]  md:w-[100vw] lg:w-6/12 xl: w-8/12 xxl: w-9/12 rounded-md  sm: h-90 md: h-92 lg:h-102 mt-20 flex flex-col justify-center items-center bg-white ">
            <input type="text" 
            className="sm: w-[70vw] border border-slate-700 rounded-md lg:w-6/12 h-12 outline-slate-700 text-slate-950   sm: indent-2 md:indent-3 lg:indent-6  md: text-md lg:text-xl mt-10 font-[Poppins] shadow-lg shadow-slate-700 md: w-8/12 sm: text-md"
            id="passIPBox"
            readOnly={true}
            value={pass}
            placeholder='Password '
            ></input>
            <CopyBtn pass={pass}/>
            <div className='flex justify-center items-center flex-col mt-5'>    
            </div>
            <div className='mt-2 mb-3 flex md: flex-col lg:flex-row justify-center items-center w-[inherit]'>
                <label className='sm: text-md md: text-lg lg:text-xl me-5 font-[Poppins]'>Length : {length}</label>
            <input type="range" min={1} max={20} id="length" ref={currentLength} onChange={changeLength} value={length}
            className=' sm:h-10 md: h-14 lg: h-20 me-4' 
            >
            </input>
            <label htmlFor="char"
            className="sm: text-md md: text-lg lg:text-xl font-[Poppins]"
            >Special Characters</label>
            <input type="checkbox" 
            className='ms-4 lg: h-20 md: w-4 h-4 lg: w-5 '
            id="char"
            onChange={changeChar}
            ref={char}
            disabled={length<2 ? true: false}
            ></input>
            <label htmlFor="num" className='ms-4  font-[Poppins] sm: text-md md: text-lg lg:text-xl '>Numbers</label>
            <input type="checkbox" id="num" onChange={changeNum} ref={num} 
            disabled={length<2 ? true : false}
            className='ms-4 h-20 w-5 dm: h-3 md: w-5 md: h-4 lg: w-5'
            ></input>
        </div>
        <h1 
        className='text-center font-[Poppins]'
        >Thank You For Using Password Generator Using React </h1>
        </div>
    )
}