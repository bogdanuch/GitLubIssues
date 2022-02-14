import axios from "axios";

const issueStates = [
    {value: undefined, label: '——'},
    {value: 'opened', label: 'opened'},
    {value: 'closed', label: 'closed'}
]

const nextPage = 'x-next-page';
const prevPage = 'x-prev-page';
const currentPage = 'x-page';

const currentTime = new Date();
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;

const ISODateDifference = (difference) =>{
    return new Date(currentTime - difference).toISOString();
}

const timeVariables = [
    {value: undefined, label: '——'},
    {value: ISODateDifference(10 * minute), label: '10 minutes ago'},
    {value: ISODateDifference(30 * minute), label: '30 minutes ago'},
    {value: ISODateDifference(hour), label: '1 Hour ago'},
    {value: ISODateDifference(6 * hour), label: '6 Hour ago'},
    {value: ISODateDifference( 12 * hour), label: '12 Hour ago'},
    {value: ISODateDifference(day), label: '1 Day ago'},
    {value: ISODateDifference(7 * day), label: '1 Week ago'},
    {value: ISODateDifference(30 * day), label: '1 Month ago'},
]

const requestIssues = async (
    page = '1',
    state = undefined,
    created_after = undefined,
    created_before = undefined,
    updated_after = undefined,
    updated_before = undefined,
) => {
    const resp = await axios({
        'method': 'GET',
        'url': `https://gitlab.com/api/v4/projects/${process.env.REACT_APP_PROJECT_ID}/issues`,
        params: {
            per_page: process.env.REACT_APP_ISSUES_ON_PAGE,
            page,
            state,
            created_after,
            created_before,
            updated_after,
            updated_before,
        }
    })
    console.log('resp', resp);
    return {
        data: resp.data,
        pageParams:{
            prevPage: resp.headers[prevPage],
            currentPage: resp.headers[currentPage],
            nextPage: resp.headers[nextPage],
        }
    }
}

export {requestIssues, issueStates, timeVariables}