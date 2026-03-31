export type Plan = 'free' | 'pro';

export interface UserProfile {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  plan: Plan;
  analyses_count: number;
  analyses_limit: number;
  stripe_customer_id?: string;
  subscription_status?: string;
  created_at: string;
}

export interface Analysis {
  id: string;
  user_id: string;
  image_url: string;
  status: 'processing' | 'completed' | 'failed';
  result?: AnalysisResult;
  is_favorite: boolean;
  created_at: string;
}

export interface AnalysisResult {
  id: string;
  font_name: string;
  confidence: number;
  is_edited: boolean;
  weight: string;
  tracking: string;
  distortion_degree: string;
  details?: {
    category: 'Serif' | 'Sans-serif' | 'Display' | 'Monospace';
    weight: string;
    tracking: string;
    distortion: string;
  };
  alternative_fonts: Array<{
    name: string;
    similarity: number;
    provider?: string;
    link?: string;
    type?: string;
  }>;
  google_font_match?: {
    name: string;
    link: string;
  };
  typography_reading: string;
}

export interface SiteStats {
  total_users: number;
  total_analyses: number;
  free_users: number;
  pro_users: number;
  estimated_revenue: number;
  conversion_rate: number;
}
