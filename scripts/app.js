const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const url = "http://aws.random.cat/meow";

async function fecthHandler() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    image.src = data.file;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
button.addEventListener("click", () => {
  let isLoaded = image.complete;
  if(isLoaded)
  fecthHandler();
});
