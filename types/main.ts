export interface IReview {
  name: string,
  photo: string,
  stars: number,
  text: string,
  when: string
}

export interface IReviewsData {
  updatedAt?: string;
  rating: number;
  total: number;
  mapsUrl?: string;
  reviews: IReview[];
}

export interface Course {
  banner: { background: string; iconBackground: string; iconColor: string; icon: React.ReactNode; title: string; };
  badge: { label: string; style: string; };
  description: string;
  modules: string[];
  price: string;
  priceSub: string;
  actionUrl: (locale: string) => string;
}
