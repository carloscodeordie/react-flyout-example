import CloseLogo from "./CloseLogo";
import { render } from "@testing-library/react";

const fillColor = "#000";
const width = 20;

describe(CloseLogo.name, () => {
  it("should render correctly", () => {
    const { container } = render(
      <CloseLogo fillColor={fillColor} width={width} />
    );
    expect(container).toMatchSnapshot();
  });

  it("should verify styles are applied", () => {
    const { getByTestId } = render(
      <CloseLogo fillColor={fillColor} width={width} />
    );
    const element = getByTestId("close-logo");
    expect(element.getAttribute("fill")).toEqual(fillColor);
    expect(element.getAttribute("height")).toEqual(width.toString());
    expect(element.getAttribute("viewBox")).toEqual("0 0 20 20");
    expect(element.getAttribute("width")).toEqual(width.toString());
  });
});
