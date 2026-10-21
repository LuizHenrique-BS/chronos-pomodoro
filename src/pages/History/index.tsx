import { TrashIcon } from "lucide-react";
import { Container } from "../../components/Container/index.tsx";
import { DefaultButton } from "../../components/DefaultButton/index.tsx";
import { Heading } from "../../components/Heading/index.tsx";
import { MainTemplate } from "../../templates/MainTemplate";

import styles from "./styles.module.css";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext.ts";
import { formatDate } from "../../utils/formatDate.ts";
import { getTaskStatus } from "../../utils/getTaskStatus.ts";
import { taskTypeDictionary } from "../../dictionary/taskTypeDictionary.ts";
import { sortTasks, type SortTasksOptions } from "../../utils/sortTasks.ts";
import { useEffect, useMemo, useState } from "react";
import { showMessage } from "../../adapters/showMessage.ts";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions.ts";

export function History() {
  const { state, dispatch } = useTaskContext();
  const hasTasks = state.tasks.length > 0;

  const [sortTasksOptions, setSortTaskOptions] = useState<
    Pick<SortTasksOptions, "field" | "direction">
  >({ field: "startDate", direction: "desc" });
  const sortedTasks = useMemo(
    () =>
      sortTasks({
        tasks: state.tasks,
        direction: sortTasksOptions.direction,
        field: sortTasksOptions.field,
      }),
    [state.tasks, sortTasksOptions.direction, sortTasksOptions.field],
  );

  function handleSortTasks({ field }: Pick<SortTasksOptions, "field">) {
    const newDirection = sortTasksOptions.direction === "desc" ? "asc" : "desc";

    setSortTaskOptions({ direction: newDirection, field });
  }

  function handleResetHistory() {
    showMessage.dismiss();
    showMessage.confirm("Tem certeza?", (confirmation) => {
      if (confirmation) {
        console.log("APAGAR histórico", confirmation);
        dispatch({ type: TaskActionTypes.RESET_STATE });
      }
      return;
    });
  }

  useEffect(() => {
    console.log("Componente desmontado");
    return () => {
      showMessage.dismiss();
    };
  }, []);

  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>History</span>
          <span className={styles.buttonContainer}>
            <DefaultButton
              icon={<TrashIcon />}
              color="red"
              aria-label="Apagar todo o histórico"
              title="Apagar histórico"
              onClick={handleResetHistory}
            />
          </span>
        </Heading>
      </Container>

      <Container>
        {hasTasks && (
          <div className={styles.responsiveTable}>
            <table>
              <thead>
                <tr>
                  <th
                    onClick={() => handleSortTasks({ field: "name" })}
                    className={styles.thSort}
                  >
                    Tarefa ↕
                  </th>
                  <th
                    onClick={() => handleSortTasks({ field: "duration" })}
                    className={styles.thSort}
                  >
                    Duração ↕
                  </th>
                  <th
                    onClick={() => handleSortTasks({ field: "startDate" })}
                    className={styles.thSort}
                  >
                    Data ↕
                  </th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody>
                {sortedTasks.map((task) => {
                  return (
                    <tr key={task.id}>
                      <td>{task.name}</td>
                      <td>{task.duration}min</td>
                      <td>{formatDate(task.startDate)}</td>
                      <td>{getTaskStatus(task, state?.activeTask)}</td>
                      <td>{taskTypeDictionary[task.type]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
        {!hasTasks && (
          <p style={{ textAlign: "center", fontWeight: "bold" }}>
            Ainda não existem tarefas criadas
          </p>
        )}
      </Container>
    </MainTemplate>
  );
}
