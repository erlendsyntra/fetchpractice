import "/css/style.scss";
import { getSunshine, dummyData, getAvg } from "./functions.js";
const useDummyData = true;

const main = async () => {
  const data = useDummyData ? dummyData : await getSunshine();

  const app = document.querySelector(".app");
  const cityTemplate = document.querySelector("#city").innerHTML;
  const temp = data.map(({ stad, stats }) => {
    const cityHeader = cityTemplate
      .replace("%CITY%", stad)
      .replace("%AVERAGE%", getAvg(stats.map((el) => el.zon)).toFixed(2));
    let total = 0;
    const list = stats
      .map(({ zon, maand }, i) => {
        total = total + zon;
        return `<li>${maand} - ${zon}u</li>`;
      }, 0)
      .join("");

    return cityHeader.replace("%LIST%", list);
  });
  app.insertAdjacentHTML("beforeend", temp.join(""));
};

main();
