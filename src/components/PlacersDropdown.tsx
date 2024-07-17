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

  const buttonClasses = open ? "button open" : "button";

  return (
    <div className="placers-dropdown-container">
      <button className={buttonClasses} onClick={handleOpen}>
        <PlacersLogo fillColor="#FFF" width={24} />
        <span className="button-text">{header}</span>
      </button>
      {open ? (
        <PlacersDropdownMenu
          header={header}
          items={items}
          onClose={handleClose}
          displayPoints={false}
        />
      ) : null}
    </div>
  );
};

export default PlacersDropdown;
