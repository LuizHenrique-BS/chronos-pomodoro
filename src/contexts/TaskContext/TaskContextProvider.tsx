import { useEffect, useReducer, useRef } from "react";
import { TaskContext } from "./TaskContext";
import { initialTaskState } from "./initialTaskState";
import { taskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../workers/TimerWorkerManager";
import { TaskActionTypes } from "./taskActions";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  const worker = useRef<TimerWorkerManager | null>(null);

  useEffect(() => {
    if (!state.activeTask) {
      console.log("Worker terminado por falta de activeTask");
      worker.current?.terminate();
      worker.current = null;
      return;
    }

    if (!worker.current) {
      worker.current = TimerWorkerManager.getInstance();

      worker.current.onmessage((e) => {
        const countDownSeconds = e.data;

        if (countDownSeconds <= 0) {
          console.log("Worker COMPLETED");
          dispatch({
            type: TaskActionTypes.COMPLETE_TASK,
          });
          worker.current?.terminate();
          worker.current = null;
          return;
        }

        dispatch({
          type: TaskActionTypes.COUNT_DOWN,
          payload: { secondsRemaining: countDownSeconds },
        });
      });

      worker.current.postMessage(state);
    }
  }, [state]);

  useEffect(() => {
    return () => {
      worker.current?.terminate();
      worker.current = null;
    };
  }, []);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
