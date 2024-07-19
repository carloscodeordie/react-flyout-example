import { render } from "@testing-library/react";
import { PlacersDropdownMenuItem } from "../components";
import { MockPlacerItems } from "../mocks";

describe(PlacersDropdownMenuItem.name, () => {
  it("should render correctly", () => {
    const { container } = render(
      <PlacersDropdownMenuItem item={MockPlacerItems[0]} displayPoints={true} />
    );
    expect(container).toMatchSnapshot();
  });

  it("should verify points are displayed", () => {
    const { getByTestId } = render(
      <PlacersDropdownMenuItem item={MockPlacerItems[0]} displayPoints={true} />
    );
    const points = getByTestId("points");
    expect(points).toBeDefined();
  });

  it("should verify points are hidden", () => {
    const { queryByTestId } = render(
      <PlacersDropdownMenuItem
        item={MockPlacerItems[0]}
        displayPoints={false}
      />
    );
    const points = queryByTestId("points");
    expect(points).toBeNull();
  });
});
