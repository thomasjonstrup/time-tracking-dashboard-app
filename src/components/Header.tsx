import React from "react";

import image from "../images/image-jeremy.png";

interface HeaderProps {
	changeTab: Function;
	tab: string;
}

const Header: React.FC<HeaderProps> = ({ changeTab, tab }) => {
	return (
		<header className="header">
			<div className="card card__full">
				<div className="card__user">
					<div className="card__image">
						<img src={image} alt="image-jeremy" />
					</div>
					<div className="card__user-description">
						<span className="card__small-description">
							Report for
						</span>
						<h1 className="mt-2">Jeremy Robson</h1>
					</div>
				</div>
				<div className="card__bottom">
					<button
						className={`btn btn--link card__tab${
							tab === "daily" ? " btn--active" : ""
						}`}
						onClick={() => {
							changeTab("daily");
						}}
					>
						Daily
					</button>
					<button
						className={`btn btn--link card__tab${
							tab === "weekly" ? " btn--active" : ""
						}`}
						onClick={() => {
							changeTab("weekly");
						}}
					>
						Weekly
					</button>
					<button
						className={`btn btn--link card__tab${
							tab === "monthly" ? " btn--active" : ""
						}`}
						onClick={() => {
							changeTab("monthly");
						}}
					>
						Monthly
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
