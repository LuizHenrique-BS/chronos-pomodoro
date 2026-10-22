import { SaveIcon } from "lucide-react";
import { Container } from "../../components/Container/index.tsx";
import { DefaultButton } from "../../components/DefaultButton/index.tsx";
import { DefaultInput } from "../../components/DefaultInput/index.tsx";
import { Heading } from "../../components/Heading/index.tsx";
import { MainTemplate } from "../../templates/MainTemplate/index.tsx";
import { useRef, useState } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext.ts";
import { showMessage } from "../../adapters/showMessage.ts";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions.ts";

export function Settings() {
  const { state, dispatch } = useTaskContext();
  const [formErrors, setFormErrors] = useState<string[]>([]);
  // const formErrors: string[] = [];

  const workTimeInputRef = useRef<HTMLInputElement | null>(null);
  const shortBreakTimeInputRef = useRef<HTMLInputElement | null>(null);
  const longBreakTimeInputRef = useRef<HTMLInputElement | null>(null);

  function handleSaveSettings(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    showMessage.dismiss();

    const workTime = Number(workTimeInputRef.current?.value);
    const shortBreakTime = Number(shortBreakTimeInputRef.current?.value);
    const longBreakTime = Number(longBreakTimeInputRef.current?.value);

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErrors.push("Digite apenas números para TODOS os campos!");
    }

    if (workTime < 1 || workTime > 99) {
      formErrors.push("Digite valores entre 1 e 99 para Foco");
    }

    if (shortBreakTime < 1 || shortBreakTime > 30) {
      formErrors.push("Digite valores entre 1 e 30 para descanso Curto");
    }
    if (longBreakTime < 1 || longBreakTime > 60) {
      formErrors.push("Digite valores entre 1 e 60 para descanso longo");
    }

    if (formErrors.length > 0) {
      formErrors.forEach((error: string) => {
        showMessage.error(error);
      });
      setFormErrors([]);
      return;
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: { workTime, shortBreakTime, longBreakTime },
    });
    showMessage.success("Configurações salvas");
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>

      <Container>
        <p style={{ textAlign: "center" }}>
          Modifique as configurações para foco, descanso curto e descanso longo
        </p>
      </Container>

      <Container>
        <form onSubmit={handleSaveSettings} action="" className="form">
          <div className="formRow">
            <DefaultInput
              id="workTime"
              labelText="Foco"
              aria-label="Foco"
              ref={workTimeInputRef}
              defaultValue={state.config.workTime}
              type="number"
              // min='1'
              // max='99'
              // maxLength={2}
              // step={2}
              // size={2}
            />
          </div>
          <div className="formRow">
            <DefaultInput
              id="shortBreackTime"
              labelText="Descanso curto"
              aria-label="Descanso curto"
              ref={shortBreakTimeInputRef}
              defaultValue={state.config.shortBreakTime}
              type="number"
            />
          </div>
          <div className="formRow">
            <DefaultInput
              id="longBreackTime"
              labelText="Descanso longo"
              aria-label="Descanso longo"
              ref={longBreakTimeInputRef}
              defaultValue={state.config.longBreakTime}
              type="number"
            />
          </div>
          <div className="formRow">
            <DefaultButton
              icon={<SaveIcon />}
              aria-label="Salvar configurações"
              title="Salvar configurações"
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
