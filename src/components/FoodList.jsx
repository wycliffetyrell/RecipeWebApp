import { FoodItem } from "./FoodItem";

export const FoodList = ({ foodData, setFoodId }) => {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} setFoodId={setFoodId} />
      ))}
    </div>
  );
};
