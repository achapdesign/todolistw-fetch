import React, { useState } from "react";

//include images into your bundle

import ToDoList from "./ToDoList.jsx";


//create your first component
const Home = () => {
	return (
		<>
			<ToDoList />
		</>
	);
};

export default Home;