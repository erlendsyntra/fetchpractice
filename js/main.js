import "/css/style.scss";
import { getSunshine, dummyData } from "./functions.js";
const useDummyData = false;

const main = async () => {
  const data = useDummyData ? dummyData : await getSunshine();

  const app = document.querySelector(".app");
  const cityTemplate = document.querySelector("#city").innerHTML;
  const temp = data.map((city) => {
    const cityHeader = cityTemplate.replace("%CITY%", city.stad);
    let average = 0;
    let total = 0;
    const list = city.stats
      .map((stat, i) => {
        total = total + stat.zon;
        average = total / (i + 1);
        return `<li>${stat.maand} - ${stat.zon}u</li>`;
      }, 0)
      .join("");

    return cityHeader
      .replace("%AVERAGE%", average.toFixed(2))
      .replace("%LIST%", list);
  });
  app.insertAdjacentHTML("beforeend", temp.join(""));
};

main();
