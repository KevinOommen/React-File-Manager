//create a dashboard page in react
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import NavigationComponent from '../../components/HomePageComponents/Navigation';
import SubBar from '../../components/DashboardComponents/SubBar/SubBar';

const Dashboard = () => {

    const [isCreateFolderModalOpen, setIsCreateFolderModalOpen] = useState(false);  
    const isLoggedIn = useSelector(state => state.authReducer.isAuthenticated);
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);
    return (
        <>
        {
        isCreateFolderModalOpen && (
        <CreateFolder 
        setIsCreateFolderModalOpen={setIsCreateFolderModalOpen} />)
        }
        <NavigationComponent />
        <SubBar  
        setIsCreateFolderModalOpen={setIsCreateFolderModalOpen}/>

        </>
    );
};

export default Dashboard;