const calCalculator = () => {
  const man = document.querySelector(".buttons input:checked").value;
  const height = document.querySelector("#height").value;

  const age = document.querySelector("#age").value;
  const weight = document.querySelector("#weight").value;

  const workload = document.querySelector("#workload").value;

  if (man === "männlich") {
    const basicCalories = 66.47 + 13.7 * weight + 5 * height - 6.8 * age;
    const dailyCalories = basicCalories * workload;

    const basicCaloriesKj = basicCalories * 4.184;

    const dailyCaloriesKj = dailyCalories * 4.184;

    document.querySelector(".kcl_grundums").innerHTML =
      basicCalories.toFixed(2);
    document.querySelector(".kcl_gesamtums").innerHTML =
      dailyCalories.toFixed(2);
    document.querySelector(".kj_grundums").innerHTML =
      basicCaloriesKj.toFixed(2);
    document.querySelector(".kj_gesamtums").innerHTML =
      dailyCaloriesKj.toFixed(2);
  } else {
    const basicCalories = 655.1 + 9.6 * weight + 1.8 * height - 4.7 * age;

    const dailyCalories = basicCalories * workload;

    const basicCaloriesKj = basicCalories * 4.184;

    const dailyCaloriesKj = dailyCalories * 4.184;

    document.querySelector(".kcl_grundums").innerHTML =
      basicCalories.toFixed(2);
    document.querySelector(".kcl_gesamtums").innerHTML =
      dailyCalories.toFixed(2);
    document.querySelector(".kj_grundums").innerHTML =
      basicCaloriesKj.toFixed(2);
    document.querySelector(".kj_gesamtums").innerHTML =
      dailyCaloriesKj.toFixed(2);
  }
};

const bgColorMan = document.querySelector(".label_man");
const bgColorWoman = document.querySelector(".label_woman");

const manBgColor = () => {
  bgColorMan.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  bgColorWoman.style.backgroundColor = "transparent";
};
const womanBgColor = () => {
  bgColorWoman.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  bgColorMan.style.backgroundColor = "transparent";
};
