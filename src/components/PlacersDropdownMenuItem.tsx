import { PlacersDropdownMenuItemProps } from "../interfaces";
import PlacersLogo from "./PlacersLogo";

const PlacersDropdownMenuItem = ({
  item,
  displayPoints,
}: PlacersDropdownMenuItemProps) => {
  return (
    <div className="placers-dropdown-menu-item">
      <div className="position">
        <PlacersLogo fillColor={"#0c0c0c"} width={24} />
        <span>{item.position}</span>
      </div>
      <div className="details">
        <h4>{item.name}</h4>
        <caption>{item.caption}</caption>
      </div>
      {displayPoints ? (
        <div className="points">
          <span>{item.points?.points}</span>
          <span>{item.points?.wins}</span>
          <span>{item.points?.loses}</span>
        </div>
      ) : null}
    </div>
  );
};

export default PlacersDropdownMenuItem;
