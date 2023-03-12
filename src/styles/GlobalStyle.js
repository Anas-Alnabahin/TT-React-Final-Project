/** @format */

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Inter', sans-serif;
	color: ${(props) => props.theme.palette.text.primary};
}

svg{
	height: 50px;
	width: 80px;
}

a{
	text-decoration: none;
	color: ${(props) => props.theme.palette.primary};
}
`;
