import React from "react";

const PlayerDetails = ({ song, isPlaying }) => {
	return (
		<div className="c-player-details">
			<div className="details-img">
				<img
					src={song.img_src}
					alt=""
					className={`${isPlaying ? "isPlaying" : "isPlaying Paused"}`}
				/>
			</div>
			<h3 className="details-title">{song.title}</h3>
			<h3 className="details-artist">{song.artist}</h3>
		</div>
	);
};

export default PlayerDetails;
