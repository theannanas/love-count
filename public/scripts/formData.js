async function getMatches() {
  let ageRange = GetAgeRange();
  let municipality = GetSelectedMunicipalities();

  let totalMaleAndFemale = await fetchDataFromDst(municipality, ageRange);
  let matches = CalculateMatches(totalMaleAndFemale, GetDesiredGender());

  let matchElement = document.getElementById("matches");
  matchElement.textContent = matches.toString() + "*";

  let newNode = document.getElementById("disclaimer");
  newNode.textContent = "* this is only an estimate of single people";
}

function GetAgeRange() {
  let ageValues = document
    .getElementById("ageSlider")
    .noUiSlider.get()
    .map(Number);
  if (ageValues[0] === ageValues[1]) return ageValues[0];
  return [...new Array(ageValues[1] - ageValues[0] + 1).keys()]
    .map((i) => i + ageValues[0])
    .join(",");
}

function GetSelectedMunicipalities() {
  let codes = $("#municipalitySelect").val();
  if (!Array.isArray(codes)) {
    codes = [codes];
  }
  return codes;
}

function GetDesiredGender() {
  let fChecked = document.getElementById("desiredGenderFemale").checked;
  let mChecked = document.getElementById("desiredGenderMale").checked;

  // TODO change to simple int array. This is NOT posted to dst
  if (fChecked && mChecked) return '1","2'; // 1 = mænd, 2 = kvinder. Rækkefølgen her afgør rækkefølgen på data
  if (fChecked) return "2";
  if (mChecked) return "1";
  alert("Please select at least one desired gender");
}

/**
 *
 * @param totalMaleAndFemale list with males on index 0 and female at index 1
 * @param desiredGender string that contains 1 for male and 2 for female
 */
function CalculateMatches(totalMaleAndFemale, desiredGender) {
  let desiresMales = desiredGender.includes("1");
  let desiresFemales = desiredGender.includes("2");

  let singleWomen = totalMaleAndFemale[1] * pctWomenSingleUnmarried;
  let singleMen = totalMaleAndFemale[0] * pctMenSingleUnmarried;

  let matches = 0;
  if (!desiresMales && !desiresFemales) return 0;

  if (document.getElementById("ownGenderFemale").checked) {
    if (desiresFemales) {
      // seeking female - alle les og bi-kvinder
      matches += singleWomen * pctWomanLikesWoman;
    }
    if (desiresMales) {
      // seeking male - alle alle hetero og bi-mænd
      matches += singleMen * pctManLikesWoman; // 97 percent
    }
    // seeking male and female - sum af de to ovenstående
  } else if (document.getElementById("ownGenderMale").checked) {
    if (desiresFemales) {
      matches += singleWomen * pctWomanLikesMan; // 94 percent
    }
    if (desiresMales) {
      matches += singleMen * pctManLikesMan; // 3 percent
    }
  } else {
    alert(
      "Oops, your own gender is either not selected or the gender options is not implemented yet"
    );
  }
  return Math.floor(matches);
}
