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
                <div className={styles.landing_container}>
                    <div className={styles.landing_title}>
                        <h1>Welcome to Authify!</h1>
                        <p>
                            Unlock the capabilities of Next.js as we dive into
                            mastering mastering innovative authentication
                            techniques!
                        </p>
                    </div>
                    <div className={styles.landing_links}>
                        <button>Manual</button>
                        <button className={styles.auto}>Auto</button>
                    </div>
                </div>
                <Footer />
            </Main>
        </>
    );
}
