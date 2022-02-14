import React from 'react';
import Select from "react-select";


function Filter({filterName,dataArray, stateSetter}){
    return(
        <div className="filter">
            <div className="filter-name">{filterName}</div>
            <Select
                defaultValue={dataArray[0]}
                options={dataArray}
                onChange={(selectedData) => stateSetter(selectedData.value)}
            />
        </div>
    )
}

export default Filter;