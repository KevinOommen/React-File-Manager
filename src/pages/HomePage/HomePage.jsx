import React from 'react';
import NavigationComponent  from '../../components/HomePageComponents/Navigation';

const HomePage = () => {
    return (
        <div>
            <NavigationComponent />
            <h1 className='display-1 text-center mt-5'>Welcome to React File Manager</h1>
        </div>
    )
}

export default HomePage;