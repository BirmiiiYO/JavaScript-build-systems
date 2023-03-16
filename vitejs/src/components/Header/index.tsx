import { links } from "constants/links"
import React from "react"

import { LogoIcon } from "assets/svg"
import { Link } from "react-router-dom"

import {Links, StyledHeader} from './styles'


export const Header = () => {
    return (
        <StyledHeader>
            <LogoIcon/>
            <Links>
                {links.map(({href, name}) =><li>
                    <Link to={href}>{name}</Link>
                </li> )}
            </Links>
            <button>press</button>
        </StyledHeader>
    )
}