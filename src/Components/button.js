import React from "react";

import { Button } from 'react-bootstrap';

function ButtonComp({buttonText}){
    return(
        <Button className="all-btn">{buttonText}</Button>

    );
}

export default ButtonComp;