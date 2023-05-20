import { Button } from "../../../../Components/Button";
import { RegularText } from "../../../../Components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection(){
  const {cartItemsTotal, cartQuantity} = useCart();
  const cartTotal = cartItemsTotal + DELIVERY_PRICE;

  const formattedItemsTotal = formatMoney(cartItemsTotal);
  const formattedCartTotal = formatMoney(cartTotal);
  const formatDeliveryPrice = formatMoney(DELIVERY_PRICE);

  return(
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R${formattedItemsTotal}</RegularText>
      </div>

      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R${formatDeliveryPrice}</RegularText>
      </div>

      <div>
        <RegularText weight="700" color="subtitle" size="l">Total</RegularText>
        <RegularText weight="700" color="subtitle" size="l">R${formattedCartTotal}</RegularText>
      </div>

      <Button  
      text={"Confirmar Pedido"}
      disabled={cartQuantity<=0}
      type="submit"/>
    </ConfirmationSectionContainer>
  )
}