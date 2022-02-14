import React, {useEffect, useState} from 'react';

import {useDispatch} from "react-redux";
import {requestIssues} from "../utils";
import {updateIssues, updatePageParams} from "../ReduxStore/issuesSlice";

import '../App.css';
import LoadingPage from "./LoadingPage";

function ScreensWrapper({children}) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        requestIssues().then((resp) => {
                dispatch(updateIssues(resp.data))
                dispatch(updatePageParams(resp.pageParams))
                setLoading(false);
            }
        )
    }, [])
    return (
        <div>
            {loading ?
                <LoadingPage/>
                :
                <div>
                    {children}
                </div>
            }
        </div>
    );
}

export default ScreensWrapper;