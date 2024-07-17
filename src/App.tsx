import PlacersDropdown from "./components/PlacersDropdown";
import { MockPlacerItems } from "./mocks";

function App() {
  return (
    <>
      <PlacersDropdown header="PLACERS" items={MockPlacerItems} />
    </>
  );
}

export default App;
