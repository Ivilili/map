import { Component } from 'react';

import './Sidebar.css';

class ToggleBtn extends Component {
	state = {
		open: false
	};

	toggleMenu = () => {
		this.setState((prevState) => ({
			open: !prevState.open
		}));
	};

	render() {
		const { children } = this.props;
		return children({
			open: this.state.open,
			toggleMenu: this.toggleMenu
		});
	}
}

export default ToggleBtn;
