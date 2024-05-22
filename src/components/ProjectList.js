import wordleclone from "../assets/project-pictures/wordleclone.jpg";
import news4us from "../assets/project-pictures/news4us.jpg";
import tictactoe from "../assets/project-pictures/tictactoe.jpg";
import sudoku from "../assets/project-pictures/sudoku.jpg";
import awsportfoliodiagram from "../assets/project-pictures/portfolioawsdiagram.jpg";
import moviebud from "../assets/project-pictures/moviebud.jpg";
import liveball from "../assets/project-pictures/liveball.jpg";
import terraform from "../assets/project-pictures/terraform.jpg";
import nlp from "../assets/project-pictures/nlp.jpg";
import bankJDBC from "../assets/project-pictures/bankJDBC.png";

export const ProjectList = [
  {
    name: "My Portfolio Website",
    image: awsportfoliodiagram,
    skills:
      "React, Node.JS, JavaScript, HTML, CSS, Amazon Route 53, AWS CloudFront, AWS Certificate Manager, Amazon S3",
    sourcecode: "https://github.com/ycorcos1/Portfolio",
    description:
      "Designed an online personal portfolio static website that allows users from all over the world to view my past experiences and projects. Front-end development using the React framework with added MUI components. Used AWS to host the website and deliver content using AWS CloudFront, Amazon S3 and Amazon Route 53.",
    website: "",
  },
  {
    name: "Terraform Website Deployment",
    image: terraform,
    skills: "Terraform, AWS, AWS S3, Amazon CloudFront",
    sourcecode:
      "https://github.com/ycorcos1/Terraform-Static-Website-Deployment",
    description: "Deployed a static React website to AWS using Terraform",
    website: "",
  },
  {
    name: "LiveBall",
    image: liveball,
    skills: "Chrome Developer Tools, JavaScript, HTML, Web API (api-sports)",
    sourcecode: "https://github.com/ycorcos1/LiveBall/tree/main",
    description:
      "Independently built a Google Chrome extension that displays the current day’s NBA games with live score updates. This extension uses JavaScript to interact with the Basketball-API from API-SPORTS and format the data that was fetched from the API to display the results when the user clicks on the extension.",
    website: "http://liveball.s3-website.us-east-2.amazonaws.com/",
  },
  {
    name: "Bank JDBC",
    image: bankJDBC,
    skills: "Java, Windows Builder, PostgreSQL, Spring JDBC, Maven",
    sourcecode: "https://github.com/ycorcos1/Bank-JDBC",
    description:
      "Implemented a basic banking system that allows users to create accounts and login to view their balances. Users are able to withdraw money, deposit money, change username or password, and delete their accounts entirely. Users will also be able to see the most recent transactions for their account. Used a DAO to get, receive and update data from the database and Windows Builder to design the GUI.",
    website: "",
  },
  {
    name: "News4Us",
    image: news4us,
    skills: "React, Node.JS, JavaScript, HTML, CSS, NewsAPI",
    sourcecode: "https://github.com/ycorcos1/News4Us",
    description:
      "Developed a static website that displays news articles based on the users input. The user can either search from articles containing specific keywords or get the most recent breaking news. The website was built with JavaScript and the React framework and by interacting with the NewsAPI.",
    website: "",
  },
  {
    name: "Movie Bud",
    image: moviebud,
    skills: "React, Node.JS, JavaScript, HTML, CSS, TheMovieDB API",
    sourcecode: "https://github.com/ycorcos1/Movie_Bud",
    description:
      "I compiled a list of the top rated movies using the MovieDB API. This application allows the user to enter between 1 and 10 movies they would like to be generated randomly from the list. This simple but fun project was created to help me, and other users, find a movie to watch if I cannot think of one and do not feel like surfing the internet to find one. Instead, with the click of a button I can generate between 1 and 10 ideas, or keep doing so until I find a movie that I am interested in. I created this app using React, JavaScript, CSS and HTML and hosted this static website in an S3 bucket in AWS.",
    website: "http://moviebud.s3-website-us-east-1.amazonaws.com/",
  },
  {
    name: "Wordle Clone",
    image: wordleclone,
    skills: "React, Node.JS, JavaScript, HTML, CSS",
    sourcecode: "https://github.com/ycorcos1/Wordle-Clone",
    description:
      "Created a clone of the NYTimes puzzle, Wordle, using JavaScript and the React framework to mimic the display and functions of Wordle. Hosted the website on AWS using Amazon S3 with enabled static websites capabilities.",
    website: "http://react-wordle-clone.s3-website-us-east-1.amazonaws.com/",
  },
  {
    name: "NLP Text Summarizer",
    image: nlp,
    skills: "Python, NLP, NLTK",
    sourcecode: "https://github.com/ycorcos1/NLP_Text_Summarizer/tree/main",
    description:
      "Basic Python script that using NLTK to summarize text from an input file",
    website: "",
  },
  {
    name: "Sudoku",
    image: sudoku,
    skills: "Java, Java GUI Window Builder",
    sourcecode: "https://github.com/ycorcos1/sudoku",
    description:
      "Developed my own version of one of my favorite games, Sudoku, in Java that allows users to choose between three difficulties and solve a sudoku board by using preset boards for each difficulty and randomly choosing a board for the user to solve. Expedited designing the GUI by using the Windows Builder extension on the Eclipse IDE.",
    website: "",
  },
  {
    name: "Tic Tac Toe",
    image: tictactoe,
    skills: "Eclipse, Java, Windows Builder",
    sourcecode: "https://github.com/ycorcos1/TicTacToe",
    description:
      "Created a personal desktop game application using Java that allows users to play a simple game of tic tac toe against the computer or against another player. Expedited designing the GUI by using the Windows Builder extension on the Eclipse IDE.",
    website: "",
  },
];
