import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Item = styled( NavLink )`
color: black;
text-decoration: none;
background-color: aliceblue;
&.active {
    color: darkgreen;
}
`