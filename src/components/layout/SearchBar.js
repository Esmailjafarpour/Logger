import React ,{ useEffect,useRef } from 'react';
import {connect} from 'react-redux';
import {searchLogs} from '../action/logAction';
import PropTypes from 'prop-types';


function SearchBar({searchLogs}) {

    const text = useRef('');

    const onChange = (e) => {
        searchLogs(text.current.value)
    }

    return (
        <nav style={{marginBottom:'30px'}} className="blue">
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                    <input id="search" type="search" placeholder='Search Logs ...' onChange={onChange} ref={text}/>
                    <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                    <i className="material-icons">closee</i>
                    </div>
                </form>
            </div>
        </nav>
    );
  }

  SearchBar.propsTypes = { 
    searchLogs : PropTypes.func.isRequired,
  }
  
  export default connect(null,{searchLogs})(SearchBar);