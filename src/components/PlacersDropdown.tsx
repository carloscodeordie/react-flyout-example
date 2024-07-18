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
  const buttonIconColor = open ? "#e6e6e7" : "#afafb1";

  return (
    <div className="placers-dropdown-container">
      <button className={buttonClasses} onClick={handleOpen}>
        <PlacersLogo fillColor={buttonIconColor} width={24} />
        <span>{header}</span>
      </button>
      {open ? (
        <PlacersDropdownMenu
          header={header}
          items={items}
          onClose={handleClose}
          displayPoints={true}
        />
      ) : null}
    </div>
  );
};

export default PlacersDropdown;
