import { render } from "@testing-library/react";
import App from "../App";

describe(App.name, () => {
  it("should render correctly", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
