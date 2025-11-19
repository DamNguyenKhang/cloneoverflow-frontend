export default interface User {
  id: string;
  fullName: string;
  dateOfBirth?: string | null;
  isActive: boolean;
  createdAt: string;
  email?: string;
}

export interface IUserMenu {
  username: string;
  avatar: string;
  post: string;
  point: string;
  level: string;
  reactionScore: string;
}
