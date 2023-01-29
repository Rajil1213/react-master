import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";
import { RootState } from "./store";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return (
    <>
      {isAuthenticated && <Header />}
      {!isAuthenticated && <Auth />}
      <Counter />
    </>
  );
}

export default App;
