const apiKey = '16865907-bf97a2667d97724c7c41d2d46';

export default {
  searchQuery: '',
  pageNumber: 1,
  fetchPictures() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.pageNumber}&per_page=12&key=${apiKey}`;
    return fetch(url)
      .then(response => response.json())
      .then(({ hits }) => {
        this.incrementPage();

        return hits;
      });
  },

  resetPage() {
    this.pageNumber = 1;
  },

  incrementPage() {
    this.pageNumber += 1;
  },

  get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  },
};
