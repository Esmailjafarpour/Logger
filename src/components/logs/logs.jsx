import React ,{ useState,useEffect } from 'react';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';

function Logs() {

    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getLogs();
    }, []);

    const getLogs = async () => {
        setLoading(true)
        const res = await fetch('/logs');
        const data = await res.json();
        setLogs(data);
        setLoading(false)
    }


    if(loading) {
        return <Preloader/>
    }

    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
            </li>

            {!loading && logs.lenght === 0 ? 
                (<p className="center">No Logs to show ...</p>)
                :
                (logs.map((log) => <LogItem log={log} key={log.id} />))
            }

        </ul>
    );
  }
  
  export default Logs;