import React from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from './Loading';

const ProtectedRoute = ({ element, userId }) => {
    if (!userId) {
        toast.error('Please login');
        return <Navigate to="/login" />;
    }   
    return element;
};

export default ProtectedRoute;
