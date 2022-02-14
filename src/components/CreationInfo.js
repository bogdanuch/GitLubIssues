import React from "react";

function CreationInfo({issue}){
    return(
        <div className='issue-details'>
            <div className='list-info-bold'>
                Created at {new Date(issue.created_at).toUTCString()} {' '}
                by {issue.author.username ?
                <a href={issue.author.web_url}>
                    <img height={30} className='picture' src={issue.author.avatar_url} alt='author image'/>
                    {issue.author.username}
                </a> :
                'Unknown'}
            </div>
        </div>
    )
}
export default  CreationInfo