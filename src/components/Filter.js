import React from 'react';

const FilteredList = (props) => {
	const completedList = props.locations.filter((e) => {
		return e.properties.title.toLowerCase().indexOf(props.search.toLowerCase()) !== -1;
	});
	return (
		<div className="filter">
			<ul>{completedList.map((value, index) => <li key={index}>{value.properties.title}</li>)}</ul>
		</div>
	);
};

export default FilteredList;
