import TogglePane from "./Components/TogglePane";

function App() {
  return (
    <>
      <TogglePane onChange={() => console.log("changed")} />
    </>
  );
}
export default App;
