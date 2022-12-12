import TogglePane from "./Components/Toggle/TogglePane";

function App() {
  return (
    <>
      <TogglePane onChange={() => console.log("changed")} />
    </>
  );
}
export default App;
