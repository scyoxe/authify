'use client';
import Image from 'next/image';
import NavItem from './NavItem';
import styles from '../page.module.css';
import { useState } from 'react';

export default function DropdownMenu() {
    const [menu, setMenu] = useState(true);
    function toogleMenu() {
        setMenu(!menu);
    }
    return (
        <>
            <div
                onClick={toogleMenu}
                className={styles.menu_image}>
                <Image
                    src={'./images/menu.svg'}
                    alt='Menu Icon'
                    width={50}
                    height={50}
                />
            </div>
            {menu ? (
                <div className={styles.nothing}></div>
            ) : (
                <div className={styles.menu_nav}>
                    <NavItem
                        style='active'
                        name='Landing'
                        link='/'
                    />

                    <NavItem
                        name='Docs'
                        link='/docs'
                    />
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
                            <p>GitHub</p>
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
