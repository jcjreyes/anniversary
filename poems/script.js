let starrySky = document.querySelector(".starry-sky");

const randomSize = (range, unit) => {
  let size = Math.floor(Math.random() * range) + 1;
  return `${size}${unit}`;
};

const makeStar = (size) => {
  let starCount = 100;
  for (let i = 0; i < starCount; i++) {
    let star = document.createElement("div");
    star.classList.add(`star${i}`);
    let starSize = randomSize(size, "px");
    console.log(starSize);

    star.style["width"] = starSize;
    star.style["height"] = starSize;
    star.style["background-color"] = "#F5E0DC";
    star.style["border-radius"] = "2px";

    star.style["left"] = randomSize(window.innerWidth, "px");
    star.style["top"] = randomSize(window.innerHeight, "px");
    star.style["position"] = "absolute";
    starrySky.appendChild(star);
  }
};

makeStar(3);
