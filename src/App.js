import * as React from 'react';
import {render} from 'react-dom';//import just this pack
import { Router } from "@reach/router";
//import ReactDOM from 'react-dom //
import SearchParams from "./SearchParams";


const App = () => {
    return (
        <React.StrictMode>
        <div>
            <h1 id="important">Adopt Me!</h1>
            <SearchParams/>
        </div>
        </React.StrictMode>
    );
};

render(<App/>,
    document.getElementById("root"));