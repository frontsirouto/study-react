import styles from "@/styles/Home.module.css";

export function Headline(props) {
  console.log(props);

  return (
    <div>
      <hi className={styles.title}>{props.page} page</hi>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/{props.page}.js</code>
      </p>
    </div>
  );
}
