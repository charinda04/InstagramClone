export interface User {
  id: string;
  imageUri: string;
  name: string;
}

export interface Story {
  user: User;
  stories: Array<{
    imageUri: string;
    postedTime: string;
  }>;
}

export interface PostType {
  user: User;
  imageUri: string;
  caption: string;
  likesCount: number;
  postedAt: string;
}
