import React from 'react';

import Header from '../../../components/HeaderPost';
import Highlighter from '../../../components/Highlighter';

import '../globals.scss';

// this is the first post of my blog
export default function Fp() {
	const c1 = `// code example
for (let i = 0; i < 10; i++) {
	console.log(\`Test: [\${i}]\`);
} `;

	return (
		<main className="container_post">
			<Header title="Apresentação do blog" tag="react"/>
			<section className="content_post">
				<p className="text_post">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum labore ipsa obcaecati ea expedita error blanditiis esse ut illo laboriosam nisi earum odio aliquam molestias tempore recusandae, ratione sunt natus? <strong className="bold"> ola mundo</strong>
				</p>
				<p className="text_post">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum labore ipsa obcaecati ea expedita error blanditiis esse ut illo laboriosam nisi earum odio aliquam molestias tempore recusandae, ratione sunt natus?  <a href="#" className="link">here</a>
				</p>
				<p className="text_post">
					thi is a code
				</p>
					<Highlighter>
						{c1}
					</Highlighter>
			</section>
		</main>
	);
}
