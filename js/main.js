import "/css/style.scss";
import { getSunshine } from "./functions.js";

const main = async () => {
  const data = await getSunshine();
  //   const data = [
  //     {
  //       stad: "Antwerpen",
  //       stats: [
  //         { maand: "januari", zon: 2.0 },
  //         { maand: "februari", zon: 2.8 },
  //         { maand: "maart", zon: 4.4 },
  //         { maand: "april", zon: 6.4 },
  //         { maand: "mei", zon: 7.1 },
  //         { maand: "juni", zon: 7.3 },
  //         { maand: "juli", zon: 7.3 },
  //         { maand: "augustus", zon: 6.8 },
  //         { maand: "september", zon: 5.5 },
  //         { maand: "oktober", zon: 3.8 },
  //         { maand: "november", zon: 2.2 },
  //         { maand: "december", zon: 1.7 },
  //       ],
  //     },
  //     {
  //       stad: "Durbuy",
  //       stats: [
  //         { maand: "januari", zon: 1.8 },
  //         { maand: "februari", zon: 2.7 },
  //         { maand: "maart", zon: 4.1 },
  //         { maand: "april", zon: 5.9 },
  //         { maand: "mei", zon: 6.5 },
  //         { maand: "juni", zon: 6.9 },
  //         { maand: "juli", zon: 7.0 },
  //         { maand: "augustus", zon: 6.6 },
  //         { maand: "september", zon: 5.3 },
  //         { maand: "oktober", zon: 3.6 },
  //         { maand: "november", zon: 2.0 },
  //         { maand: "december", zon: 1.4 },
  //       ],
  //     },
  //     {
  //       stad: "Nieuwpoort",
  //       stats: [
  //         { maand: "januari", zon: 2.0 },
  //         { maand: "februari", zon: 3.0 },
  //         { maand: "maart", zon: 4.5 },
  //         { maand: "april", zon: 6.7 },
  //         { maand: "mei", zon: 7.3 },
  //         { maand: "juni", zon: 7.6 },
  //         { maand: "juli", zon: 7.5 },
  //         { maand: "augustus", zon: 7.1 },
  //         { maand: "september", zon: 5.6 },
  //         { maand: "oktober", zon: 3.9 },
  //         { maand: "november", zon: 2.2 },
  //         { maand: "december", zon: 1.7 },
  //       ],
  //     },
  //   ];
  console.log(data);
  const app = document.querySelector(".app");
  const cityTemplate = document.querySelector("#city").innerHTML;
  const temp = data.map((city) => {
    const headerStart = `<h3>${city.stad} - (%AVERAGE%u)</h3><ul class="app__grid">`;
    let average = 0;
    let total = 0;
    const list = city.stats
      .map((stat, i) => {
        total = total + stat.zon;
        average = total / 12;
        return `<li>${stat.maand} - ${stat.zon}u</li>`;
      }, 0)
      .join("");

    const headerEnd = `</ul>`;
    return (
      headerStart.replace("%AVERAGE%", average.toFixed(2)) + list + headerEnd
    );
  });
  //   let temp = data.map(
  //     (city) =>
  //       //   cityTemplate.replace("%CITY%", city.stad);
  //       //     `<h3>${city.stad}</h3> - (%AVERAGE%u)
  //       // <ul class="app__grid"></ul>`;
  //       city.stad.toUppercase()
  //     //   console.log("city: ", city.stad);
  //     //   console.log(cityTemplate);
  //   );
  //   // .join("");
  console.log(temp.join(""));
  //   app.innerHTML = "<p>test</p>";
  app.insertAdjacentHTML("beforeend", temp.join(""));
};

main();
