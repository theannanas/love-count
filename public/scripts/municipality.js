(function ($) {
  $(function () {
    $.fn.selectpicker.Constructor.BootstrapVersion = "4";
    let select = $("#municipalitySelect");

    // TODO Order by A-Å before reducing
    const reducer = (accumulator, currentValue) =>
      accumulator +
      `<option value="${currentValue.MunicipalityId}"> ${currentValue.Municipality} </option>`;
    let options = [municipalityData][0]
      .sort((a, b) =>
        a.Municipality > b.Municipality
          ? 1
          : b.Municipality > a.Municipality
          ? -1
          : 0
      )
      .reduce(reducer, "");
    select.append(options);

    select.selectpicker("refresh");
  });
})(jQuery);

let municipalityData = [
  {
    MunicipalityId: 101,
    Municipality: " København",
  },
  {
    MunicipalityId: 147,
    Municipality: " Frederiksberg",
  },
  {
    MunicipalityId: 151,
    Municipality: " Ballerup",
  },
  {
    MunicipalityId: 153,
    Municipality: " Brøndby",
  },
  {
    MunicipalityId: 155,
    Municipality: " Dragør",
  },
  {
    MunicipalityId: 157,
    Municipality: " Gentofte",
  },
  {
    MunicipalityId: 159,
    Municipality: " Gladsaxe",
  },
  {
    MunicipalityId: 161,
    Municipality: " Glostrup",
  },
  {
    MunicipalityId: 163,
    Municipality: " Herlev",
  },
  {
    MunicipalityId: 165,
    Municipality: " Albertslund",
  },
  {
    MunicipalityId: 167,
    Municipality: " Hvidovre",
  },
  {
    MunicipalityId: 169,
    Municipality: " Høje-Taastrup",
  },
  {
    MunicipalityId: 173,
    Municipality: " Lyngby-Taarbæk",
  },
  {
    MunicipalityId: 175,
    Municipality: " Rødovre",
  },
  {
    MunicipalityId: 183,
    Municipality: " Ishøj",
  },
  {
    MunicipalityId: 185,
    Municipality: " Tårnby",
  },
  {
    MunicipalityId: 187,
    Municipality: " Vallensbæk",
  },
  {
    MunicipalityId: 190,
    Municipality: " Furesø",
  },
  {
    MunicipalityId: 201,
    Municipality: " Allerød",
  },
  {
    MunicipalityId: 210,
    Municipality: " Fredensborg",
  },
  {
    MunicipalityId: 217,
    Municipality: " Helsingør",
  },
  {
    MunicipalityId: 219,
    Municipality: " Hillerød",
  },
  {
    MunicipalityId: 223,
    Municipality: " Hørsholm",
  },
  {
    MunicipalityId: 230,
    Municipality: " Rudersdal",
  },
  {
    MunicipalityId: 240,
    Municipality: " Egedal",
  },
  {
    MunicipalityId: 250,
    Municipality: " Frederikssund",
  },
  {
    MunicipalityId: 253,
    Municipality: " Greve",
  },
  {
    MunicipalityId: 259,
    Municipality: " Køge",
  },
  {
    MunicipalityId: 260,
    Municipality: " Halsnæs",
  },
  {
    MunicipalityId: 265,
    Municipality: " Roskilde",
  },
  {
    MunicipalityId: 269,
    Municipality: " Solrød",
  },
  {
    MunicipalityId: 270,
    Municipality: " Gribskov",
  },
  {
    MunicipalityId: 306,
    Municipality: " Odsherred",
  },
  {
    MunicipalityId: 316,
    Municipality: " Holbæk",
  },
  {
    MunicipalityId: 320,
    Municipality: " Faxe",
  },
  {
    MunicipalityId: 326,
    Municipality: " Kalundborg",
  },
  {
    MunicipalityId: 329,
    Municipality: " Ringsted",
  },
  {
    MunicipalityId: 330,
    Municipality: " Slagelse",
  },
  {
    MunicipalityId: 336,
    Municipality: " Stevns",
  },
  {
    MunicipalityId: 340,
    Municipality: " Sorø",
  },
  {
    MunicipalityId: 350,
    Municipality: " Lejre",
  },
  {
    MunicipalityId: 360,
    Municipality: " Lolland",
  },
  {
    MunicipalityId: 370,
    Municipality: " Næstved",
  },
  {
    MunicipalityId: 376,
    Municipality: " Guldborgsund",
  },
  {
    MunicipalityId: 390,
    Municipality: " Vordingborg",
  },
  {
    MunicipalityId: 400,
    Municipality: " Bornholm",
  },
  {
    MunicipalityId: 410,
    Municipality: " Middelfart",
  },
  {
    MunicipalityId: 411,
    Municipality: " Christiansø",
  },
  {
    MunicipalityId: 420,
    Municipality: " Assens",
  },
  {
    MunicipalityId: 430,
    Municipality: " Faaborg-Midtfyn",
  },
  {
    MunicipalityId: 440,
    Municipality: " Kerteminde",
  },
  {
    MunicipalityId: 450,
    Municipality: " Nyborg",
  },
  {
    MunicipalityId: 461,
    Municipality: " Odense",
  },
  {
    MunicipalityId: 479,
    Municipality: " Svendborg",
  },
  {
    MunicipalityId: 480,
    Municipality: " Nordfyns",
  },
  {
    MunicipalityId: 482,
    Municipality: " Langeland",
  },
  {
    MunicipalityId: 492,
    Municipality: " Ærø",
  },
  {
    MunicipalityId: 510,
    Municipality: " Haderslev",
  },
  {
    MunicipalityId: 530,
    Municipality: " Billund",
  },
  {
    MunicipalityId: 540,
    Municipality: " Sønderborg",
  },
  {
    MunicipalityId: 550,
    Municipality: " Tønder",
  },
  {
    MunicipalityId: 561,
    Municipality: " Esbjerg",
  },
  {
    MunicipalityId: 563,
    Municipality: " Fanø",
  },
  {
    MunicipalityId: 573,
    Municipality: " Varde",
  },
  {
    MunicipalityId: 575,
    Municipality: " Vejen",
  },
  {
    MunicipalityId: 580,
    Municipality: " Aabenraa",
  },
  {
    MunicipalityId: 607,
    Municipality: " Fredericia",
  },
  {
    MunicipalityId: 615,
    Municipality: " Horsens",
  },
  {
    MunicipalityId: 621,
    Municipality: " Kolding",
  },
  {
    MunicipalityId: 630,
    Municipality: " Vejle",
  },
  {
    MunicipalityId: 657,
    Municipality: " Herning",
  },
  {
    MunicipalityId: 661,
    Municipality: " Holstebro",
  },
  {
    MunicipalityId: 665,
    Municipality: " Lemvig",
  },
  {
    MunicipalityId: 671,
    Municipality: " Struer",
  },
  {
    MunicipalityId: 706,
    Municipality: " Syddjurs",
  },
  {
    MunicipalityId: 707,
    Municipality: " Norddjurs",
  },
  {
    MunicipalityId: 710,
    Municipality: " Favrskov",
  },
  {
    MunicipalityId: 727,
    Municipality: " Odder",
  },
  {
    MunicipalityId: 730,
    Municipality: " Randers",
  },
  {
    MunicipalityId: 740,
    Municipality: " Silkeborg",
  },
  {
    MunicipalityId: 741,
    Municipality: " Samsø",
  },
  {
    MunicipalityId: 746,
    Municipality: " Skanderborg",
  },
  {
    MunicipalityId: 751,
    Municipality: " Aarhus",
  },
  {
    MunicipalityId: 756,
    Municipality: " Ikast-Brande",
  },
  {
    MunicipalityId: 760,
    Municipality: " Ringkøbing-Skjern",
  },
  {
    MunicipalityId: 766,
    Municipality: " Hedensted",
  },
  {
    MunicipalityId: 773,
    Municipality: " Morsø",
  },
  {
    MunicipalityId: 779,
    Municipality: " Skive",
  },
  {
    MunicipalityId: 787,
    Municipality: " Thisted",
  },
  {
    MunicipalityId: 791,
    Municipality: " Viborg",
  },
  {
    MunicipalityId: 810,
    Municipality: " Brønderslev",
  },
  {
    MunicipalityId: 813,
    Municipality: " Frederikshavn",
  },
  {
    MunicipalityId: 820,
    Municipality: " Vesthimmerlands",
  },
  {
    MunicipalityId: 825,
    Municipality: " Læsø",
  },
  {
    MunicipalityId: 840,
    Municipality: " Rebild",
  },
  {
    MunicipalityId: 846,
    Municipality: " Mariagerfjord",
  },
  {
    MunicipalityId: 849,
    Municipality: " Jammerbugt",
  },
  {
    MunicipalityId: 851,
    Municipality: " Aalborg",
  },
  {
    MunicipalityId: 860,
    Municipality: " Hjørring",
  },
];
