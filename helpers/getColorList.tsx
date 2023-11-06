import colors from "tailwindcss/colors";

type ValueArgument =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950;

export const getColorList = (value: ValueArgument) => {
  return [
    colors.pink[value],
    colors.purple[value],
    colors.red[value],
    colors.yellow[value],
    colors.cyan[value],
    colors.emerald[value],
    colors.fuchsia[value],
    colors.green[value],
    colors.indigo[value],
    colors.blue[value],
    colors.lime[value],
    colors.orange[value],
    colors.rose[value],
    colors.sky[value],
    colors.violet[value],
  ];
};
