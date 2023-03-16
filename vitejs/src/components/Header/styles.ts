import styled from "styled-components";
import { SPACE_BETWEEN } from "styles/themes";


export const StyledHeader = styled.header`
${SPACE_BETWEEN}
margin:10px 20px;
svg {
    width:50px;
    height: 50px;
    stroke:green;
}
`

export const Links = styled.ul`
list-style-type: none;
${SPACE_BETWEEN}
& > * {
    margin: 0 5px;
}
`