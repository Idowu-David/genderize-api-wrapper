import axios from "axios";

export const fetchClassifyData = async (name: string) => {
  const classify = await axios.get("https://api.genderize.io", {
    params: { name },
    timeout: 3000,
  });
  return classify.data;
};
