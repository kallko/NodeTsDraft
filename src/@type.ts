export interface Artist {
  id: number;
  lastName: string;
  firstName: string;
  birth: string;
  death: string;
}

export interface User {
  id: number;
  name: string;
}

export interface Album {
  id: number;
  title: string;
  artists: number[];
  year: number;
  duration: number;
}

export interface Rating {
  id: number;
  albumId: number;
  userId: number;
  rating: number;
}

export interface Collection {
  id: number;
  userId: number;
  albums: number[];
  title: string;
}
