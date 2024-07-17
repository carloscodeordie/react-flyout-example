import { useState } from "react";
import { PlacersLogo, PlacersDropdownMenu } from "../components";
import { PlacersDropdownProps } from "../interfaces";

const PlacersDropdown = ({ header, items }: PlacersDropdownProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="placers-dropdown-container">
      <button className="button" onClick={handleOpen}>
        <PlacersLogo fillColor="#FFF" width={24} />
        <span className="text">{header}</span>
      </button>
      {open ? (
        <PlacersDropdownMenu
          header={header}
          items={items}
          onClose={handleClose}
          displayPointsHeader={true}
        />
      ) : null}
    </div>
  );
};

export default PlacersDropdown;
