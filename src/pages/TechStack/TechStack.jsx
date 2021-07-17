import Typed from 'react-typed';
import ReactMarkdown from 'react-markdown';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const useStyles = makeStyles((theme) => ({
  techstack__title: {
    margin: '1.5rem',
    color: 'tomato',
    fontSize: '1.2rem',
    textAlign: 'center',
  },
  techstack__container: {
    margin: '0 auto',
    padding: '0 1rem',
    maxWidth: '50rem',
    minWidth: '375px',
  },
  techstack__content: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '.1rem',
    },
  },
}));

const contents = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        style={a11yDark}
        language={match[1]}
        PreTag="div"
        children={String(children).replace(/\n$/, '')}
        {...props}
      />
    ) : (
      <code className={className} {...props} />
    );
  },
};

const markdown = `~~~js
export const MyTechStack = () => {
  const techList = [
    {
      field: "Frontend",
      skills: [
        "HTML5", "CSS3", "Styled-Components", "Tailwind", "SCSS/LESS",
        "JavaScript (ES6+)", "TypeScript",
        "React (React-Router-Dom, Redux, Hooks)", "Next", "React Native",
        "Material UI", "Antd", "Bootstrap (4/5)", "Flexbox", "Responsive Design",
        "Ajax (Axios/Fetch)",
        "Webpack (4/5)", "Gulp", "Babel", "ESLint",
      ],
    },
    { 
      field: "Backend", 
      skills: [
        "Node", "Express", "Koa",
        "CORS", "Helmet", "JWT Token", "Bcrypt", "Joi",
        "YAML", "Swagger", "Winston", "Morgan",
      ],
    },
    { 
      field: "Test", 
      skills: ["Cypress", "Jest", "Enzyme", "SuperTest"],
    },
    { 
      field: "Datebase", 
      skills: ["MongoDB (Mongoose)", "MySQL"], 
    },
    { 
      field: "Cloud Services", 
      skills: [
        "AWS (S3, EC2, Route 53, CloudFront, Lambda)",
        "Netlify", "Heroku", "Baidu Cloud",
      ],
    },
    { 
      field: "DevOps", 
      skills: ["Docker", "AWS Elastic Beanstalk", "GitHub CI/CD"],
    },
    { 
      field: "Architectures", 
      skills: ["RESTful APIs", "GraphQL"],
    },
    { 
      field: "DevTools & Platforms", 
      skills: ["Jira", "GitHub", "BitBucket", "Postman"],
    },
    { 
      field: "Methodologies", 
      skills: ["Agile (Scrum, Kanban)", "Test Driven Development"],
    },
  ];

  return techList.map(techItem => (
    <dl key={techItem.field}>
      <dt>{techItem.field}</dt>
      {techItem.skills.map(skill => (
        <dd key={skill}>{skill}</dd>
      ))}
    </dl>
  ));
};
~~~
`;

const TechStack = () => {
  const classes = useStyles();
  return (
    <Box className={classes.techstack__container}>
      <Typography className={classes.techstack__title}>
        <Typed strings={["JASON ZHANG'S TECH STACK"]} typeSpeed={80} />
      </Typography>
      <ReactMarkdown
        className={classes.techstack__content}
        components={contents}
        children={markdown}
      />
    </Box>
  );
};

export default TechStack;
