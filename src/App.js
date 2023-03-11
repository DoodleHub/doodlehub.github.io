import { Nav } from "./components/nav";
import { Home } from "./components/home";
import { Wrapper } from "./components/wrapper";

export const App = () => {
  return (
    <Wrapper>
      <Nav />
      <Home />
    </Wrapper>
  );
};
