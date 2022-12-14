import TogglePane from "./Components/Jason/Toggle/TogglePane";

function App() {
  return (
    <>
      <TogglePane onChange={() => console.log("changed")} />
    </>
  );
}
export default App;
