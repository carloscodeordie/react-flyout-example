import { PlacersDropdownMenuItemProps } from "../interfaces";
import PlacersLogo from "./PlacersLogo";
import { calculateOrdinal } from "../utils/placers-utils";

const PlacersDropdownMenuItem = ({ item }: PlacersDropdownMenuItemProps) => {
  return (
    <div className="placers-dropdown-menu-item">
      <div className="position">
        <PlacersLogo fillColor={"#0c0c0c"} width={24} />
        <span>{calculateOrdinal(item.position)}</span>
      </div>
      <div className="details">
        <h4>{item.name}</h4>
        <caption>{item.caption}</caption>
      </div>
      {item.points ? (
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
