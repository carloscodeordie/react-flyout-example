import PlacerItemPoints from "./PlacerItemPoints";

interface PlacerItem {
  name: string;
  position: number;
  caption: string;
  points?: PlacerItemPoints;
}

export default PlacerItem;
