import React , {useState,useEffect} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import {connect} from 'react-redux';
import {updateLog} from '../action/logAction';
import PropTypes from 'prop-types';


const EditLogModal = ({updateLog , current}) => {

    const [message, setMessege] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        getTechs()
        if (current) {
            setMessege(current.message);
            setAttention(current.attention);
            setTech(current.tech);
        }
    },[current]);

    const getTechs = async ()=>{
        const res = await fetch('/techs');
        const data = await res.json();
        setTechs(data);
    }

    const onSubmit = () => {
        if (message === '' || tech === ''){
            M.toast({html:"Please Enter a Message and Tech"})
        } else {
            const updtLog = {
                id : current.id,
                message,
                attention,
                tech,
                date : new Date()
            }

            updateLog(updtLog)
            M.toast({html:`Log update by ${tech}`})
            setMessege('');
            setAttention(false);
            setTech('');
        }
        
    }

    return(
        <div className="modal" id="edit-log-modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Edit System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input 
                            placeholder="Enter Log ..."
                            type="text"
                            name="message"
                            value={message}
                            onChange={e => setMessege(e.target.value)}
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
                            {techs.map(tech => 
                                <option value={`${tech.firstName +' '+tech.lastName}`}>
                                    {tech.firstName +' '+tech.lastName}
                                </option>
                            )}
                           
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
                    Update
                </a>
            </div>
        </div>
    )
}


EditLogModal.propsTypes = { 
    current : PropTypes.object,
    updateLog : PropTypes.func.isRequired,
  }

const mapStateToProps = (state) => ({
     current : state.log.current
})

const modalStyle = {
    width : '75%',
    height : '75%'
}

export default connect(mapStateToProps,{updateLog})(EditLogModal);