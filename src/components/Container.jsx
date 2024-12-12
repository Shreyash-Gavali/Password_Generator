import {useState,useEffect,useRef} from 'react';
export default function Container()
{
    const numbers = [0,1,2,3,4,5,6,7,8,9]
    const specialChars = ['!','@','#','$','%','^','&','*','(',')','-','_',"+","="]
   let currentLength = useRef();
   const [length,setLength] = useState(10);
   const [charAllowed,setChar] = useState(false);
   const [numbersAllowed,setNumbers] = useState(false);
   
   function changeLength()
   {
     setLength(currentLength.current.value)
   }
   function changeChar()
   {
        setChar(true)
    console.log("Char value is"+charAllowed)
   }
   function changeNum()
   {
            setNumbers(true)
        console.log("Num value is"+numbersAllowed)
    
   }
    const [pass,setPass] = useState('');
   useEffect(()=>{

    
   },[length,charAllowed,numbersAllowed])
    console.log(currentLength)
    return(
        <div className=" w-5/12 rounded-md h-102 mt-20 flex flex-col justify-center items-center bg-white">
            <input type="text" 
            className="border border-purple-500 rounded-sm w-[inherit] h-12 outline-purple-500 text-slate-950 indent-6 text-xl mt-10 font-[Poppins]"
            id="passIPBox"
            readOnly={true}
            value={pass}
            placeholder='Password '
            ></input>
            <div className='flex justify-center items-center flex-col mt-5'>    
            </div>
            <div className='mt-2 mb-3 flex flex-row justify-center items-center'>
                <label className='text-xl me-5 font-[Poppins]'>Length : {length}</label>
            <input type="range" min={0} max={20} id="length" ref={currentLength} onChange={changeLength} value={length}
            className=' h-20 me-4 ' 
            
            >
            </input>
            <label htmlFor="char"
            className="text-xl font-[Poppins]"
            >Special Characters</label>
            <input type="checkbox" 
            className='ms-4 h-20 w-5'
            id="char"
            onChange={changeChar}
            ></input>
            <label htmlFor="num" className='ms-4 text-xl font-[Poppins]'>Numbers</label>
            <input type="checkbox" id="num" onChange={changeNum}
            className='ms-4 h-20 w-5'
            ></input>
        </div>
        <button type="button"
        className="bg-green-600 mt-2 mb-2 border border-slate-950 w-52 h-10 text-white rounded-2xl text-xl font-['Poppins'] border border-white"
        >Generate</button>
        </div>
    )
}