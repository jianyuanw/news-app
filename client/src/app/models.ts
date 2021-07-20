export interface LoginResponse {
  message: string;
  token: string;
  username: string;
  expiresIn: number;
}

export interface Article {
  _id: string;
  title: string;
  comments: string;
  imageBuffer: Buffer;
  imageMimeType: string;
  datePosted: Date;
  username: string;
  imageDataUrl: string;
}
