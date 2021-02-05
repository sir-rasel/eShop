import styles from './footer.module.css'

export default function Footer() {
    const name = "Saiful Islam Rasel"

    return <div className={styles.footer}>
        <h3> Maintainace by : {name} </h3>
        <p>Maintained from : 2020 - {new Date().getFullYear()}</p>
    </div>
}