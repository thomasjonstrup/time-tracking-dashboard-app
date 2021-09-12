import React, { useState, useCallback } from "react";
import logo from "./logo.svg";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

import "./scss/style.scss";

function App() {
	const [tab, setTab] = useState("weekly");

	const handleChangeTab = useCallback((tab: string) => {
		setTab(tab);
	}, []);

	return (
		<div className="container">
			<div className="grid mt-10">
				<Header changeTab={handleChangeTab} tab={tab} />
				<Main tab={tab} />
			</div>
			<Footer />
		</div>
	);
}

export default App;
