import React from 'react'
import styles from "@/module/CategoryCard.module.css"
import Link from 'next/link'
import Image from 'next/image'

interface Props {
    name: string,
    title: string
}

function CategoryCard(props: Props) {
    const { name, title } = props

    return (
        <div className={styles.card}>
            <Link href="/">
                <Image src={`/images/${name}.png`} alt={title} width={240} height={144} priority={true} />
                <p>{title}</p>
            </Link>
        </div>
    )
}

export default CategoryCard