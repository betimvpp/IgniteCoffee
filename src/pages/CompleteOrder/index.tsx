import { SelectedCoffees } from "./components/SelectedCoffees";
import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { CompleteOrderContainer } from "./styles";
import * as zod from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import {useForm, FormProvider} from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmOrderFormValidatorSchema = zod.object({
  cep: zod.string().min(8, "Informe o CEP!").max(8, "CEP inválido!").length(8),
  street: zod.string().min(1, "Informe a Rua"),
  number: zod.string().min(1, "Informe o Número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  uf: zod.string().min(1, "Informe a UF"),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    },
  }),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidatorSchema>;

type ConfirmOrderFormData = OrderData;

export function CompleteOrder(){
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidatorSchema)
  });

  const {handleSubmit} = confirmOrderForm;

  const navigate = useNavigate();
  const {cleanCart} = useCart();

  function handleConfirmOrder(data:ConfirmOrderFormData){
    navigate("/orderConfirmed", {
      state: data,
    });
    cleanCart();
  }

  return(
    <FormProvider {...confirmOrderForm}>
      <CompleteOrderContainer 
      className="container" 
      onSubmit={handleSubmit(handleConfirmOrder)}>
        <CompleteOrderForm/>
        <SelectedCoffees/>
      </CompleteOrderContainer>
    </FormProvider>
  )
}