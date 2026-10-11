import { Container } from "../../components/Container.tsx";
import { Footer } from "../../components/Footer/index.tsx";
import { Logo } from "../../components/Logo/index.tsx";
import { Menu } from "../../components/Menu/index.tsx";

import "../../styles/global.css";
import "../../styles/theme.css";

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  );
}
