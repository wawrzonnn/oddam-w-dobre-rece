import React from 'react'
import Home from './components/Home'
import OurHelp from './components/OurHelp/OurHelp'
import Contact from './components/Contact/Contact'
import { HashRouter, Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './components/Login/Login'

function App() {
	return (
		<>
			{/* <HashRouter> */}
			{/* <BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />}>
						<Route path='/logowanie' element={<Login />} />
					</Route> */}
					<Home /> {/* usunac */}
					<OurHelp />
					<Contact />
				{/* </Routes>
			</BrowserRouter> */}
			{/* </HashRouter> */}
		</>
	)
}

export default App
