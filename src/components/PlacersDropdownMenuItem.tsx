import { PlacersLogo } from "../assets/svg";
import { PlacersDropdownMenuItemProps } from "../interfaces";

const PlacersDropdownMenuItem = ({
  item,
  displayPoints,
}: PlacersDropdownMenuItemProps) => {
  const logoFillColor = "#0c0c0c";
  const logoWidth = 24;

  return (
    <div data-testid="menu-item" className="placers-dropdown-menu-item">
      <div className="position">
        <PlacersLogo fillColor={logoFillColor} width={logoWidth} />
        <span>{item.position}</span>
      </div>
      <div className="details">
        <h4>{item.name.title}</h4>
        <span>{item.caption}</span>
      </div>
      {displayPoints ? (
        <div className="points" data-testid="points">
          <span>{item.points?.points}</span>
          <span>{item.points?.wins}</span>
          <span>{item.points?.loses}</span>
        </div>
      ) : null}
    </div>
  );
};

export default PlacersDropdownMenuItem;
