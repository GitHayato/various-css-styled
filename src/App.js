import { Emotion } from "./components/Emotion";
import { StyledComponents } from "./components/StyledComponents";
import { CssModules } from "./components/CssModules";
import { InlineSyle } from "./components/InlineSyle";
import { StyledJsx } from "./components/StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineSyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
