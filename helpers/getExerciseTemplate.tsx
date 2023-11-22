import { exerciseData } from "@/data/exerciseData";
import { exercisePlans } from "@/data/exercisePlans";
import { ExerciseCollectedDataType } from "@/lib/type";

export const getExerciseTemplate = (
  data: ExerciseCollectedDataType,
  email: string,
) => {
  const { goal, level, focusArea } = data;
  const numericLevel =
    level === "beginner" ? 1 : level === "intermediate" ? 2 : 3;

  const workouts: { id: string; rep?: number; howLong?: number }[] = [];
  focusArea.forEach((area) => {
    const temp1 = exerciseData
      .filter(
        ({ target, id }) =>
          id.includes(numericLevel.toString()) && target.includes(area),
      )
      .slice(0, 4)
      .map((exercise) => {
        return { ...exercise, rep: numericLevel * 10 };
      });
    workouts.push(...temp1);
    // const temp = exercisePlans
    //   .filter(
    //     (plan) => plan.level === numericLevel && plan.target.includes(area),
    //   )[0]
    //   .workouts.slice(0, 4);
    // workouts.push(...temp);
  });
  return {
    id: Date.now().toString() + Math.floor(Math.random() * 1000),
    title: goal + " - " + level,
    client: email,
    description:
      "Get ready to rock with customized plan tailored only to your needs.",
    target: focusArea.map((area) => area[0]).join(", "),
    level: numericLevel,
    duration: 20,
    img: "https://t3.ftcdn.net/jpg/01/66/78/80/360_F_166788055_PvnKUHKwKCXn9yYjLQ166XnOAGNaDy3T.jpg",
    workouts: workouts,
  };
};
