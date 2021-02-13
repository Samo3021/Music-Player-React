import React from "react";

//include images into your bundle

//create your first component

export class Home extends React.Component {
	constructor() {
		super();
		// this.cancionRef = React.createRef();
		// console.log(this.cancionRef);
		this.state = {
			fetchData: [],
			apiUrl: "https://assets.breatheco.de/apis/sound/songs",
			cancionDd: null
		};
	}

	componentDidMount() {
		fetch(this.state.apiUrl)
			.then(response => response.json())
			.then(data => {
				this.setState({ fetchData: data });
				console.log(this.state.fetchData);
			});
		// console.log(this.fetchData);
	}
	ponerCancion(i) {
		let cancionSelec = this.state.fetchData[i];
		this.setState({ cancionDd: cancionSelec });
	}

	// handlePlay = () => {
	// 	this.cancionRef.play();
	// };
	render() {
		return (
			<div className="image-box">
				<h1 className="text-center">Fetching</h1>
				<div className="container">
					<ul>
						{this.state.fetchData.map((song, i) => {
							return (
								<li key={i}>
									<button
										onClick={() => this.ponerCancion(i)}
										className="btn btn-muted btn-block"
										type="button">
										<span className="lead">
											{song.name}
										</span>
									</button>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="text-center">
					<audio controls>
						<source src={this.state.apiUrl} type="audio/mpeg" />
						<source />
					</audio>
				</div>
			</div>
		);
	}
}
{
	/* 
//create your first component
// onClick={() => ()};
//create your first component
// onClick={() => ()};
//if (myAudio.current !== null) {
//  myAudio.current.play() */
}
