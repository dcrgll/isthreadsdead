export default function BuyButton({ id }: { id: string }) {
  return (
    /* @ts-ignore */
    <stripe-buy-button
      buy-button-id={id}
      publishable-key="pk_live_51NEemnFtfr1QUwV6Ac3xe8EPtwnf2nOtlT1OHghCgvcsPJ6N6b9YGEM2yD9nbVn7f58gnRrNvpTlhbKQr3Qft7ij00pO7JJkXZ"
    />
  );
}
