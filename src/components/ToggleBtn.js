import React from 'react';

import './Sidebar.css';

const ToggleBtn = (props) => {
	return (
		<button className="toggle-btn" onClick={props.toggleMenu}>
			&#9776;
		</button>
	);
};

export default ToggleBtn;
