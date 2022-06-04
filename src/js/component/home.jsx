import React from "react";
import Counter from "./Counter.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState, useEffect } from "react";
import { func } from "prop-types";
import Clock from "../component/Clock.jsx";

//create your first componentrSec
const Home = () => {
	return (
		<div className="home-container">
			<Counter />
			<Clock></Clock>
		</div>
	);
};

export default Home;
