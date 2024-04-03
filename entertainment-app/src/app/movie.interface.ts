interface ITrending {
  small: string;
  medium?: string;
  large: string;
}

interface IThumbnail {
  trending: ITrending;
  regular: ITrending;
}

export interface IMovie {
  title: string;
  thumbnail: IThumbnail;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}
