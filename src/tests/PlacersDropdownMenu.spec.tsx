import { fireEvent, render, screen } from "@testing-library/react";
import { PlacersDropdownMenu } from "../components";
import { MockPlacerItems } from "../mocks";

describe(PlacersDropdownMenu.name, () => {
  const onClose = jest.fn();

  it("should render correctly", () => {
    const { container } = render(
      <PlacersDropdownMenu
        header="placers"
        items={MockPlacerItems}
        displayPoints={true}
        onClose={onClose}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("should verify title is displayed", () => {
    const { getByTestId } = render(
      <PlacersDropdownMenu
        header="placers"
        items={MockPlacerItems}
        displayPoints={true}
        onClose={onClose}
      />
    );
    const points = getByTestId("title");
    expect(points.innerHTML).toEqual("placers");
  });

  it("should verify points header is displayed", () => {
    const { getByTestId } = render(
      <PlacersDropdownMenu
        header="placers"
        items={MockPlacerItems}
        displayPoints={true}
        onClose={onClose}
      />
    );
    const points = getByTestId("points-header");
    expect(points).toBeDefined();
  });

  it("should verify points header is hidden", () => {
    const { queryByTestId } = render(
      <PlacersDropdownMenu
        header="placers"
        items={MockPlacerItems}
        displayPoints={false}
        onClose={onClose}
      />
    );
    const points = queryByTestId("points-header");
    expect(points).toBeNull();
  });

  it("should verify placers items are displayed", () => {
    const { getByTestId } = render(
      <PlacersDropdownMenu
        header="placers"
        items={MockPlacerItems}
        displayPoints={false}
        onClose={onClose}
      />
    );
    const itemDetails = getByTestId("details");
    expect(itemDetails.innerHTML).not.toEqual("");
  });

  it("should verify placers items are empty", () => {
    const { getByTestId } = render(
      <PlacersDropdownMenu
        header="placers"
        items={[]}
        displayPoints={false}
        onClose={onClose}
      />
    );
    const itemDetails = getByTestId("details");
    expect(itemDetails.innerHTML).toEqual("");
  });

  it("should close the menu", () => {
    render(
      <PlacersDropdownMenu
        header="placers"
        items={[]}
        displayPoints={false}
        onClose={onClose}
      />
    );
    const button = screen.getByTestId("close-button");
    fireEvent.click(button);

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
