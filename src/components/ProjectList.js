import wordleclone from "../assets/project-pictures/wordleclone.jpg";
import news4us from "../assets/project-pictures/news4us.jpg";
import tictactoe from "../assets/project-pictures/tictactoe.jpg";
import sudoku from "../assets/project-pictures/sudoku.jpg";
import awsportfoliodiagram from "../assets/project-pictures/portfolioawsdiagram.jpg";
import moviebud from "../assets/project-pictures/moviebud.jpg";
import liveball from "../assets/project-pictures/liveball.jpg";
import nlp from "../assets/project-pictures/nlp.jpg";
import bankJDBC from "../assets/project-pictures/bankJDBC.jpg";
import smartsummarizer from "../assets/project-pictures/smartsummarizer.jpg";
import factverse from "../assets/project-pictures/factverse.jpg";

export const ProjectList = [
  {
    name: "My Portfolio Website",
    slug: "portfolio-website",
    image: awsportfoliodiagram,
    skills:
      "React, Node.JS, JavaScript, HTML, CSS, Amazon Route 53, AWS CloudFront, AWS Certificate Manager, Amazon S3",
    sourcecode: "https://github.com/ycorcos1/Portfolio",
    description:
      "Designed an online personal portfolio static website that allows users from all over the world to view my past experiences and projects. Front-end development using the React framework with added MUI components. Used AWS to host the website and deliver content using AWS CloudFront, Amazon S3 and Amazon Route 53. Deployed to AWS using Terraform",
    sourcecode2:
      "https://github.com/ycorcos1/Terraform-Static-Website-Deployment",
    sourcecode2_name: "Click To See Terraform Source Code",
  },
  {
    name: "LiveBall",
    slug: "liveball",
    image: liveball,
    skills: "Chrome Developer Tools, JavaScript, HTML, Web API (api-sports)",
    sourcecode: "https://github.com/ycorcos1/LiveBall/tree/main",
    description:
      "Independently built a Google Chrome extension that displays the current day’s NBA games with live score updates. This extension uses JavaScript to interact with the Basketball-API from API-SPORTS and format the data that was fetched from the API to display the results when the user clicks on the extension.",
    website: "http://liveball.s3-website.us-east-2.amazonaws.com/",
  },
  {
    name: "SmartSummarizer",
    slug: "smartsummarizer",
    image: smartsummarizer,
    skills: "React, Node.js, JavaScript, HTML, CSS, Vercel, Hugging Face API",
    sourcecode: "https://github.com/ycorcos1/Smart-Summarizer",
    description:
      "SmartSummarizer is an AI-powered text summarization tool that extracts key insights from long-form text using Hugging Face's NLP models. Designed to improve efficiency and comprehension, the app allows users to generate concise summaries instantly. Built with React.js, it features a clean, responsive UI with support for copying summaries to the clipboard and downloading them as PDFs. The application is integrated with the Hugging Face Transformers API for advanced text processing and is deployed on Vercel for seamless accessibility.",
    website: "https://smart-summarizer-ten.vercel.app",
  },
  {
    name: "FactVerse",
    slug: "factverse",
    image: factverse,
    skills: "React, Node.js, JavaScript, HTML, CSS, Vercel, Useless Facts API",
    sourcecode: "https://github.com/ycorcos1/factverse",
    description:
      "FactVerse is a fun and educational web app that delivers insightful and thought-provoking facts every day. Unlike traditional fact generators, FactVerse provides meaningful information that expands knowledge in an engaging way. Built with React.js, it fetches data from the Useless Facts API and features a modern, minimalist design with a user-friendly interface. The app supports dark mode for improved readability, allows users to copy facts to the clipboard, and offers the option to generate multiple facts per day. Deployed on Vercel, FactVerse is optimized for speed and accessibility.",
    website: "https://factverse.vercel.app",
  },
  {
    name: "Bank JDBC",
    slug: "bank-jdbc",
    image: bankJDBC,
    skills: "Java, Windows Builder, PostgreSQL, Spring JDBC, Maven",
    sourcecode: "https://github.com/ycorcos1/Bank-JDBC",
    description:
      "Implemented a basic banking system that allows users to create accounts and login to view their balances. Users are able to withdraw money, deposit money, change username or password, and delete their accounts entirely. Users will also be able to see the most recent transactions for their account. Used a DAO to get, receive and update data from the database and Windows Builder to design the GUI.",
  },
  {
    name: "MovieBud",
    slug: "moviebud",
    image: moviebud,
    skills: "React, Node.JS, JavaScript, HTML, CSS, TheMovieDB API",
    sourcecode: "https://github.com/ycorcos1/MovieBud",
    description:
      "This app is meant to help users find a movie to watch when they are stuck. This app was created using React and interacts with The Movie DB (TMDB) API. Users can select genres to filter out a movie if they choose, once they generate, a movie is displayed along with its poster, overview, release dates, genres, and ratings. Users can also go back to edit the filters or generate another movie using the same filters. This website is hosted as a static website on AWS using S3 buckets",
    website: "http://moviebud.s3-website-us-east-1.amazonaws.com",
  },
  {
    name: "News 4 Us",
    slug: "news-4-us",
    image: news4us,
    skills: "React, Node.JS, JavaScript, HTML, CSS, NewsAPI",
    sourcecode: "https://github.com/ycorcos1/News4Us",
    description:
      "This application interacts with the News API. Users can select to receive the most recent news pertaining to a certain subject or using keywords. The website is hosted as a static website on AWS using S3 buckets and incorporates Routers.",
    website: "http://news4us.s3-website-us-east-1.amazonaws.com",
  },
  {
    name: "Wordle Clone",
    slug: "wordle-clone",
    image: wordleclone,
    skills: "React, Node.JS, JavaScript, HTML, CSS",
    sourcecode: "https://github.com/ycorcos1/Wordle-Clone",
    description:
      "Created a clone of the NYTimes puzzle, Wordle, using JavaScript and the React framework to mimic the display and functions of Wordle. Hosted the website on AWS using Amazon S3 with enabled static websites capabilities.",
    website: "http://react-wordle-clone.s3-website-us-east-1.amazonaws.com/",
  },
  {
    name: "NLP Text Summarizer",
    slug: "nlp-text-summarizer",
    image: nlp,
    skills: "Python, NLP, NLTK",
    sourcecode: "https://github.com/ycorcos1/NLP_Text_Summarizer/tree/main",
    description:
      "Basic Python script that using NLTK to summarize text from an input file",
  },
  {
    name: "Sudoku",
    slug: "sudoku",
    image: sudoku,
    skills: "Java, Java GUI Window Builder",
    sourcecode: "https://github.com/ycorcos1/sudoku",
    description:
      "Developed my own version of one of my favorite games, Sudoku, in Java that allows users to choose between three difficulties and solve a sudoku board by using preset boards for each difficulty and randomly choosing a board for the user to solve. Expedited designing the GUI by using the Windows Builder extension on the Eclipse IDE.",
  },
  {
    name: "Tic Tac Toe",
    slug: "tic-tac-toe",
    image: tictactoe,
    skills: "Eclipse, Java, Windows Builder",
    sourcecode: "https://github.com/ycorcos1/TicTacToe",
    description:
      "Created a personal desktop game application using Java that allows users to play a simple game of tic tac toe against the computer or against another player. Expedited designing the GUI by using the Windows Builder extension on the Eclipse IDE.",
  },
];
