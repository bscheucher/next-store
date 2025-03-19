import CheckoutSteps from "@/components/shared/checkout-steps";

const placeOrderPage = () => {
  return (
    <>
      <CheckoutSteps current={3} />
      <h1 className="py-4 text-2xl">Place Order</h1>
    </>
  );
};

export default placeOrderPage;
