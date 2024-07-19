export interface LogoProps {
  fillColor: string;
  width: number;
}

export interface PlacerItemPoints {
  points: number;
  wins: number;
  loses: number;
}

export interface PlacerItem {
  name: string;
  position: string;
  caption: string;
  points?: PlacerItemPoints;
}

export interface PlacersDropdownMenuItemProps {
  item: PlacerItem;
  displayPoints?: boolean;
}

export interface PlacersDropdownMenuProps {
  header: string;
  items: PlacerItem[];
  onClose: () => void;
  displayPoints: boolean;
}

export interface PlacersDropdownProps {
  header: string;
  items: PlacerItem[];
}
