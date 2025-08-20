import axios from 'axios';
import { STRIPE_CONFIG } from '@/config/stripe';
import type { SignupFormData } from '@/components/SignupForm';

const api = axios.create({
  baseURL: STRIPE_CONFIG.apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface SubscriptionResponse {
  status: string;
  message: string;
  data: {
    agency: {
      id: string;
      companyName: string;
      contactPerson: string;
      email: string;
      planType: string;
      status: string;
    };
    checkout: {
      sessionId: string;
      url: string;
    };
  };
}

export interface SubscriptionStatusResponse {
  status: string;
  data: {
    subscription: {
      status: string;
      planType: string;
      billingPeriod: string;
      subscriptionStartDate: string | null;
      subscriptionEndDate: string | null;
      trialEndsAt: string | null;
      limits: {
        properties: number;
        apiCalls: number;
      };
      canCreateProperty: boolean;
      hasActiveSubscription: boolean;
    };
    stripe: {
      currentPeriodStart: string;
      currentPeriodEnd: string;
      cancelAtPeriodEnd: boolean;
    } | null;
  };
}

class SubscriptionService {
  /**
   * Register a new agency with subscription
   */
  async registerWithSubscription(formData: SignupFormData): Promise<SubscriptionResponse> {
    try {
      const response = await api.post('/subscription/register-with-subscription', formData);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data.message || 'Registration failed');
      }
      throw new Error('Network error occurred');
    }
  }

  /**
   * Get subscription status for authenticated agency
   */
  async getSubscriptionStatus(token: string): Promise<SubscriptionStatusResponse> {
    try {
      const response = await api.get('/subscription/status', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data.message || 'Failed to fetch subscription status');
      }
      throw new Error('Network error occurred');
    }
  }

  /**
   * Create billing portal session for managing subscription
   */
  async createPortalSession(token: string): Promise<{ url: string }> {
    try {
      const response = await api.post('/subscription/create-portal-session', {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data.message || 'Failed to create billing portal session');
      }
      throw new Error('Network error occurred');
    }
  }

  /**
   * Redirect to Stripe Checkout
   */
  redirectToCheckout(checkoutUrl: string): void {
    window.location.href = checkoutUrl;
  }

  /**
   * Check if subscription is active
   */
  isSubscriptionActive(status: string): boolean {
    return ['active', 'trial'].includes(status);
  }

  /**
   * Format plan name for display
   */
  formatPlanName(planType: string): string {
    const planNames = {
      starter: 'Starter Plan',
      pro: 'Pro Plan',
      enterprise: 'Enterprise Plan'
    };
    return planNames[planType as keyof typeof planNames] || planType;
  }

  /**
   * Format subscription status for display
   */
  formatSubscriptionStatus(status: string): string {
    const statusMap = {
      trial: 'Free Trial',
      active: 'Active',
      past_due: 'Past Due',
      canceled: 'Cancelled',
      unpaid: 'Unpaid',
      incomplete: 'Incomplete'
    };
    return statusMap[status as keyof typeof statusMap] || status;
  }

  /**
   * Calculate days remaining in trial
   */
  calculateTrialDaysRemaining(trialEndsAt: string): number {
    const trialEnd = new Date(trialEndsAt);
    const now = new Date();
    const diffTime = trialEnd.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(0, diffDays);
  }

  /**
   * Check if trial is ending soon (within 3 days)
   */
  isTrialEndingSoon(trialEndsAt: string): boolean {
    const daysRemaining = this.calculateTrialDaysRemaining(trialEndsAt);
    return daysRemaining <= 3 && daysRemaining > 0;
  }
}

export const subscriptionService = new SubscriptionService();
export default subscriptionService;