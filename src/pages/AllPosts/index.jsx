import React from 'react';
import { nanoid } from 'nanoid';

// returns a lists with an object
// {
// element: ReactElement;
// topic: string;
// }
import posts from '../../posts';

import './styles.scss';

const AllPosts = () => {
	const a = Array(10).fill(0).map(_ => posts[0]);
	
	return (
		<main className="container_allposts">
			<section className="posts">
				{
					a.map((object) => {
						const Element = object.element;
						return (
							<Element key={nanoid()}/>
						);
					})
				}
				<span className="blur"></span>
			</section>
		</main>
	);
}

export default AllPosts;
