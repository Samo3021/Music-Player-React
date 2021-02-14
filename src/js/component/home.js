import React from "react";

//include images into your bundle

//create your first component

export class Home extends React.Component {
	constructor() {
		super();
		// this.cancionRef = React.createRef();
		// console.log(this.cancionRef);

		this.audio = null;
		this.state = {
			currentIndex: 1,
			songs: [
				{
					title: "South Park",
					id: "south-park",
					author: "Kyle",
					url:
						"https://assets.breatheco.de/apis/sound/files/cartoons/songs/south-park.mp3"
				},
				{
					title: "Thunder Cats",
					id: "thundercats",
					author: "Moonra",
					url:
						"https://assets.breatheco.de/apis/sound/files/cartoons/songs/thundercats.mp3"
				},
				{
					title: "X-Men",
					id: "x-men",
					author: "Profesor",
					url:
						"https://assets.breatheco.de/apis/sound/files/cartoons/songs/x-men.mp3"
				}
			]
		};
	}

	componentDidMount() {
		this.pauseButton.style.display = "none";
		fetch("https://assets.breatheco.de/apis/sound/songs")
			.then(response => response.json())
			.then(songs => {
				this.setState({ songs });
			});
		// console.log(this.fetchData);
	}

	changeSong(i) {
		this.setState({ currentIndex: i });
		this.audio.current.pause();
		this.audio.current.load();
		this.audio.currentIndex.play();
	}
	play = i => {
		let url = this.state.songs[i].url;
		const songUrl = "https://assets.breatheco.de/apis/sound/" + url;
		this.audio.src = songUrl;
		this.audio.play();
		this.playButton.style.display = "none";
		this.pauseButton.style.display = "inline-block";
		this.setState({ currentIndex: i });
	};
	pause = i => {
		this.audio.pause();
		this.playButton.style.display = "inline-block";
		this.pauseButton.style.display = "none";
	};

	// handlePlay = () => {
	// 	this.cancionRef.play();
	// };
	render() {
		const musicList = this.state.songs.map((song, i) => {
			return (
				<li
					className="shadow p-3 mb-5 bg-white rounded"
					key={i}
					onClick={() => this.play(this.state.currentIndex)}>
					<span>{i + 1 + " "}</span>
					<span>{song.name}</span>
				</li>
			);
		});

		const audioPlayer = (
			<>
				<div className="audioPlayer">
					{/*<button className="">*/}
					<button
						className="btn btn-success"
						onClick={() => this.play(this.state.currentIndex - 1)}>
						<i className="fa fa-caret-left" aria-hidden="true" />
					</button>
					<button
						className="btn btn-success"
						ref={element => (this.playButton = element)}
						onClick={() => this.play(this.state.currentIndex)}>
						<i className="fa fa-play" aria-hidden="true" />
					</button>
					<button
						className="btn btn-success"
						ref={element => (this.pauseButton = element)}
						onClick={() => this.pause(this.state.currentIndex)}>
						<i className="fa fa-pause" aria-hidden="true" />
					</button>
					<button
						className="btn btn-success"
						onClick={() => this.play(this.state.currentIndex + 1)}>
						<i className="fa fa-caret-right" aria-hidden="true" />
					</button>
					{/*</button>*/}
				</div>
				<audio ref={element => (this.audio = element)} />
			</>
		);
		return (
			<>
				<h1 className="title">
					<i className="fab fa-spotify"></i>8-Bit music list
				</h1>
				<div className="container">
					<div id="lista">{musicList}</div>
				</div>
				<div id="btn">{audioPlayer}</div>
			</>
		);
	}
}
