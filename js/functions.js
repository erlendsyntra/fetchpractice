export const getSunshine = async () => {
  const response = await fetch("https://ap-examen.surge.sh/zon.json");
  const data = await response.json();
  return data;
};

export const dummyData = [
  {
    stad: "Antwerpen",
    stats: [
      { maand: "januari", zon: 2.0 },
      { maand: "februari", zon: 2.8 },
      { maand: "maart", zon: 4.4 },
      { maand: "april", zon: 6.4 },
      { maand: "mei", zon: 7.1 },
      { maand: "juni", zon: 7.3 },
      { maand: "juli", zon: 7.3 },
      { maand: "augustus", zon: 6.8 },
      { maand: "september", zon: 5.5 },
      { maand: "oktober", zon: 3.8 },
      { maand: "november", zon: 2.2 },
      { maand: "december", zon: 1.7 },
    ],
  },
  {
    stad: "Durbuy",
    stats: [
      { maand: "januari", zon: 1.8 },
      { maand: "februari", zon: 2.7 },
      { maand: "maart", zon: 4.1 },
      { maand: "april", zon: 5.9 },
      { maand: "mei", zon: 6.5 },
      { maand: "juni", zon: 6.9 },
      { maand: "juli", zon: 7.0 },
      { maand: "augustus", zon: 6.6 },
      { maand: "september", zon: 5.3 },
      { maand: "oktober", zon: 3.6 },
      { maand: "november", zon: 2.0 },
      { maand: "december", zon: 1.4 },
    ],
  },
  {
    stad: "Nieuwpoort",
    stats: [
      { maand: "januari", zon: 2.0 },
      { maand: "februari", zon: 3.0 },
      { maand: "maart", zon: 4.5 },
      { maand: "april", zon: 6.7 },
      { maand: "mei", zon: 7.3 },
      { maand: "juni", zon: 7.6 },
      { maand: "juli", zon: 7.5 },
      { maand: "augustus", zon: 7.1 },
      { maand: "september", zon: 5.6 },
      { maand: "oktober", zon: 3.9 },
      { maand: "november", zon: 2.2 },
      { maand: "december", zon: 1.7 },
    ],
  },
];
