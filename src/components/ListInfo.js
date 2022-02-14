import React from "react";

function ListInfo({showedParamName, paramValue}){
    return(
        <div className='list-info'>
            <h4 className='list-info-bold'>{showedParamName}</h4>
            {paramValue ?
                + paramValue :
                "hasn't been calculated"}
        </div>
    )
}

export default ListInfo