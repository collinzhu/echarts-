import PieChart from "./Components/Demo1";
import useWindowDimensions from "./useWindowDimensions";

function App() {
  const { height } = useWindowDimensions();

  return (
    <PieChart title="test" description="test" displayMax={15} height={height} />
  );
}
export default App;
