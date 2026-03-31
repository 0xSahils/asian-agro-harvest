import { AuthSession } from './types';

// Auth utilities for local development
// When you connect Supabase, replace these with actual Supabase auth

const SESSION_STORAGE_KEY = 'admin_session';

export function setAuthSession(session: AuthSession) {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
  }
}

export function getAuthSession(): AuthSession | null {
  if (typeof window !== 'undefined') {
    const stored = sessionStorage.getItem(SESSION_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  }
  return null;
}

export function clearAuthSession() {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem(SESSION_STORAGE_KEY);
  }
}

export async function hashPassword(password: string): Promise<string> {
  // This is a placeholder. Use bcrypt in your backend.
  // For now, this is just base64 encoding for demo purposes
  return Buffer.from(password).toString('base64');
}

export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  // Placeholder verification. Use bcrypt in production.
  const encoded = Buffer.from(password).toString('base64');
  return encoded === hash;
}
