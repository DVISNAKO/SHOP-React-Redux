import React from 'react';
import styles from "../../components/styles/Sidebar.module.css";
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className={styles.Sidebar}>
             <div className={styles.title}>GATEGORIES</div>
             <nav>
                <ul className={styles.menu}>
                    <li>
                        <NavLink>
                           <Link>LINK</Link> 
                        </NavLink>
                    </li>
                </ul>
             </nav>
             <div className={styles.footer}>
                <a href={'/help'} target="_blank" className={styles.link}>Help</a>
                <a href={'/terms'} target="_blank" className={styles.link} style={{textDecoration: 'underline'}}>Terms & Conditions</a>
             </div>
        </div>
    );
};

export default Sidebar;