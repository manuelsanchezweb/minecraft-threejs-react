import { TextureLoader, NearestFilter, RepeatWrapping } from "three";

import { dirtImg, grassImg, glassImg, woodImg, logImg } from "./images.js";

const dirtTexture = new TextureLoader().load(dirtImg);
const logTexture = new TextureLoader().load(logImg);
const grassTexture = new TextureLoader().load(grassImg);
const glassTexture = new TextureLoader().load(glassImg);
const woodTexture = new TextureLoader().load(woodImg);
const groundTexture = new TextureLoader().load(grassImg);

dirtTexture.magFilter = NearestFilter;
dirtTexture.minFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
logTexture.minFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
grassTexture.minFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
glassTexture.minFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
woodTexture.minFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;
groundTexture.minFilter = NearestFilter;
groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping; 

export {
  dirtTexture,
  logTexture,
  grassTexture,
  glassTexture,
  woodTexture,
  groundTexture,
};
