import React from "react";

const Playlist = ({ songs, currentSongIndex }) => {
	return (
		<>
			<h3 className="c-playlist-header">Play List</h3>
			<ul className="c-playlist-songs">
				{songs.map((song, index) => (
					<li
						key={index}
						className={`playlist-item ${
							index === currentSongIndex ? "active" : ""
						}`}
					>
						{song.title}
					</li>
				))}
			</ul>
		</>
	);
};

export default Playlist;
