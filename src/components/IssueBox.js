import React, {useState} from 'react';
import '../App.css';
import {Accordion, AccordionDetails, AccordionSummary, TextareaAutosize} from "@mui/material";
import CreationInfo from "./CreationInfo";
import ListInfo from "./ListInfo";

const maxTitleLength = 126;
const accordionSummaryStyle = {backgroundColor: '#2d333b', color: '#adbac7'}

function IssueBox({issue}) {
    const [expanded, setExpanded] = useState(false);
    return (
        <Accordion className="list-item" onChange={() => setExpanded(!expanded)}>
            <AccordionSummary className={!expanded ? 'summary' : 'active-summary '} sx={accordionSummaryStyle}>
                <h4 style={{width: '56vw', textAlign: 'left'}}>{issue.title.length > maxTitleLength && !expanded
                    ? issue.title.substring(0, maxTitleLength - 3) + '...'
                    : issue.title}</h4>
                <h4 className='summary-id'>Issue Id: {issue?.iid}</h4>
            </AccordionSummary>
            <AccordionDetails className='accordion-details'>
                <TextareaAutosize
                    value={issue.description ? `${issue.description}` : 'There is no description to this Issue'}
                    maxRows={35}
                    className='issue-description'
                    disabled={true}
                />
                <CreationInfo issue={issue}/>
                <div className='issue-details'>
                    <ListInfo showedParamName={'Estimated time usage:'} paramValue={issue.time_stats.time_estimate}/>
                    <ListInfo showedParamName={'Total time spend:'} paramValue={issue.time_stats.total_time_spent}/>
                </div>
            </AccordionDetails>
        </Accordion>
    );
}

export default IssueBox;