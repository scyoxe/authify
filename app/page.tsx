import Brand from './components/Brand';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import NavItem from './components/NavItem';

export default function Landing() {
    return (
        <>
            <Header>
                <Brand />
                <Nav>
                    <NavItem
                        name='Landing'
                        link='/'
                    />
                    <NavItem
                        name='Local'
                        link='/local'
                    />
                    <NavItem
                        name='Social'
                        link='/social'
                    />
                    <NavItem
                        name='About'
                        link='/about'
                    />
                </Nav>
            </Header>
            <Main>
                <></>
            </Main>
        </>
    );
}
