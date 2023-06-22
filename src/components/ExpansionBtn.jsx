import React, { useState } from 'react';

function ExpansionBtn({func, name}) {

    const [isActive, setIsActive] = useState(false);

    function toggleExpansion() {
        setIsActive(current => !current);
        func(name);
    }

    return(
        
        <div className='expansion-btn'>
            <div onClick={toggleExpansion} className={isActive ? 'expansion-btn__name active' : 'expansion-btn__name'} >{name}</div>
        </div> 
    );
};

export default ExpansionBtn;