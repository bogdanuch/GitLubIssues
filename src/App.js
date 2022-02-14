import React from 'react';
import {Provider} from 'react-redux';

import {store} from './ReduxStore/store';
import IssuesList from './components/IssuesList';
import ScreensWrapper from './components/ScreensWrapper';

const App = () => {
    return (
        <Provider store={store}>
            <ScreensWrapper>
                <IssuesList/>
            </ScreensWrapper>
        </Provider>
    );
}

export default App