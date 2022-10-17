import React , {useState,useEffect} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addLogs} from '../action/logAction';
 


const AddLogModal = ({addLogs}) => {

    const [message, setMassege] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        getTechs();
    },[]);

    const getTechs = async () => {
        // setLoading(true)
        const res = await fetch('/techs');
        const data = await res.json();
        setTechs(data);
       
    }

    const onSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({html:"Please Enter a Message and Tech"})
        } else {
            // console.log(message,attention,tech)
            const newLog = {
                message,
                attention,
                tech,
                date : new Date()
            }
            addLogs(newLog);
            M.toast({html:`Log added by ${tech}`})
            setMassege('');
            setAttention(false);
            setTech('');
        }
        
    }

    return(
        <div className="modal" id="add-log-modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input 
                            placeholder="Enter Log ..."
                            type="text"
                            name="message"
                            value={message}
                            onChange={e => setMassege(e.target.value)}
                        />
                        <label htmlFor="message" className="active">Log Message</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select 
                            name="tech" 
                            value={tech} 
                            className="browser-default"
                            onChange={e => setTech(e.target.value)}
                        >
                            <option value="" disabled>Select Technician</option>
                            {techs.map(tech => (
                            <option value={tech.firstName + ' ' + tech.lastName} key={tech.id}>
                                {tech.firstName + ' ' + tech.lastName}
                            </option>
                            ))}
                            
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input 
                                    type="checkbox"
                                    className="filled-in"
                                    checked={attention}
                                    value={attention}
                                    onChange={e => setAttention(!attention)}
                                />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a 
                    href="#!"
                    onClick={onSubmit}
                    className="modal-close waves-effect waves-light btn"
                >
                    Enter
                </a>
            </div>
        </div>
    )
}

AddLogModal.propsTypes = { 
    addLog : PropTypes.object.isRequired,
}


const modalStyle = {
    width : '75%',
    height : '75%'
}

export default connect(null,{addLogs})(AddLogModal);