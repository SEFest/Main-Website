import type { User } from './user'

export interface Mentor extends Omit<User, 'professional'> {
  category?: string
  description?: string
}
