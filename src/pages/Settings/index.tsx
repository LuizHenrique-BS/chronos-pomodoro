import { SaveIcon } from "lucide-react";
import { Container } from "../../components/Container/index.tsx";
import { DefaultButton } from "../../components/DefaultButton/index.tsx";
import { DefaultInput } from "../../components/DefaultInput/index.tsx";
import { Heading } from "../../components/Heading/index.tsx";
import { MainTemplate } from "../../templates/MainTemplate/index.tsx";
import { useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext.ts";

export function Settings() {
  const { state } = useTaskContext();
  const workTimeInputRef = useRef<HTMLInputElement | null>(null);
  const shortBreakTimeInputRef = useRef<HTMLInputElement | null>(null);
  const longBreakTimeInputRef = useRef<HTMLInputElement | null>(null);

  function handleSaveSettings(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const workTime = workTimeInputRef.current?.value;
    const shortBreakTime = shortBreakTimeInputRef.current?.value;
    const longBreakTime = longBreakTimeInputRef.current?.value;

    console.log(workTime, shortBreakTime, longBreakTime);
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
            />
          </div>
          <div className="formRow">
            <DefaultInput
              id="shortBreackTime"
              labelText="Descanso curto"
              aria-label="Descanso curto"
              ref={shortBreakTimeInputRef}
              defaultValue={state.config.shortBreakTime}
            />
          </div>
          <div className="formRow">
            <DefaultInput
              id="longBreackTime"
              labelText="Descanso longo"
              aria-label="Descanso longo"
              ref={longBreakTimeInputRef}
              defaultValue={state.config.longBreakTime}
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
