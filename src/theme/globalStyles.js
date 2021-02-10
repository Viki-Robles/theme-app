import { createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
    transition: all 0.50s linear;
  }

  a {
    color: ${({ theme }) => theme.colors.link.text};
    cursor: pointer;
  }

  input {
    padding: 0.5em;
	color: palevioletred;
	background: white;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
  }
form {
    color: palevioletred;
    display: block;
    width: 250px;
    margin:0 auto;
}
  button {
    border: 0;
    display: inline-block;
    padding: 10px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.button.background};
    color: #ffff;
    font-family: ${({ theme }) => theme.font};
    margin: 0 auto;
  }

  button.btn {
    background-color: ${({ theme }) => theme.colors.button.background};
    color: ${({ theme }) => theme.colors.button.text};
  }
`;