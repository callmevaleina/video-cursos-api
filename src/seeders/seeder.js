const db = require("../utils/database");
const initModels = require("../models/initModels")
const { forEach } = require("p-iteration");
const Users = require("../models/users.models");
const Courses = require("../models/courses.models");
const Categories = require("../models/categories.models");
const Videos = require("../models/videos.models");
const UsersCourses = require("../models/usersCourses.models");

initModels();

const users = [ 
    {firstName: "Valentina", lastName: "Cabrera", email: "valentina@gmail.com", password: "1234hola"},
    {firstName: "Sebastian", lastName: "Etcheverry", email: "sebastian@gmail.com", password: "4567chau"},
    {firstName: "Olivia", lastName: "Paredes", email: "olivia@gmail.com", password: "sunshine2021"},
    {firstName: "Felipe", lastName: "Duarte", email: "felipe@gmail.com", password: "bye8569"}
];

const categories = [
    {name: "Frontend"},
    {name: "Backend"},
    {name: "Styles"},
    {name: "Database"},
    {name: "Fundamentos de programación"}
];

const courses = [
    {title: "JavaScript para principiantes", description: "Conoce los fundamentos de JavaScript", instructor: "Alfonso Morales", categoryId: 5},
    {title: "React Js", description: "Aprende todo sobre React Js", instructor: "Pedro Rodriguez", categoryId: 1},
    {title: "Node Js", description: "Node Js avanzado", instructor: "Margarita Perez", categoryId: 2},
    {title: "SQL", description: "Aprende todo sobre SQL", instructor: "Lucia Pereira", categoryId: 4},
    {title: "CSS avanzado", description: "Todo lo que necesitas para destacarte en el diseño de tu web", instructor: "Juan Moreira", categoryId: 3}
];

const videos = [
    {title: "JavaScript para principiantes", url: "www.youtube.com/javascriptbasic", courseId: 1},
    {title: "React Js", url: "www.youtube.com/reactjs", courseId: 2},
    {title: "Node Js", url: "www.youtube.com/nodejsadvanced", courseId: 3},
    {title: "SQL", url: "www.youtube.com/sql", courseId: 4},
    {title: "CSS avanzado", url: "www.youtube.com/cssadvanced", courseId: 5}   
];

const usersCourses = [
    {user_id:1, course_id:2},
    {user_id:1, course_id:4},
    {user_id:2, course_id:1},
    {user_id:3, course_id:5},
    {user_id:4, course_id:3}
];

async function seeding(){
    await db.sync({force: true})
    await forEach(users, (user)=> Users.create(user))
    await forEach(categories, (category)=> Categories.create(category))
    await forEach(courses, (course)=> Courses.create(course))
    await forEach(videos, (video)=> Videos.create(video))
    await forEach(usersCourses, (userCourse)=> UsersCourses.create(userCourse))
};

seeding();



