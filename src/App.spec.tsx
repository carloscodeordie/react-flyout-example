import App from "./App";
import { render } from "@testing-library/react";

describe(App.name, () => {
  it("should render correctly", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
