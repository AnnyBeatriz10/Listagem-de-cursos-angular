const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const COURSES = require("./mock/courses");

var currentUser;
var courses = COURSES;

var corsOptions = {
  orgim: "/",
  optionsSucessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
  console.log("Server Started");
});

app.route("/api/courses").get((request, response) => {
  response.send(courses);
});

app.route("/api/courses").post((request, response) => {
  let course = request.body;

  const firstId = courses
    ? Math.max.apply(
        null,
        courses.map((courseIterator) => courseIterator.id) + 1,
        1
      )
    : (course.id = firstId);
  courses.push(course);

  response.status(201).send(course);
});

app.route("/api/courses/:id").put((request, response) => {
  const courseId = Number(request.params["id"]);
  const course = request.body;

  const index = courses.findIndex(
    (courseIterator) => courseIterator.id === courseId
  );
  courses[index] = course;

  response.status(200).send(course);
});

app.route("/api/courses/:id").get((request, response) => {
  const courseId = Number(request.params["id"]);

  response
    .status(200)
    .send(courses.find((courseIterator) => courseIterator.id === courseId));
});
