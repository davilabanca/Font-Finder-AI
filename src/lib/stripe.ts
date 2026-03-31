import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY || '';

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2023-10-16' as any,
  appInfo: {
    name: 'Font Finder AI',
    version: '0.1.0',
  },
});

/**
 * Creates a Stripe Checkout Session for the PRO plan.
 */
export async function createCheckoutSession(customerId: string, priceId: string) {
  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/billing?canceled=true`,
  });

  return session;
}

/**
 * Handles Stripe Webhooks for subscription updates.
 */
export async function handleStripeWebhook(event: Stripe.Event) {
  // Logic to update user plan in Supabase
  switch (event.type) {
    case 'customer.subscription.created':
    case 'customer.subscription.updated':
      // Update user to PRO
      break;
    case 'customer.subscription.deleted':
      // Downgrade user to FREE
      break;
  }
}
