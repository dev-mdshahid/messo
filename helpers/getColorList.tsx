import { ColorValueType } from "@/lib/type";
import colors from "tailwindcss/colors";

export const getColorList = (value: ColorValueType) => {
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
