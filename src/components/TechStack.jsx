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
    margin: "0 4rem",
    borderRadius: "1rem",
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
export const TechStack = () => {
  const techList = [
    {
      field: "frontend",
      skills: [
        "HTML5",
        "CSS3",
        "SCSS/LESS",
        "JS(ES6+)",
        "TS(3.x)",
        "React",
        "Bootstrap(3/4)",
        "MaterialUI",
        "AntD",
        "Webpack",
      ],
    },
    { field: "frontendTesting", skills: ["Jest", "Mocha", "Enzyme"] },
    { field: "backend", skills: ["Node.js", "Java"] },
    { field: "cloudServices", skills: ["AWS S3", "AWS EC2", "AWS CloudFront", "AWS Lambda"] },
  ];
  return techList.map(techItem => (
    <dl>
      <dt>{techItem.field}</dt>
      {techItem.skills.map(skill => (
        <dd>{skill}</dd>
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
