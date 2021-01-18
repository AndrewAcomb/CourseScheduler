const termMap = { F: "Fall", W: "Winter", S: "Spring" };
const terms = Object.values(termMap);

const getCourseTerm = (course) => termMap[course.id.charAt(0)];

export { terms, getCourseTerm };
