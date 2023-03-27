import { encode, decode,isBlurhashValid } from 'blurhash';

const loadImage = async src =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = (...args) => reject(args);
    img.src = src;
  });

const getImageData = (image) => {
  const canvas = document.createElement('canvas');
  canvas.width = image.width;
  canvas.height = image.height;
  const context = canvas.getContext('2d');
  context.drawImage(image, 0, 0);
  return context.getImageData(0, 0, image.width, image.height);
};

const encodeImageToBlurhash = async imageUrl => {
  const image = await loadImage(imageUrl);
  image.crossOrigin = `Anonymous`;
  image.width = 500;
  image.height = 500;
  const imageData = getImageData(image);
  return encode(imageData.data, imageData.width, imageData.height, 4, 4);
};

const encodesPixelsToABlurhashString= async (img) => {
  const blurHash = await encodeImageToBlurhash(img);
  const validRes = isBlurhashValid(blurHash);
  return blurHash
};

export {encodesPixelsToABlurhashString}
