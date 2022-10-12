import React , {useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';


const EditLogModal = () => {

    const [message, setMassege] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({html:"Please Enter a Message and Tech"})
        } else {
            console.log(message,attention,tech)
            setMassege('');
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
                            <option value="sara bagheri">sara bagheri</option>
                            <option value="mehdi Ahmadi">mehdi Ahmadi</option>
                            <option value="Ali Mohamadi">Ali Mohamadi</option>
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

const modalStyle = {
    width : '75%',
    height : '75%'
}

export default EditLogModal;