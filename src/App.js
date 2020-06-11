import React, { useRef } from 'react';
import './App.css';

function App() {
  const footerRef = useRef(null);
  return (
		<div className="App">
			<header></header>
			<body style={{ height: 2000, backgroundColor: '#FFF000' }}>
				<button onClick={() => footerRef.current.scrollIntoView({ behavior: 'smooth' })}>
					Scroll to bottom
				</button>
			</body>
			<footer
				ref={footerRef}
			>
				<div style={{ backgroundColor: '#FF0000' }}>
					<p>Ini Footer</p>
				</div>
			</footer>
		</div>
  );
}

export default App;
