import { SaveIcon } from "lucide-react";
import { Container } from "../../components/Container/index.tsx";
import { DefaultButton } from "../../components/DefaultButton/index.tsx";
import { DefaultInput } from "../../components/DefaultInput/index.tsx";
import { Heading } from "../../components/Heading/index.tsx";
import { MainTemplate } from "../../templates/MainTemplate/index.tsx";

export function Settings() {
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
        <form action="" className="form">
          <div className="formRow">
            <DefaultInput id="workTime" labelText="Foco" aria-label="Foco" />
          </div>
          <div className="formRow">
            <DefaultInput
              id="shortBreackTime"
              labelText="Descanso curto"
              aria-label="Descanso curto"
            />
          </div>
          <div className="formRow">
            <DefaultInput
              id="longBreackTime"
              labelText="Descanso longo"
              aria-label="Descanso longo"
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
