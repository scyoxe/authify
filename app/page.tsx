import Brand from './components/Brand';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import NavItem from './components/NavItem';
import Image from 'next/image';
import styles from './page.module.css';

export default function Landing() {
    return (
        <>
            <Header>
                <Brand />
                <Nav>
                    <NavItem
                        style='active'
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
                <div className={styles.github_repository}>
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
            </Header>
            <Main>
                <></>
            </Main>
        </>
    );
}
