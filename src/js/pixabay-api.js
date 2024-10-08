export function fetchImages(query) {
  const apiKey = '46288557-8df3a9c87285fab012222dbba';
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url)
    .then(response => response.json())
    .then(data => data.hits)
    .catch(error => {
      console.error('Error:', error);
      return [];
    });
}
