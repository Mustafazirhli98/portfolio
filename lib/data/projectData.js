import { PROJECT_MODEL } from "../model/projectModel"

const PROJECT_DATA = [
    new PROJECT_MODEL("React Native", [
        {
            _id: 1,
            _name: "Rick and Morty",
            _lang: "Javascript",
            _img: "/projects/rickAndmorty/episodes1.jpg",
            _subImages: [
                "/projects/rickAndmorty/episodes1.jpg",
                "/projects/rickAndmorty/characters1.jpg",
                "/projects/rickAndmorty/characters2.jpg",
                "/projects/rickAndmorty/episodes2.jpg",
                "/projects/rickAndmorty/favorites2.jpg",
                "/projects/rickAndmorty/identity.jpg",
            ],
            _githubLink: "https://github.com/Mustafazirhli98/RickAndMorty-ReactNative",
            description: "This is an app where you can see informations about episodes of Rick and Morty and the characters in those episodes. You can see examples of Async Storage and Local Notification and Redux usage in this project. Additionally, the user-friendly interface allows you to filter lists provided by the fetch process."
        },
        {
            _id: 2,
            _name: "Expense Tracker",
            _lang: "Javascript",
            _img: "/projects/expenseTracker/All.jpg",
            _subImages: [
                "/projects/expenseTracker/All.jpg",
                "/projects/expenseTracker/Manage.jpg",
                "/projects/expenseTracker/Recent.jpg"
            ],
            _githubLink: "https://github.com/Mustafazirhli98/ExpenseTracker-ReactNativeApp",
            description: "This app allows you to save your expenses with name, date, and amount information. With a simple interface, it performs its job easily. Additionally, using a database provided by Firebase, we store the records securely."
        },
        {
            _id: 3,
            _name: "Authentication App",
            _lang: "Javascript",
            _img: "/projects/authentication/signupScreen.jpg",
            _subImages: [
                "/projects/authentication/signupScreen.jpg",
                "/projects/authentication/loginScreen.jpg",
                "/projects/authentication/welcomeScreen.jpg",
                "/projects/authentication/errorScreen.jpg",
            ],
            _githubLink: "https://github.com/Mustafazirhli98/AuthenticationByReactNative",
            description: "This app serves as a study example of a well-performing authentication flow."
        },
        {
            _id: 5,
            _name: "Meals App",
            _lang: "Javascript",
            _img: "/projects/mealsApp/categories.jpg",
            _subImages: [
                "/projects/mealsApp/categories.jpg",
                "/projects/mealsApp/meals.jpg",
                "/projects/mealsApp/mealDetail.jpg",
                "/projects/mealsApp/drawer.jpg",
                "/projects/mealsApp/deleteFav.jpg",

            ],
            _githubLink: "https://github.com/Mustafazirhli98/ReactNative-MealsApp",
            description: "Meals app is a type of recipe app. You can find various meals and their recipes based on categories."
        }
    ]),
    new PROJECT_MODEL("React", [
        {
            _id: 17,
            _name: "Menuspot",
            _lang: "Javascript",
            _img: "/projects/menuspot/restaurants.png",
            _subImages: [
                "/projects/menuspot/restaurants.png",
                "/projects/menuspot/signIn.png",
                "/projects/menuspot/signUp.png",
                "/projects/menuspot/menu1.png",
                "/projects/menuspot/cardFlip.png",
                "/projects/menuspot/menu2.png",
                "/projects/menuspot/aboutUs.png",
                "/projects/menuspot/aboutUsDetail.png"
            ],
            _appLink: "https://menuspot.vercel.app/",
            description: "MenuSpot is a project created by four young individuals who aim to establish a presence in the increasingly digital world.The goal of the MenuSpot project is to easily deliver restaurant menus to users, while providing users with the opportunity to access and compare menus from various businesses through a single website, all in their most up-to-date versions.Accessibility for businesses and convenience for users are the most crucial missions of our project."
        },
        {
            _id: 7,
            _name: "Luminova Stride",
            _lang: "Javascript",
            _img: "/projects/luminovaStride/Home1.png",
            _subImages: [
                "/projects/luminovaStride/Home1.png",
                "/projects/luminovaStride/Home2.png",
                "/projects/luminovaStride/Market.png",
                "/projects/luminovaStride/Basket.png",
                "/projects/luminovaStride/Pay.png",
                "/projects/luminovaStride/Finish.png",
            ],
            _githubLink: "https://github.com/Mustafazirhli98/sky-walking-shoes",
            _appLink: "https://sky-walking-shoes.vercel.app/",
            description: "Luminova Stride is a fictional brand's shopping site where you can purchase futuristic skywalk shoes. Visitors can view the shoes and check their prices. Additionally, there is a shopping simulation with a payment screen for the purchase process. For a user-friendly interface, the site's animations were created using the GSAP library."
        },
        {
            _id: 6,
            _name: "Translator",
            _lang: "Typescript",
            _img: "/projects/translator/translator.png",
            _githubLink: "https://github.com/Mustafazirhli98/translator-typescript",
            _appLink: "https://translator-typescript.vercel.app/",
            description: "This is a translator app with text and sound features, coded using React and TypeScript."
        },
        {
            _id: 8,
            _name: "Weather App",
            _lang: "Javascript",
            _img: "/projects/weather/home.png",
            _subImages: [
                "/projects/weather/home.png",
                "/projects/weather/location.png",
                "/projects/weather/search.png",
            ],
            _githubLink: "https://github.com/Mustafazirhli98/weather-app",
            _appLink: "https://weather-app-umber-nu.vercel.app/",
            description: "A weather application that shows the current weather based on either your current location or a city you choose."
        },
        { _id: 10, _name: "English Dictionary", _lang: "Javascript", _img: "/projects/englishDictionary/dictionary.png", _githubLink: "https://github.com/Mustafazirhli98/english-dictionary", _appLink: "https://english-dictionary-three.vercel.app/", description: "This is an English dictionary with a sound feature." },
        { _id: 11, _name: "Guess Number", _lang: "Javascript", _img: "/projects/guessNumber/guessNumber.png", _githubLink: "https://github.com/Mustafazirhli98/guess-number", _appLink: "https://guess-number-delta-seven.vercel.app/", description: "A guess-the-number game that challenges players to find the number the computer has in mind." },
        { _id: 12, _name: "Body Mass Index", _lang: "Javascript", _img: "/projects/bodyMassIndex/bodyMassIndex.png", _githubLink: "https://github.com/Mustafazirhli98/body-mass-index", description: "An application for calculating body mass index." },
        { _id: 15, _name: "Spend Money", _lang: "Javascript", _img: "/projects/spendMoney/spendMoney.png", _githubLink: "https://github.com/Mustafazirhli98/spendmoney", description: "This is a study for practicing an algorithm for shopping with a limited budget." }
    ]),
    new PROJECT_MODEL("HTML/CSS/Javascript", [
        { _id: 9, _name: "Clocks", _lang: "Javascript", _img: "/projects/clocks/clocks.png", _githubLink: "https://github.com/Mustafazirhli98/Clocks", _appLink: "https://clocks-sigma.vercel.app/", description: "A clock app that shows the time in some of the world's biggest cities with an impressive interface." },
        { _id: 13, _name: "To Do App", _lang: "Javascript", _img: "/projects/todo/todo.png", _githubLink: "https://github.com/Mustafazirhli98/ToDoApp-OOP", description: "A to-do application study designed to understand OOP standards." },
        { _id: 14, _name: "Age Calculator", _lang: "Javascript", _img: "/projects/ageCalculator/ageCalculator.png", _githubLink: "https://github.com/Mustafazirhli98/FrontendMentor-2-AgeCalculator", description: "This study is a Frontend Mentor challenge for calculating our lifetime in years, months, and days." },
        { _id: 16, _name: "Quiz App", _lang: "Javascript", _img: "/projects/quizApp/quiz.png", _githubLink: "https://github.com/Mustafazirhli98/Quiz-App", description: "A quiz application designed to improve basic programming skills." }
    ])
];
export default PROJECT_DATA