import { LucideIcon } from 'lucide-react';

export interface StepDetail {
  id: number;
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}