import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.article`
	width: 100%;
`;

export const Title = styled.div`
	width: 100%;
	background: linear-gradient(46deg, #e7f0ff 0%, transparent 100%);
	padding: 1rem 0.5rem;
`;

export const TitleWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin: 0 auto;
	height: 100%;
	width: 100%;
	max-width: 800px;

	&> h1 {
		font-family: Poppins;
		font-size: 2.5rem;
		color: #393954;
		font-weight: bolder;
	}

	@media screen and (max-width: 680px) {
		flex-direction: column;
		padding-bottom: 1rem;

		&> h1 {
			text-align: center;
		}
	}
`;

export const Tag = styled(Link)`
	text-transform: lowercase;
	text-decoration: none;
	padding: 2px 3px;
	border-radius: 3px;
	background: white;
	border: 1px solid whitesmoke;
	box-shadow: 0px 0px 1px 1px rgba(0,0,0,.1);
	color: dodgerblue;
	transition: all 150ms linear;

	&:hover {
		background: dodgerblue;
		color: white;
		border-color: dodgerblue;
		box-shadow: 0px 0px 1px 1px rgba(30,144,255,0.5);
	}
`;

export const Content = styled.section`
	position: relative;

	margin-top: -6px;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
	border-bottom: 1px dotted dodgerblue;

	box-shadow: 1px 1px 5px 5px rgba(30,144,255,0.2);

	padding: 2rem;

	width: 100%;

	&:before {
		content: '';
		position: absolute;
		top: -5px;
		left: 0;
		width: 100%;
		height: 10px;
		background: #676f79;
	}
`;

export const Text = styled.p`
	width: 100%;
	max-width: 800px;
	margin: 0 auto;
	font-family: 'Noto Sans JP', sans-serif;
`;

