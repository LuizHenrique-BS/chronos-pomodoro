import { Container } from "./components/Container.tsx";
import { CountDown } from "./components/CountDown/index.tsx";
import { Cycles } from "./components/Cycles/index.tsx";
import { DefaultInput } from "./components/DefaultInput/index.tsx";
import { Logo } from "./components/Logo/index.tsx";
import { Menu } from "./components/Menu/index.tsx";

import "./styles/global.css";
import "./styles/theme.css";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="">
          <div className="formRow">
            <DefaultInput
              labelText="task"
              id="input"
              type="text"
              title="Titulo"
              placeholder="Digite aqui"
            />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
