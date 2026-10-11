import { Container } from "../../components/Container.tsx";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import { MainTemplate } from "../../templates/MainTemplate";

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
