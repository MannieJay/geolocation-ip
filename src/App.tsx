import React, { useState } from 'react';
import './Styles/App.css';
import ipRegex from 'ip-regex';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { postRequest } from './utilities';
import { City } from './types';
import { ResultCard } from './Components/ResultCard';

const BASE_URL = 'http://localhost:3001';

const App: React.FC = () => {
    const [validIP, setValidIP] = useState(true);
    const [ip, setIP] = useState('');
    const [ipSearchResults, setIpSearchResults] = useState<City>();
    const [responseError, setResponseError] = useState();

    const ipChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // ip from input
        const ip = event.currentTarget.value;
        // add ip to state
        setIP(ip);
        // add validity of ip to state
        setValidIP(ipRegex.v4({ exact: true }).test(ip));
        // reset error state
        setResponseError(undefined);
    };

    const performIpSearch = () => {
        postRequest(BASE_URL + '/locate-ipv4', JSON.stringify({ "ip": ip }))
            .then((res) => {
                res?.json()?.then((parsedResponse) => {
                    if (parsedResponse?.error) {
                        setResponseError(parsedResponse?.error);
                    }
                    console.log(parsedResponse);
                    setIpSearchResults(parsedResponse.data);
                });
            })
            .catch((e) => {
                console.error(e);
            });
    };

    return (
        <div className="app-container">
            <h3>
                SEARCH AN IP ADDRESS TO LOCATE ITS GEOGRAPHIC LOCATION
            </h3>
            <div className="input-container">
                <label className="input-label">
                    IP Address:
                </label>
                <div className="ip-input">
                    <TextField
                        variant="outlined"
                        color={validIP ? "success" : "warning"}
                        onChange={ipChangeHandler}
                        placeholder="xxx.xxx.xxx.xxx"
                        focused
                        inputProps={{ style: { color: "white", textAlign: "center", fontSize: "25px" } }}
                    />
                </div>
                <Button
                    onClick={performIpSearch}
                    color="success"
                    disabled={!validIP}
                    size="large"
                    variant="contained"
                    style={{ maxWidth: '100px', maxHeight: '68.94px', minWidth: '100px', minHeight: '68.94px' }}
                >
                    SEARCH
                </Button>
            </div>
            {responseError ? <div className="error-container">{responseError}</div> : <></>}
            {ipSearchResults ? <ResultCard ipSearchResults={ipSearchResults} />  : <div className="no-results-container" />}
        </div>
    );
}

export default App;
