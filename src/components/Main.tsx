import React from "react";

import data from "../data/data.json";
import Card from "./Card";

export interface time {
	daily: timeframe;
	monthly: timeframe;
	weekly: timeframe;
}

export interface timeframe {
	current: string | number;
	previous: string | number;
}

export interface timeTrackType {
	title: string;
	timeframes: time;
}

interface MainProps {
	tab: string;
}

const Main: React.FC<MainProps> = ({ tab }) => {
	return (
		<section className="times">
			{data.map((timeTrackingDataItem: timeTrackType, index) => {
				return (
					<Card tab={tab} data={timeTrackingDataItem} key={index} />
				);
			})}
		</section>
	);
};

export default Main;
