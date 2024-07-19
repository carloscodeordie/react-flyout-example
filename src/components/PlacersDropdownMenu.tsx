import { PlacersDropdownMenuProps } from "../interfaces";
import { PlacersDropdownMenuItem } from "../components";
import { CloseLogo } from "../assets/svg";

const PlacersDropdownMenu = ({
  header,
  items,
  onClose,
  displayPoints,
}: PlacersDropdownMenuProps) => {
  return (
    <div data-testid="placers-dropdown-menu" className="placers-dropdown-menu">
      <div className="container">
        <div className="header">
          <div className="header-button"></div>
          <div data-testid="title" className="header-title">
            {header}
          </div>
          <div
            data-testid="close-button"
            className="header-button"
            onClick={onClose}
          >
            <CloseLogo fillColor="#535357" width={20} />
          </div>
        </div>
        {displayPoints ? (
          <div data-testid="points-header" className="points-header">
            <p className="position">&#35;</p>
            <p className="name">name</p>
            <p className="points">pt</p>
            <p className="points">w</p>
            <p className="points">l</p>
          </div>
        ) : null}

        <div data-testid="details" className="details">
          {items
            ? items.map((item, key) => (
                <PlacersDropdownMenuItem
                  key={key}
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
