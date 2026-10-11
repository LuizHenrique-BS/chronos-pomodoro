import { useTaskContext } from "../../contexts/TaskContext";
import styles from "./style.module.css";

export function CountDown() {
  const { state } = useTaskContext();

  return (
    <div className={styles.container}>{state.formattedSecondsRemaining}</div>
  );
}
