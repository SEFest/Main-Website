import type { User } from './user'

export interface Mentor extends Omit<User, 'professional'> {
  secondName: string
  category?: string
}
