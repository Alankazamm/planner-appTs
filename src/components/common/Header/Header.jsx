import { HeaderTextStyle } from "./styles";
export const HeaderText = ({ page, title, description }) => {
    return (<HeaderTextStyle page={page} title={title} description={description}>
			<h1>{title}</h1>
			<p>{description}</p>
		</HeaderTextStyle>);
};
