import React from 'react';
import posts from '../../components/Posts';


function AllPosts() {

	return (
		posts.map((Post, id) => {
			return (
				<Post key={id}/>
			)
		})
	)
}

export default AllPosts;
