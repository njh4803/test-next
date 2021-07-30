import React, { useState } from 'react';
import Button from './Button';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {

    const [count, setCount] = useState(0);

    const Cilckkk = () => setCount(count+1);

    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.item}>
                    <Button text="로고" color="blue"/>
                </div>
                <div className={styles.item}>
                    <Button text="메뉴1"/>{count}
                    <Link href="/about">
                       메뉴2
                    </Link>
                    <Button text="메뉴3"/>
                </div>
                <div className={styles.item}>
                    <Button text="로그인" type="A"/>
                    <div onClick={Cilckkk}>1</div>
                </div>
            </div>
        </div>
    )
}

export default Header;
