import React from 'react';

import './styles.scss';

// header to put into posts
export default function HeaderPost({title, tag}) {
	return (
		<header className="container_header_unique">
			<h1 title="title post">{title}</h1>
			<button className="tag" title="tag">{tag}</button>
		</header>
	)
}
