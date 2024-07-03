export default async function generateGif(conditonName) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=CSniBsj4zN6xRpbs3LJnJwF34GBQ7oRx&s=${conditonName}`,
      { mode: 'cors' }
    );

    if (!response.ok) {
      throw new Error(`Error Status: ${response.status}`);
    }

    const gifInfo = await response.json();
    return gifInfo.data.images.original.url;
  } catch (error) {
    console.log(error);
  }
}
