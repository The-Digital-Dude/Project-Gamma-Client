import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export const STRIPE_CONFIG = {
  publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api/v1",
};

export const PLAN_DETAILS = {
  starter: {
    name: "Starter Plan",
    price: "$99",
    period: "mo",
    priceAmount: 99,
    features: ["Up to 50 Properties", "Full CRM Access", "5 API Integrations"],
  },
  pro: {
    name: "Pro Plan",
    price: "$199",
    period: "mo",
    priceAmount: 199,
    features: [
      "Up to 150 Properties",
      "Priority Support",
      "Unlimited API Connections",
    ],
  },
  enterprise: {
    name: "Enterprise Plan",
    price: "Custom",
    period: "",
    priceAmount: 0,
    features: [
      "Unlimited Properties",
      "Custom Features",
      "Dedicated Account Manager",
    ],
  },
};

export default stripePromise;
