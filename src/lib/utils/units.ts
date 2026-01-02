import type { LS_TYPES } from "$lib/wrappers/localStorage";

function formatNum(val: number): string {
  const str = val.toFixed(2);
  if (str.endsWith(".00")) return str.substring(0, str.length - 3);
  return str;
}
export function unitConversion(
  u:
    | undefined
    | LS_TYPES["aqi_and_units"]["units"][string]["conversion_strategy"],
  value: number,
): string {
  if (!u) return formatNum(value);
  if (u.type === "x") {
    return formatNum(value);
  } else if (u.type === "mx") {
    return formatNum(value * u.m);
  } else if (u.type === "mx+c") {
    return formatNum(value * u.m + u.c);
  } else {
    console.log(u);
    throw new Error("Unimplemented Conversion");
  }
}
export function unitInversion(
  u:
    | undefined
    | LS_TYPES["aqi_and_units"]["units"][string]["conversion_strategy"],
  value: string,
): number {
  if (!u) return +value;
  if (u.type === "x") {
    return +value;
  } else if (u.type === "mx") {
    return +value / u.m;
  } else if (u.type === "mx+c") {
    return (+value - u.c) / u.m;
  } else {
    console.log(u);
    throw new Error("Unimplemented Conversion");
  }
}
