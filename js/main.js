import "/css/style.scss";
import { getSunshine, dummyData } from "./functions.js";
const useDummyData = true;

const main = async () => {
  const data = useDummyData ? dummyData : await getSunshine();

  const app = document.querySelector(".app");
  const cityTemplate = document.querySelector("#city").innerHTML;
  const temp = data.map(({ stad, stats }) => {
    const cityHeader = cityTemplate.replace("%CITY%", stad);
    let average = 0;
    let total = 0;
    const list = stats
      .map(({ zon, maand }, i) => {
        total = total + zon;
        average = total / (i + 1);
        return `<li>${maand} - ${zon}u</li>`;
      }, 0)
      .join("");

    return cityHeader
      .replace("%AVERAGE%", average.toFixed(2))
      .replace("%LIST%", list);
  });
  app.insertAdjacentHTML("beforeend", temp.join(""));
};

main();
