import { Container } from "./components/Container.tsx";
import { CountDown } from "./components/CountDown/index.tsx";
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
    </>
  );
}
