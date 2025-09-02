"use client";

import Link from "next/link";
import styles from "./not-found.module.css"; 

export default function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.sistema}>
                <div className={styles.terra}></div>
                <div className={styles.orbitaContainer}>
                    <div className={styles.lua}></div>
                </div>
            </div>

            <h1 className={styles.title}>
                404 - Página não encontrada
            </h1>
            <p className={styles.description}>
                             Ops! Parece que você se perdeu no caminho. <br />
                O conteúdo que você está procurando não existe. Vamos voltar para a Home?
            </p>

            <Link href="/" className={styles.link}>
                Voltar para a Home
            </Link>
        </div>
    );
}