import React, { useState } from 'react'; // 引用方法

const InputControl = () =>{

    const [inputValue, setInputValue] = useState('') // 記得要引用

    return(

        <div className="projuct_name">
            <h2>{inputValue}</h2>
            <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
            
        </div>


    )
    
    

}

export default InputControl;