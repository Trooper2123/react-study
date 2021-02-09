import * as React from 'react';
import {render} from 'react-dom';//import just this pack
//import ReactDOM from 'react-dom //
import SearchParams from "./SearchParams";


const App = () => {
    return (
        <div>
            <h1 id="important">Adopt Me!</h1>
            <SearchParams/>
        </div>
    );
};

render(<App/>,
    document.getElementById("root"));