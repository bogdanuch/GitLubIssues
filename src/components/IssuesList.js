import React, {useEffect, useState} from 'react';

import {  useDispatch, useSelector } from 'react-redux';

import '../App.css';
import {issueStates, timeVariables, requestIssues} from "../utils";
import IssueBox from "./IssueBox";
import {updateIssues, updatePageParams} from "../ReduxStore/issuesSlice";
import Filter from "./Filter";
import PageSelector from "./PageSelector";

function IssuesList() {
    const dispatch = useDispatch();
    const issues = useSelector((state)=>state.slice.issues)
    const pageParams = useSelector((state)=>state.slice.pageParams)
    const [issuesState, setIssuesState] = useState(undefined);
    const [createdBefore, setCreatedBefore] = useState(undefined);
    const [createdAfter, setCreatedAfter] = useState(undefined);
    const [updatedBefore, setUpdatedBefore] = useState(undefined);
    const [updatedAfter, setUpdatedAfter] = useState(undefined);
    const makeRequest = (page) =>{
        requestIssues(page,issuesState, createdAfter, createdBefore, updatedAfter, updatedBefore).then((resp)=>{
                dispatch(updateIssues(resp.data))
                dispatch(updatePageParams(resp.pageParams))
        })
    }
    useEffect(()=>{
        makeRequest('1');
    },[issuesState, createdBefore, createdAfter, updatedAfter, updatedBefore])

    return (
        <div className='issue-page'>
            <h1>Issues list</h1>
            <PageSelector pageParams={pageParams} setNewPage={makeRequest}/>
            <div className='filters'>
                <Filter filterName='State' dataArray={issueStates} stateSetter={setIssuesState}/>
                <Filter filterName='Created before' dataArray={timeVariables} stateSetter={setCreatedBefore}/>
                <Filter filterName='Created after' dataArray={timeVariables} stateSetter={setCreatedAfter}/>
                <Filter filterName='Updated before' dataArray={timeVariables} stateSetter={setUpdatedBefore}/>
                <Filter filterName='Updated after' dataArray={timeVariables} stateSetter={setUpdatedAfter}/>
            </div>
            <div className='list-wrapper'>
                {issues.length!==0 && issues.map((issue) => (
                    <div key={issue.id}>
                        <IssueBox issue={issue}/>
                    </div>
                ))}
            </div>
            {issues.length>9 && <PageSelector pageParams={pageParams} setNewPage={makeRequest}/>}
        </div>
    );
}

export default IssuesList;