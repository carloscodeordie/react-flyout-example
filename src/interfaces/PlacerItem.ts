import PlacerItemPoints from "./PlacerItemPoints";

interface PlacerItem {
  name: string;
  position: string;
  caption: string;
  points?: PlacerItemPoints;
}

export default PlacerItem;
