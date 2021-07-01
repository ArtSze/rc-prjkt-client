import React from 'react';
import Nav from './components/Nav';
import ProjectList from './components/ProjectList';

const App = (): JSX.Element => {
    return (
        <div>
            <h1>RC-Prjkt</h1>
            <Nav message={'message'} />
            <ProjectList />
        </div>
    );
};

export default App;
