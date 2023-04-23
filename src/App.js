import { useState, useEffect } from "react";
import Player from "./components/Player";

const App = () => {
	const [songs, setSongs] = useState([
		{
			title: "Forget me too ft. Halsey",
			artist: "Machine Gun Kelly",
			img_src: "./images/song-1.jpg",
			src: "./music/on-n-on.mp3",
		},
		{
			title: "Some Body New",
			artist: "artist 2",
			img_src: "./images/song-2.jpg",
			src: "./music/somebody-new.mp3",
		},
		{
			title: "Song 3",
			artist: "artist 3",
			img_src: "./images/song-3.jpg",
			src: "./music/somebody-new.mp3",
		},
		{
			title: "Song 4",
			artist: "artist 4",
			img_src: "./images/song-4.jpg",
			src: "./music/somebody-new.mp3",
		},
	]);

	const [currentSongIndex, setCurrentSongIndex] = useState(3);
	const [nextSongIndex, setNextSongIndex] = useState(
		currentSongIndex + 1 >= songs.length ? 0 : currentSongIndex + 1
	);

	useEffect(() => {
		setNextSongIndex(() => {
			if (currentSongIndex + 1 > songs.length - 1) {
				return 0;
			}
			return currentSongIndex + 1;
		});
	}, [currentSongIndex]);
	return (
		<div className="App">
			<Player
				currentSongIndex={currentSongIndex}
				setCurrentSongIndex={setCurrentSongIndex}
				nextSongIndex={nextSongIndex}
				songs={songs}
			/>
		</div>
	);
};

export default App;
