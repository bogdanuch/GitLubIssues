import React from "react";

function PageSelector({pageParams, setNewPage}) {
    return (
        <div className='pages-menu'>
            {pageParams.prevPage && pageParams.prevPage !== '1' &&
                <div onClick={() => setNewPage('1')}  className='more-dots'>
                    . . .
                </div>
            }
            {pageParams.prevPage &&
                <div className='selectable-page' onClick={() => setNewPage(pageParams.prevPage)}>
                    {pageParams.prevPage}
                </div>
            }
            <div className='selected-page'>{pageParams.currentPage}</div>
            {pageParams.nextPage &&
                <div className='selectable-page' onClick={() => setNewPage(pageParams.nextPage)}>
                    {pageParams.nextPage}
                </div>
            }
            {pageParams.nextPage &&
                <div  className='more-dots'>
                    . . .
                </div>
            }
        </div>
    )
}

export default PageSelector