export interface LoginResponse {
  message: string;
  token: string;
  username: string;
  expiresIn: number;
}

export interface Article {
  title: string;
  comments: string;
  imageBuffer: Buffer;
  imageMimeType: string;
  datePosted: Date;
  username: string;
}
