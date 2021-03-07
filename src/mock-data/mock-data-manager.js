import { users } from "./users.json";
import { students } from "./students.json";
import { courses } from "./courses.json";
import { subjects } from "./subjects.json";
import { coursesStudentsJoin } from "./coursesStudentsJoin.json";
import { coursesSubjectsJoin } from "./coursesSubjectsJoin.json";
import { score } from "./score.json";

const mockData = {
  arrayUsers: users,
  arrayStudents: students,
  arrayCourses: courses,
  arraySubjects: subjects,
  arrayCoursesStudentsJoin: coursesStudentsJoin,
  arrayCoursesSubjectsJoin: coursesSubjectsJoin,
  arrayScore: score
};

export default mockData;
