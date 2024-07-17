import PlacerItem from "./PlacerItem";

interface PlacersDropdownMenuProps {
  header: string;
  items: PlacerItem[];
  onClose: () => void;
  displayPoints: boolean;
}

export default PlacersDropdownMenuProps;
