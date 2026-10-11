import { Container } from "../../components/Container.tsx/index.tsx";
import { MainTemplate } from "../../templates/MainTemplate/index.tsx";

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>Página não encontrada</h1>
      </Container>
    </MainTemplate>
  );
}
