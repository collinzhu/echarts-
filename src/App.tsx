import PieChart from "./Components/PieChart";
import useWindowDimensions from "./useWindowDimensions";

function App() {
  const { height } = useWindowDimensions();

  return (
    <PieChart title="test" description="test" displayMax={15} height={height} />
  );
}
export default App;
