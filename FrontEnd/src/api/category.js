import axiosClient from "./axiosClient";

const END_POINT = {
  // đuôi link
  CATEGORY: "Categories",
};

export const getCategoryAPi = () => {
  return axiosClient.get(`${END_POINT.CATEGORY}`);
};
export const deleteCategoryAPI = (id) => {
  return axiosClient.delete(`${END_POINT.CATEGORY}/${id}`);
};
export const addCategoryAPI = (category) => {
  return axiosClient.post(`${END_POINT.CATEGORY}`, category);
};
export const editCategoryAPI = (category) => {
  return axiosClient.put(`${END_POINT.CATEGORY}`, category);
};
