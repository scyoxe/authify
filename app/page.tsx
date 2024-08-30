import Brand from './components/Brand';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import NavItem from './components/NavItem';
import Image from 'next/image';
import styles from './page.module.css';
import Footer from './components/Footer';

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
                        name='Docs'
                        link='/docs'
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
                <div>
                    <h1>Welcome to Authify!</h1>
                    <p>
                        Discover the power of Next.js as we explore cutting-edge
                        authentication methods!
                    </p>
                </div>
                <div>
                    <button>Manual</button>
                    <button>Auto</button>
                </div>
                <Footer />
            </Main>
        </>
    );
}
