import { url } from "../api/api";

export const AddFavorite = async ({ id, car }) => {
  const type = car ? "car" : "house";

  console.log(id);

  try {
    const response = await url.get(`main/like/${id}/${type}/set_like/`);
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error setting favorite:", error);
  }
};

export const RemoveFavorite = async ({ id, car }) => {
  const type = car ? "car" : "house";
  const data = [];

  try {
    const response = await url.get(`main/like/${id}/${type}/remove_like/`);
    data.push(response.data);
  } catch (error) {
    console.log(error);
  }

  return data;
};
