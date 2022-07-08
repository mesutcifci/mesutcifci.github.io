import React from "react";
import {Wrapper, Link} from "./style"

const Footer = () => {
    return (
        <Wrapper>
            <p>
            Created by <Link href={"https://github.com/elifcifci"} title="Go her github" target="_blank"> Elif Çiftçi </Link>
            </p>
        </Wrapper>
    )
}

export default Footer;