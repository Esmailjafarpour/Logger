import React , {useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import {connect} from 'react-redux';
import {addTech} from '../action/logAction.js';
import PropTypes from 'prop-types';


const AddTechModal = ({addTech}) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    
    const onSubmit = () => {
        if (firstName === '' || lastName === '') {
            M.toast({html:"Please Enter a FirstName and LastName"})
        } else {

            const newTech = {
                firstName,
                lastName
            }

            addTech(newTech);
            M.toast({html:"new Technician added"})
            setFirstName('');
            setLastName('');
        }
        
    }

    return(
        <div className="modal" id="add-tech-modal">
            <div className="modal-content">
                <h4>Add Technecian</h4>
                <div className="row">
                    <div className="input-field">
                        <input 
                            placeholder="Enter Log ..."
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />
                        <label htmlFor="firstName" className="active">First Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input 
                            placeholder="Enter Log ..."
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />
                        <label htmlFor="lastName" className="active">Last Name</label>
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


AddTechModal.propsTypes = { 
    addTech : PropTypes.func.isRequired,
  }

export default connect(null,{addTech})(AddTechModal);