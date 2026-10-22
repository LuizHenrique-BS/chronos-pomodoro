import { useEffect } from "react";
import { Container } from "../../components/Container/index.tsx";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import { MainTemplate } from "../../templates/MainTemplate";
import { pagesDictionary } from "../../dictionary/pagesDictionary.ts";

export function Home() {
  useEffect(() => {
    document.title = `${pagesDictionary.title}`;
  }, []);

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
