import { TitleText } from "../../../../Components/Typography";
import { coffees } from "../../../../Data/coffees";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeList, OurCoffeesContainer } from "./styles";

export function OurCoffees(){
  return(
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">Nossos Cafés</TitleText>
      <CoffeeList>
        {coffees.map((coffee)=>(
          <CoffeeCard key={coffee.id} coffee={coffee}/>
        ))}

      </CoffeeList>
      
    </OurCoffeesContainer>
  );
}