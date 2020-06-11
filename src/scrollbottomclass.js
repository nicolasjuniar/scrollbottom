import React, { Component } from 'react';
import './App.css';

class ScrollBottomClass extends Component {
	render() {
		return (
			<div className="App">
				<header></header>
				<body style={{ height: 2000, backgroundColor: '#FFF000' }}>
					<button onClick={() => this.footerRef.scrollIntoView({ behavior: 'smooth' })}>
						Scroll to bottom
					</button>
				</body>
				<footer
					ref={footerRef => {
						this.footerRef = footerRef;
					}}
				>
					<div style={{ backgroundColor: '#FF0000' }}>
						<p>Ini Footer</p>
					</div>
				</footer>
			</div>
		);
	}
}

export default ScrollBottomClass;
