import PlacersDropdown from "./components/PlacersDropdown";
import { MockPlacerItems } from "./mocks";

function App() {
  return (
    <>
      <PlacersDropdown header="placers" items={MockPlacerItems} />
    </>
  );
}

export default App;
