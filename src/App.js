import './styles.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MyLists from './pages/MyLists';
import MyReminders from './pages/MyReminders';
import Login from './pages/Login';


function App() {
	return (
		<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="my_lists/" element={<MyLists  />} />
					<Route path="my_reminders/" element={<MyReminders />} />
				</Routes>
		</Router>
	);
}

export default App;
