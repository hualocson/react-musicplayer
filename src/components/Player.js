import React, { useState, useRef, useEffect } from "react";
import PlayerControls from "./PlayerControls";
import PlayerDetails from "./PlayerDetails";
import Playlist from "./Playlist";

const Player = ({
	currentSongIndex,
	setCurrentSongIndex,
	nextSongIndex,
	songs,
}) => {
	const audioEl = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);
	useEffect(() => {
		if (isPlaying) audioEl.current.play();
		else audioEl.current.pause();
	});

	const skipSong = (forward = true) => {
		setIsPlaying(true);
		audioEl.current.currentTime = 0;
		const img = document.querySelector(".c-player-details .details-img img");
		img.style.transform = "rotate(0);";

		if (forward) {
			setCurrentSongIndex(() => {
				let temp = currentSongIndex;
				temp++;
				if (temp > songs.length - 1) return 0;
				return temp;
			});
			img.classList.add("isPlaying");
		} else
			setCurrentSongIndex(() => {
				let temp = currentSongIndex;
				temp--;
				if (temp < 0) return songs.length - 1;
				return temp;
			});
	};
	return (
		<div className="c-player">
			<audio
				ref={audioEl}
				src={songs[currentSongIndex].src}
				onEnded={() => {
					skipSong();
				}}
			></audio>
			<h4>Playing now</h4>
			{/* Details */}
			<PlayerDetails song={songs[currentSongIndex]} isPlaying={isPlaying} />
			{/* Controls */}
			<PlayerControls
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				skipSong={skipSong}
			/>
			<p>
				<strong>Next up:</strong> {songs[nextSongIndex].title} by{" "}
				{songs[nextSongIndex].artist}
			</p>
			<Playlist songs={songs} currentSongIndex={currentSongIndex} />
		</div>
	);
};

export default Player;
