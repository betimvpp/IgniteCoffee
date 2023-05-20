import { TitleText } from "../../../../Components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { CoffeeCard } from "../CoffeeCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees(){
  const {cartItems} = useCart()
  return(
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
         Cafés Selecionados
      </TitleText>
     
      <DetailsContainer>
        {cartItems.map((item)=>(
          <CoffeeCard key={item.id} coffee={item}/>
        ))}

        <ConfirmationSection/>
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}