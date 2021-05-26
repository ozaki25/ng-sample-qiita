export interface QiitaComment {
  id: string;
  body: string;
  user: {
    id: string;
    profile_image_url: string;
  };
}
