import React from "react";

import iconWork from "../images/icon-work.svg";
import { timeTrackType } from "./Main";

interface CardProps {
	data: timeTrackType;
	tab: string;
}

const Card: React.FC<CardProps> = ({ data, tab = "weekly" }) => {
	const { title, timeframes } = data;

	// @ts-ignore
	const timeframe: { current: string; previous: string } = timeframes[tab];

	const formathours = (hour: string): string => {
		return `${hour}hrs`;
	};

	return (
		<div className="card">
			<div
				className={`card__top card__top--${title
					.toLocaleLowerCase()
					.replace(" ", "-")}`}
			>
				<div className="card__icon">
					<img src={iconWork} alt="image-jeremy" />
				</div>
			</div>
			<div className="card__content">
				<div className="card__row">
					<p>{title}</p>
					<span className="card__small-description">...</span>
				</div>
				<div className="card__times">
					<p className="card__description">
						{formathours(timeframe.current)}
					</p>
					<span className="card__small-description">
						Last Week - {formathours(timeframe.previous)}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
