import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { getFolders, deleteFolder } from '../../redux/actions/folderActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faFolder } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const HomeComponent=()=>{
     const folders = useSelector(state => state.folders);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getFolders());
    }, [dispatch]);
    const handleDelete = (id) => {
        dispatch(deleteFolder(id));
    }
    return (
        <div className='container mt-5'>
            <div className='row'>
                {folders.map(folder => (
                    <div className='col-md-3' key={folder._id}>
                        <div className='card'>
                            <div className='card-body'>
                                {folder.type === 'file' ? <FontAwesomeIcon icon={faFileAlt} size='5x' /> : <FontAwesomeIcon icon={faFolder} size='5x' />}
                                <h5 className='card-title'>{folder.name}</h5>
                                <button className='btn btn-danger' onClick={() => handleDelete(folder._id)}><FontAwesomeIcon icon={faTrash} /> Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default HomeComponent;