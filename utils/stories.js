// @flow

const toPixels = (x: Number): Number => x * 16;

export const toPixelsFromRemUnits = (x: Number): String =>
  toPixels(x.replace("rem", ""));

export const range = (start: Number, end: Number): Array =>
  Array(Number(end) - Number(start))
    .fill(start)
    .map((x, i) => x + i);
