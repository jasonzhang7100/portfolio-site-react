import React from "react";
import Typed from "react-typed";
import ReactMarkdown from "react-markdown";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const useStyles = makeStyles({
  techstack__title: {
    margin: "1rem",
    color: "tomato",
    textAlign: "center",
  },
  techstack__container: {
    margin: "0 8rem",
    borderRadius: "2rem",
  },
});

const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={a11yDark}
        language={match[1]}
        PreTag="div"
        children={String(children).replace(/\n$/, "")}
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
      field: "frontend",
      skills: [
        "HTML5", "CSS3", "Styled-Components", "SCSS/SASS", "LESS"
        "JavaScript(ES6+)", "TypeScript(3.x)",
        "React(Redux, Hooks)", "React Native", "Next.js", 
        "Bootstrap(3/4)", "Material UI", "Antd",
        "Ajax(axios/fetch)"
        "Webpack", "Gulp",
      ],
    },
    { 
      field: "frontendTesting", 
      skills: ["Jest", "Enzyme"]
    },
    { 
      field: "backend", 
      skills: [
        "Node.js", "Express", "Koa2",
        "Java(JavaEE/JavaSE)", "Spring Boot",
        "JWT Token",
      ] 
    },
    { 
      field: "cloudService", 
      skills: ["AWS S3", "AWS EC2", "AWS CloudFront", "AWS Lambda"] 
    },
    { 
      field: "datebase", 
      skills: ["MySQL", "DynamoDB", "MongoDB"] 
    },
    { 
      field: "architecture", 
      skills: ["RESTful APIs"] 
    },
    { 
      field: "devToolsAndVersionControl", 
      skills: ["GitHub", "GitLab", "BitBucket", "Postman", "Jira"] 
    },
    { 
      field: "devOps", 
      skills: ["Docker", "Jenkins"] 
    },
    { 
      field: "methodology", 
      skills: ["Agile", "Scrum", "Test Driven Development"] 
    },
  ];
  return techList.map((techItem, i) => (
    <dl key={i}>
      <dt>{techItem.field}</dt>
      {techItem.skills.map((skill, i) => (
        <dd key={i}>{skill}</dd>
      ))}
    </dl>
  ));
};
~~~
`;

const TechStack = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography className={classes.techstack__title} variant="h6">
        <Typed strings={["JASON ZHANG'S TECH STACK"]} typeSpeed={80} />
      </Typography>
      <Box className={classes.techstack__container}>
        <ReactMarkdown components={components} children={markdown} />
      </Box>
    </React.Fragment>
  );
};

export default TechStack;
