import Highlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './styles.css';

export default function Hljs({children}) {

	return (
		<Highlighter className="hljs" language="javascript" style={docco}>
			{children}
		</Highlighter>
	);
}
