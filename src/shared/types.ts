export interface User {
  id: string;
  imageUri: string;
  name: string;
}

export interface StoryObject {
  imageUri: string;
  postedTime: string;
}

export interface UserStory {
  user: User;
  stories: Array<StoryObject>;
}

export interface PostType {
  user: User;
  imageUri: string;
  caption: string;
  likesCount: number;
  postedAt: string;
}
