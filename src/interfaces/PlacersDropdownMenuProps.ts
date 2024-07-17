import PlacerItem from "./PlacerItem";

interface PlacersDropdownMenuProps {
  header: string;
  items: PlacerItem[];
  onClose: () => void;
  displayPointsHeader: boolean;
}

export default PlacersDropdownMenuProps;
