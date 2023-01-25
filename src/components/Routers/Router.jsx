import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddInventorys } from '../Inventory/AddInventory'
import { Admim } from '../Inventory/Admin';
import { Settings } from '../Inventory/Settings';
import { Users } from '../Inventory/Users';
import { AuthRoute } from './AuthRoute'

export class Routess extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/addInventory" element={<AddInventorys />} />
                    <Route path="/" element={<Admim />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/users" element={<Users />} />
                </Routes>
                <ToastContainer />
            </Router>
        )
    }
}