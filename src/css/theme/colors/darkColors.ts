import { AssetsType, CollorsType } from "./types";

export const darkColors: CollorsType = {
  grey: {
    1: "#1f2028",
    2: "#2e3039",
    3: "#3a3d4a",
    4: "#4B5563",
    5: "#6B7280",
    6: "#9CA3AF",
    7: "#D1D5DB",
    8: "#E5E7EB",
    9: "#F3F4F6",
    10: "#F9FAFB",
  },
  red: {
    1: "#271a28",
    2: "#3f212d",
    3: "#542934",
    4: "#75323a",
    5: "#a23e43",
    6: "#cf494c",
    7: "#e57775",
    8: "#f3a7a2",
    9: "#f8d0cc",
    10: "#faeeec",
  },
  orange: {
    1: "#291a22",
    2: "#432221",
    3: "#582c25",
    4: "#7c3623",
    5: "#ac4322",
    6: "#db5020",
    7: "#e77444",
    8: "#f3996c",
    9: "#f8b996",
    10: "#fad6bf",
  },
  yellow: {
    1: "#201e21",
    2: "#34291d",
    3: "#46351c",
    4: "#614317",
    5: "#845610",
    6: "#a76a08",
    7: "#bc8725",
    8: "#d1a649",
    9: "#e2c272",
    10: "#f0dca0",
  },
  green: {
    1: "#0e212a",
    2: "#0e3033",
    3: "#10413c",
    4: "#105547",
    5: "#0f7055",
    6: "#0e8b63",
    7: "#289c74",
    8: "#48b087",
    9: "#6dbf9c",
    10: "#96cdb4",
  },
  teal: {
    1: "#0e202e",
    2: "#0d2e3d",
    3: "#0e3d4c",
    4: "#0c505e",
    5: "#0a6977",
    6: "#088190",
    7: "#219ba2",
    8: "#41b3b6",
    9: "#66c4c3",
    10: "#8fd2d0",
  },
  blue: {
    1: "#052d66",
    2: "#08448c",
    3: "#1460b3",
    4: "#2381d9",
    5: "#36a3ff",
    6: "#5ebcff",
    7: "#87d1ff",
    8: "#b0e3ff",
    9: "#d9f3ff",
    10: "#f0fbff",
  },
  indigo: {
    1: "#171d3a",
    2: "#202751",
    3: "#2b3465",
    4: "#384284",
    5: "#4a54ad",
    6: "#5b67d6",
    7: "#8794e9",
    8: "#b4bff4",
    9: "#e0e5f9",
    10: "#eceffb",
  },
  purple: {
    1: "#1b1c3b",
    2: "#292452",
    3: "#372e66",
    4: "#4a3986",
    5: "#6447b0",
    6: "#7d56da",
    7: "#a480e9",
    8: "#c7adf4",
    9: "#e5d8f9",
    10: "#f2ecfb",
  },
  pink: {
    1: "#261930",
    2: "#3d1e3c",
    3: "#512648",
    4: "#712d58",
    5: "#9c366e",
    6: "#c73f84",
    7: "#de689f",
    8: "#f397be",
    9: "#f8c2d7",
    10: "#faecf1",
  },
};

export const darkAssets: AssetsType = {
  info: darkColors.blue[6],
  success: darkColors.green[6],
  warning: darkColors.yellow[5],
  danger: darkColors.red[7],
  title: darkColors.grey[10],
  "primary-text": darkColors.grey[8],
  "secondary-text": darkColors.grey[6],
  disabled: darkColors.grey[4],
  "disabled-font": darkColors.grey[5],
  "body-background": darkColors.grey[1],
  "input-border": darkColors.grey[5],
  "input-placeholder": darkColors.grey[6],
};
