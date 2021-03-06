import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
            <NavMenu>
                <NavLink to='/home' activeStyle>
                    Home
                </NavLink>
                <NavLink to='/universities' activeStyle>
                    Universities
                </NavLink>
                <NavLink to='/postallookup' activeStyle>
                    Postal lookup
                </NavLink>
            </NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
