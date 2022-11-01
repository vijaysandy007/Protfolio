import React from "react";
import {Outlet} from 'react-router-dom';
import './layout.scss'

const LayoutComponent = () =>{
    return (
        <div className="testing">
            <Outlet />
            
        </div>
    )
}

export default LayoutComponent