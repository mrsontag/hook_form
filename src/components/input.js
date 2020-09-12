import React from 'react';


const Input = props => {
    const { type, id, name = id, label, defval = "", setValue } = props;

    
    return (
        <div className="inputbox">
        <label className="inputlabel" htmlFor={id} >{label}</label>
        <input className="input" onChange={ (e) => setValue(e.target.value) } type={ type } id={id} name={ name } defaultValue={defval}/>
        </div>
    );

}

export default Input;