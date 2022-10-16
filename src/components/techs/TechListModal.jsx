import React ,{ useState,useEffect } from 'react';
import TechItem from './TechItem';
import {connect} from 'react-redux';
import {deleteTech} from '../action/logAction';

function TechListModal({idTech,deleteTech}) {

    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(idTech !== false){
            getTechs();
        }
    
    }, [idTech]);

    const getTechs = async () => {
        setLoading(true)
        const res = await fetch('/techs');
        const data = await res.json();
        setTechs(data);
        setLoading(false)
        deleteTech(false)
    }


    return (
        <div className="modal" id="tech-list-modal">
            <div className="modal-content">
                <h4>Technecian List</h4>
                <ul className="collection">
                    {!loading && techs.map(tech => (
                        <TechItem tech={tech} key={tech.id}/>
                    ))}
                </ul>
            </div>
        </div>
    );
  }

  const mapStateToProps = (state) =>({
    idTech : state.log.idTech
  })
  
  export default connect(mapStateToProps,{deleteTech})(TechListModal);