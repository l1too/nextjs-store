"use client"

import Image from 'next/image';

import classNames from 'classnames/bind';

import { useState } from 'react';

import styles from './Description.module.sass';

const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,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'

export const Description = ()=> {

    const [hasBorder, setBorder] = useState(false)

    const handleClick = ()=> setBorder(!hasBorder)

    const cx = classNames.bind(styles)

    const buttonStyles = cx('Description__button',{
        'Description__button--border': hasBorder
    })

    console.log(hasBorder);
    
    return(
        <section className={styles.Description}>
            <button 
            onClick={handleClick}
            className={buttonStyles}
            >

            <div className={styles.Description__imageContainer}>
            <Image 
            src="/images/description.jpeg" 
            alt="products marketplace" 
            fill
            placeholder='blur'
            blurDataURL={PLACEHOLDER_IMAGE}
            />
            </div>
            </button>
            <div className={styles.Description__text}>
                <h2>Bring the future today</h2>
                <p>Future World: Your Gateway to Tomorrow&apos;s Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
            </div>
        </section>
    )
}