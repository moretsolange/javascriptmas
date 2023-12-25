import { HfInference } from "@huggingface/inference";
const hf = new HfInference();
import { blobToBase64, dataURLtoFile } from "/utils";

const dialogModal = document.getElementById("dialog-modal");
dialogModal.show();

document.addEventListener("submit", function (e) {
  e.preventDefault();
  const imageDescription = document.getElementById("user-input").value;
  dialogModal.close();
  generateImage(imageDescription);
});

async function generateImage(imageToGenerate) {
  toggleLoader();
  const response = await hf.textToImage({
    inputs: imageToGenerate,
    model: "stabilityai/stable-diffusion-2-1",
  });
  const imageUrl = await blobToBase64(response);
  generateAltText(imageUrl);
  setTimeout(toggleLoader, 2000);
}

async function generateAltText(imageUrl) {
  const file = dataURLtoFile(imageUrl);
  const altText = await hf.imageToText({
    data: file,
    model: "Salesforce/blip-image-captioning-base",
  });
  renderImage(imageUrl, altText.generated_text);
}

function renderImage(imageUrl, altText) {
  console.log(altText);
  const imageContainer = document.getElementById("image-container");
  imageContainer.innerHTML = "";
  const image = document.createElement("img");
  image.src = imageUrl;
  image.alt = altText;
  imageContainer.appendChild(image);
}

function toggleLoader() {
  let loader = document.querySelector(".loader-container");
  if (loader.style.display === "none") {
    loader.style.display = "flex";
  } else {
    loader.style.display = "none";
  }
}
