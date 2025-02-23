import { Item } from './Item';

export interface ItemStrategy {
  update: (item: Item) => void;
}
