import { Rating, Album } from "../@type";
export const dataController = {
  /*   testFunction(input: number): any {
    return input * 2;
  }, */
  getTop3Albums(ratings: Rating[], albums: Album[]): Album[] {
    return [albums[0], albums[1], albums[2]];
  },
  getAlbumRating(albumId: number, ratings: Rating[]): number {
    return ratings.reduce((sum, rating) => {
      if (rating.albumId === albumId) {
        sum += rating.rating;
      } else {
        sum += 0;
      }
      return sum;
    }, 0);
  },
};
