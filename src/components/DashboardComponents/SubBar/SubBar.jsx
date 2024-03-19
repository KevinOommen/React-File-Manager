import './SubBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileUpload} from '@fortawesome/free-solid-svg-icons/faFileUpload';
import React from 'react';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';
const SubBar = () => {
return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>        
            <p className='ms-5 small'>Root</p>
           <ul className='navbar-nav ms-auto'>
                <li className='nav-item mx-2'>
                    <button className="btn btn-outline-dark">
                    <FontAwesomeIcon icon={faFileUpload} /> &nbsp;Upload File
                    </button>
                </li>
                <li className='nav-item mx-2'>
                    <button className="btn btn-outline-dark">
                     <FontAwesomeIcon icon={faFileAlt} /> &nbsp;Create File
                    </button>
                </li>
                <li className='nav-item mx-2'>
                    <button className="btn btn-outline-dark">
                    <FontAwesomeIcon icon={faFolderPlus} /> &nbsp;Create Folder</button>
                </li>
            </ul>
        </nav>
    )
}

export default SubBar;