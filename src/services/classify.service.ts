import axios from "axios";

export const fetchClassifyData = async (name: string) => {
  const classify = await axios.get(`https://api.genderize.io?name=${name}`);
  return classify.data;
};
