import { HeaderTextStyle } from "./Header.styles";
import React from "react";

export interface pageIdentifier {
	page: string;
	title: string;
	description: string;
}
export const HeaderText = ({ page, title, description }: pageIdentifier) => {
	return (
		<HeaderTextStyle page={page} title={title} description={description}>
			<h1>{title}</h1>
			<p>{description}</p>
		</HeaderTextStyle>
	);
};
