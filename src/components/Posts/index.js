import {
	Container,
	Title,
	Tag,
	TitleWrapper,
	Content,
	Text
} from './style.js';

function ReactPost1() {
	return (
		<Container>
			<Title>
				<TitleWrapper>
					<h1>React, Vai mudar o mundo?</h1>
					<Tag to="/">React</Tag>
				</TitleWrapper>
			</Title>
			<Content>
				<Text>
					Uma coisa é certa, se ele mudar, eu vou estar programando com ele,
		se não mudar, continuo programando com ele.
		Se caso aparecer algo diferente, ou que eu precise usar, usarei também!
		Acredito que um programador não pode se apegar à uma linguagem.
				</Text>
			</Content>
		</Container>
	);
}

const posts = [
	ReactPost1,
]

export default posts;
