import axios from "axios";

export class ImageClass {
  #API_KEY = "30576183-1ebdc1a7ab65c6ad0d15a4f10";
  #BASE_URL = "https://pixabay.com/api/";
  constructor() {
    this.totalHits = 0;
    this.total_pages = 0;
    this.per_page = 12;
  }

  async fetchPhotos(query, page) {
    try {
      const { data } = await axios.get(this.#BASE_URL, {
        params: {
          q: query,
          page: page,
          per_page: this.per_page,
          orientation: "horizontal",
          key: this.#API_KEY,
        },
      });
      return data;
    } catch (err) {
      console.log(err);
      console.log("cathced");
    }
  }
}
