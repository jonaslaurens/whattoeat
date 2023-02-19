import foodOptions from './foodOptions';

export const food = foodOptions;

export const segmentColors = getRandomColor(foodOptions.length);

function getRandomColor (numColors = 1) {
  const colors = [];
  const colorRange = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

  while (colors.length < numColors) {
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += colorRange[Math.floor(Math.random() * colorRange.length)];
    }

    if (!isColorCloseToGrayOrWhite(color)) {
      colors.push(color);
    }
  }

  return numColors === 1 ? colors[0] : colors;
}

function isColorCloseToGrayOrWhite(color) {
  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  };

  const { r, g, b } = hexToRgb(color);

  const grayThreshold = 30;
  const whiteThreshold = 200;

  const isCloseToGray = Math.abs(r - g) < grayThreshold && Math.abs(r - b) < grayThreshold && Math.abs(g - b) < grayThreshold;
  const isCloseToWhite = r > whiteThreshold && g > whiteThreshold && b > whiteThreshold;

  return isCloseToGray || isCloseToWhite;
}
