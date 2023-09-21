import create from "zustand";

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
const setLocalStorage = (key, value) =>
  window.localStorage.setItem(key, JSON.stringify(value));

export const useStore = create((set, get) => ({
  texture: "dirt",
  cubes: getLocalStorage("cubes") || [],
  addCube: (x, y, z) => {
    set((prev) => ({
      cubes: [
        ...prev.cubes,
        {
          key: crypto.randomUUID(),
          pos: [x, y, z],
          texture: prev.texture,
        },
      ],
    }));
  },
  removeCube: (x, y, z) => {
    set((prev) => ({
      cubes: prev.cubes.filter((cube) => {
        const [X, Y, Z] = cube.pos;

        return X !== x || Y !== y || Z !== z;
      }),
    }));
  },
  isCubeAt: (x, y, z) => {
    // Access the cubes state directly from the store
    const cubes = get().cubes;
    if(cubes.length === 0) return false

    return cubes.some((cube) => {
      const [X, Y, Z] = cube.pos;
      return X === x && Y === y && Z === z;
    });
  },
  setTexture: (texture) => {
    set(() => ({
      texture,
    }));
  },
  saveWorld: () => {
    set((prev) => {
      setLocalStorage("cubes", prev.cubes);
    });
  },
  resetWorld: () => {
    set(() => ({
      cubes: [],
    }));
  },
}));
