import Brand from './components/Brand';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import NavItem from './components/NavItem';
import Image from 'next/image';

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
                    <div className='github-repository'>
                        <a
                            href='https://github.com/scyoxe/authify'
                            target='_blank'>
                            <Image
                                src={'./images/github.svg'}
                                alt='Github Logo'
                                width={50}
                                height={50}
                            />
                        </a>
                    </div>
                </Nav>
            </Header>
            <Main>
                <></>
            </Main>
        </>
    );
}
