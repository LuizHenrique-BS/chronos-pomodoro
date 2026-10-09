import { TimerIcon } from "lucide-react";
import { Heading } from "./components/Heading";

import "./styles/global.css";
import "./styles/theme.css";

export function App() {
  return (
    <>
      <Heading>
        Olá mundo 1!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        possimus deleniti impedit, alias sequi illo et illum hic laboriosam
        dolor minus delectus neque consequuntur fuga beatae omnis aperiam?
        Earum, ab.
      </p>
    </>
  );
}
