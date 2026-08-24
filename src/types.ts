/**
 * Types and interfaces for the HIMUN '26 website
 */

export interface Executive {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  initials: string;
  linkedin?: string;
  twitter?: string;
}

export interface Committee {
  id: string;
  name: string;
  fullName: string;
  topic: string;
  description: string;
  color: string; // red, green, gold
}

export type DelegateType = 'local' | 'international' | 'observer';

export interface RegistrationData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  institution: string;
  delegateType: DelegateType;
  primaryCommittee: string;
  secondaryCommittee: string;
  dietaryRequirements: string;
  selectedAddons: string[]; // ids of addons
  paymentMethod: 'momo' | 'bank';
  paymentReference?: string;
}

export interface Addon {
  id: string;
  name: string;
  price: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}
