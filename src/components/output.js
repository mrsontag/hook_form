import React from 'react';


const Output = props => {
    const { label, value } = props;

    
    return (
        <div className="inputbox">
            <p>{label}: { value } </p>
        </div>
    );

}

export default Output;