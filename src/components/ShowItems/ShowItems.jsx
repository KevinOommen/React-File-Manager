//react component to show items

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faFolder } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, getItems } from '../../redux/actions/itemActions';
import './ShowItems.css';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const ShowItems = () => {
    const items = useSelector(state => state.itemReducer.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getItems());
    }, [dispatch]);
    const handleDelete = (id) => {
        dispatch(deleteItem(id));
    }
    return (
        <div className='container mt-5'>
            <div className='row'>
                {items.map(item => (
                    <div className='col-md-3' key={item._id}>
                        <div className='card'>
                            <div className='card-body'>
                                {item.type === 'file' ? <FontAwesomeIcon icon={faFileAlt} size='5x' /> : <FontAwesomeIcon icon={faFolder} size='5x' />}
                                <h5 className='card-title'>{item.name}</h5>
                                <button className='btn btn-danger' onClick={() => handleDelete(item._id)}><FontAwesomeIcon icon={faTrash} /> Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}