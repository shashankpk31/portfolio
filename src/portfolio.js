const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/shashankpk31',
  title: 'SP',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Shashank Pathak',
  role: 'FullStack Web Developer',
  description:
  `Self-motivated team player Fresher seeking a position as a junior web
  developer with Next Generation Web Development where I can apply
  my advanced knowledge of web design and developement like
  web push notification ,Pwas more with my leadership abilities to
  meet client needs and exceed their expectations`,
    resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/shashank-pathak-52a5a11a7/',
    github: 'https://github.com/shashankpk31',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Blogging Cms',
    description:
      'This is Bascially a Blogs Management System inspired by medium.This application is Being created for the purpose of learning basic concepts of web develpement like setting up enveiron ment for developement in nodejs,express,mongodb.And how to interact with template engines like ejs. ',
    stack: ['Html', 'Css', 'Nodejs','Mongodb','Ejs'],
    sourceCode: 'https://github.com/shashankpk31/Blogging_cms',
    livePreview: 'https://github.com',
  },
  {
    name: 'Quiz Application',
    description:
      `Basically this application is created for the purpose of Learning how Crud Operation Works in Nodejs and also how to connect express rest api with React and render data on React application.
      This application have been created by using Basic crud operations like creating a movie , updating data of movie, Deleting data of movie from database, also rendering or returning all collection of movies at once and also by using id to return single movie according to id.`,
    stack: ['Bootstrap', 'Nodejs', 'React'],
    sourceCode: 'https://github.com/shashankpk31/Quiz-Application-In-Mern',
    livePreview: 'https://shashankpk31.github.io/deploytestReact/#/',
  },
  {
    name: 'News Api Application',
    description:
      `A React web app I had created By using React library and here I used a
      rest api News Api and ti created front-end of web app and then learn how
      to integrate them together`,
    stack: ['Bootstrap', 'Nodejs', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Nodejs',
  'React',
  'React hooks',
  'Material UI',
  'Git',
  'Figma',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'shashankpk34@gmail.com',
}

export { header, about, projects, skills, contact }
