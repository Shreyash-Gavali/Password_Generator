import {useState} from 'react'
export default function CheckBox(props)
{
    
    const [copy,CopyPressed] = useState('')
    function copyTextToClipboard()
    {
        try{
            navigator.clipboard.writeText(props.pass);
            window.alert('Password Copied Succesfully to Clipboard');
        }
        catch(error){
            console.error(error);
        }
    }
    return(
        <>
        <button type="button" className="bg-blue-500 text-white  w-3/12 h-10 rounded-md sm: text-md md: text-lg lg:text-xl mt-4" onClick={copyTextToClipboard}>Copy</button>
        </>
    )
}