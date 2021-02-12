import React from "react";

//include images into your bundle

//create your first component

export class Home extends React.Component {
	constructor() {
		super();
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
        this.state.fetchData[i].url;
        let cancionSelec= this.state.setState(cancionDd)    
        console.log(cancionSelec);
	}
	render() {
		return (
			<div className="image-box">
				<h1 className="text-center">Fetching</h1>
				<div className="container">
					{this.state.fetchData.map((song, i) => {
						return (
							<div className="" key={i}>
								<ul>
									<li>
										<button
											onClick={this.ponerCancion(i)}
											className="btn btn-muted btn-block"
											type="button">
											<span className="lead">
												{song.name}
											</span>
										</button>
									</li>
									{/* <li>
										https://assets.breatheco.de/apis/sound/
										{song.url}
									</li> */}
								</ul>
							</div>
						);
					})}
				</div>
				<div className="text-center">
					<audio
						controls
						src="https://assets.breatheco.de/apis/sound/">
						<source
							src={this.state.apiUrl}
							type="audio/mpeg"
						/>
						<source
						// src="https://assets.breatheco.de/apis/sound/files/mario/songs/hurry-starman.mp3"
						// type="audio/mpeg"
						/>
					</audio>
				</div>
			</div>
		);
	}
}

//create your first component
// onClick={() => ()};
