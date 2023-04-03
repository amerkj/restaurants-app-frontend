export interface Ad {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface Featured {
  id: number;
  name: string;
  image: string;
  restaurantCount: number;
}

export interface Resturant {
  id: number;
  name: string;
  address: string;
  phone: string;
  latitude: number;
  longitude: number;
  image: string;
  advertisements: Ad[];
  online?: boolean;
}

export interface FilterRequestModel {
  name: string;
  location: string;
  cuisineTypeId: number|null;
}

export interface Cuisine {
  name: string;
  id: number;
}
