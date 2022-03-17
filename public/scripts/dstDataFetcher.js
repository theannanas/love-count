/**
 *
 * @param municipality list of municipality codes
 * @param ageRange
 * @returns both male and female population in municipalities and in the agerange
 */
async function fetchDataFromDst(municipality, ageRange) {
  const format = "JSONSTAT"; // JSONSTAT, CSV

  const url = `https://api.statbank.dk/v1/data`;
  const response = await fetch(url, {
    method: "POST",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({
      table: "FOLK1A",
      format: format,
      valuePresentation: "Value",
      variables: [
        {
          code: "OMRÅDE",
          values: municipality,
        },
        {
          code: "ALDER",
          values: ["sum(" + ageRange + ")"] /* Sum of entire agerange */,
        },
        {
          code: "KØN",
          values: ["1", "2"] /* 1 = male, 2 = female, sum(1,2) = both */,
        },
        {
          code: "CIVILSTAND",
          values: ["sum(U,E,F)"],
        },
      ],
    }),
  });
  const data = await response.json();
  console.log(data);
  console.log(data.dataset.value);
  return data.dataset.value;
}
