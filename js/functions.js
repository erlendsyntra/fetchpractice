export const getSunshine = async () => {
  const response = await fetch("https://ap-examen.surge.sh/zon.json");
  const data = await response.json();
  return data;
};
