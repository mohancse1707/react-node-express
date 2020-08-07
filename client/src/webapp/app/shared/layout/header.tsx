/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink as Link } from 'react-router-hash-link';

// tslint:disable-next-line:no-empty-interface
export interface IHeaderProps {
}

const Header = (props: IHeaderProps) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header>
            <div className="fixed-top menu-banner">
                <div className="container mt-header-menu-61">
                    <nav className="navbar navbar-expand-md navbar-dark bg-purple">
                        <Link to="/">
                            <FontAwesomeIcon color="white" size="2x" icon="home"/>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
