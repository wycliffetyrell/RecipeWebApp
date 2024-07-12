import { Item } from "./Item";

export const ItemList = ({ food, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        food.extendedIngredients.map((item) => <Item item={item} />)
      )}
    </div>
  );
};
