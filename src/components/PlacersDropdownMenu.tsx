import { PlacersDropdownMenuProps } from "../interfaces";
import { CloseLogo, PlacersDropdownMenuItem } from "../components";

const PlacersDropdownMenu = ({
  header,
  items,
  onClose,
  displayPoints,
}: PlacersDropdownMenuProps) => {
  return (
    <div className="placers-dropdown-menu">
      <div className="container">
        <div className="header">
          <div className="header-button"></div>
          <div className="header-title">{header}</div>
          <div className="header-button" onClick={onClose}>
            <CloseLogo fillColor="#535357" width={20} />
          </div>
        </div>
        {displayPoints ? (
          <div className="points-header">
            <p className="position">&#35;</p>
            <p className="name">name</p>
            <p className="points">pt</p>
            <p className="points">w</p>
            <p className="points">l</p>
          </div>
        ) : null}

        <div className="details">
          {items
            ? items.map((item) => (
                <PlacersDropdownMenuItem
                  item={item}
                  displayPoints={displayPoints}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default PlacersDropdownMenu;
