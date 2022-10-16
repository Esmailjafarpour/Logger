import react from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deleteTech} from '../action/logAction';

const TechItem = ({tech,deleteTech}) => {
    return(
        <li className="collection-item">
            <div>
                {tech.firstName} {tech.lastName}
                <a href="#!" 
                    onClick={()=>{ deleteTech(tech.id)}} 
                    className="secondary-content">
                    <i className="material-icons grey-text">
                        delete
                    </i>
                </a>
            </div>
        </li>
    )
}


TechItem.propTypes = {
    tech : PropTypes.object.isRequired
}

export default connect(null,{deleteTech})(TechItem);