import { FoodList } from "./components/FoodList";
import { Nav } from "./components/Nav";
import { Search } from "./components/Search";
import { useState } from "react";
import "./App.css";
import { Container } from "./components/Container";
import { InnerContainer } from "./components/InnerContainer";
import { FoodDetails } from "./components/FoodDetials";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("658615");
  return (
    <div className="">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
