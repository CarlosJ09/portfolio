export const CAREER_START_YEAR = 2022;

export function getYearsOfExperience(): number {
  return new Date().getFullYear() - CAREER_START_YEAR;
}

export const LINKS = {
  email: "mailto:carlos.ml.jimenezz@gmail.com",
  linkedin: "https://www.linkedin.com/in/carlos-jimenezz/",
  github: "https://github.com/CarlosJ09",
} as const;
