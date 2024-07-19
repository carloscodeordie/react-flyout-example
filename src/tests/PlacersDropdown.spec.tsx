import { fireEvent, render, screen } from "@testing-library/react";
import { PlacersDropdown } from "../components";
import { MockPlacerItems } from "../mocks";

describe(PlacersDropdown.name, () => {
  it("should render correctly", () => {
    const { container } = render(
      <PlacersDropdown header="placers" items={MockPlacerItems} />
    );
    expect(container).toMatchSnapshot();
  });

  it("should validate title is displayed", () => {
    const { getByTestId } = render(
      <PlacersDropdown header="placers" items={MockPlacerItems} />
    );

    const title = getByTestId("dropdown-title");
    expect(title.innerHTML).toEqual("placers");
  });

  it("should open and close the dropdown menu", () => {
    render(<PlacersDropdown header="placers" items={MockPlacerItems} />);

    // Open the dropdown menu
    const dropdownButton = screen.getByTestId("dropdown-button");
    fireEvent.click(dropdownButton);

    let menu = screen.getByTestId("dropdown-menu");
    expect(menu).toBeDefined();

    // Close the dropdown menu
    const closeButton = screen.getByTestId("close-button");
    fireEvent.click(closeButton);

    const hiddenMenu = screen.queryByTestId("dropdown-menu");
    expect(hiddenMenu).toBeNull();
  });
});
