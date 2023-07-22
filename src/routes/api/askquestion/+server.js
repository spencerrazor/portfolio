import { Configuration, OpenAIApi } from "openai";
import { OPENAI_API_KEY } from '$env/static/private';


export async function POST({ request }) {
    const { prompt } = await request.json();

    let answer = 'not implemented yet';

    const configuration = new Configuration({
      apiKey: OPENAI_API_KEY, // REMOVE LATER PLEASE DON'T BE STUPIDS
    });
    const openai = new OpenAIApi(configuration);
    

    const document = `
    Spencer Rei Wueste (661)-600-5910 | swueste@ucsd.edu | Github - spencerrazor
    currently works at AI Camp
    EDUCATION UNIVERSITY OF CALIFORNIA SAN DIEGO
    Bachelor of Science in Data Science Major GPA 4.00/4.00
    PROFESSIONAL EXPERIENCE DATA SCIENCE INTERN @ AI CAMP
    La Jolla, CA Expected Graduation April 2024 Remote, May 2023-Present
    • Designed and built a Information Retreival Bot that harnesses LLM, vector databases, and advanced prompting techniques.
    • Built several features, such as multilingual support, multi-document support, paragraph referencing, and long-term memory to improve user experience.
    • Led students of AI Camp through the Data Science pipeline. Mentored and organized student's data science projects involving machine learning and web development. Instructor Rating: 8.911/10
    DATA ENGINEER / DATA CONSULTANT @ MSO INC. OF SOUTHERN CALIFORNIA May 2021 – Present • Create new data pipelines to help accelerate creation of routine healthcare rosters for +5 health plans. • Design custom SQL queries and Python scripts based off unique health plan specifications. • Establish new and automated data cleaning and format protocols to ensure quality of healthcare data. COLLEGE TUTOR @ UNIVERSITY OF CALIFORNIA SAN DIEGO
    September 2022 - March 2023
    • Tutored advanced Python for over 50+ UCSD students, creating coding problems and grading code. • Help students debug and optimize their code, recommending good coding practices and approaches. STUDENT RESEARCH INTERNSHIP @ QUALCOMM INSITUTE OF TECHNOLOGY
    January 2022 – June 2022
    • Collaborated with a team of 3 researchers, developing an authentication pipeline that uses UCSD’s authentication system to authenticate users into XRNOC, an Unreal Engine built VR/AR world.
    • Worked on integrating multiplayer sessions for handling multiple users using virtual reality or augmented reality. PROJECTS
    HEARTBEAT BEAT IoT Hardware / Machine Learning / Web Application La Jolla, CA July 2022 – August 2022
    • Engineered a song recommender system based off heartbeat and existing music taste achieving 90% test accuracy. • Streamed a real time heartbeat graph and used the Spotify API with the use of Express.js, React.js, and Chart.js. HAND GESTURE DETECTION
    La Jolla, CA IoT Devices / Machine Learning September 2022 – December 2022
    • Built a wireless hand movement detector with an accelerometer, Raspberry Pi Pico, and Bluetooth. • Collected, processed, and feature engineered data for our logistic regression model. • Classified 5 hand gestures with 94% accuracy using logistic regression. INTENT CLASSIFICATION
    La Jolla, CA Deep Learning September 2022 – December 2022
    • Finetuned BERT encoder to predict the intent of a user given their sentences across 60 different intent classes. • Tooled PyTorch to train and evaluate my Intent Classification model that achieved around 89% accuracy on test data. STOCK SCOOPER
    La Jolla, CA Software Engineering / Data Analytics December 2021 – February 2022
    • Curated an analytics website that provides information about the most trending stocks that stock influencers talk about. • Harnessed APIs, React.js, Python to provide useful stock statistics, such as number mentions, sentiment analysis, etc. TECHNICAL SKILLS Languages: Python, SQL, JavaScript, HTML, CSS, Java, Go, R Libraries: Pandas, Scikit-Learn, PyTorch, React.js, LangChain DBMS: PostgreSQL, SQL Server
    Other Skills: Git, Apache Spark, AWS, Excel, Tableau, Linux, Docker, Japanese
    `
    var relevancePrompt = `Pretend you are a person named Spencer Wueste who is answering questions about their expertise and portfolio. See if the question is anything portfolio, resume related, or school related. Only put yes or no. Question: ${prompt}`;

    var gptPrompt = `Pretend you are a person named Spencer Wueste (talk in first person) who is answering questions about their expertise, portfolio, work experience, projects, and skills. Given the document about the person below, answer the question. If the answer doesn't exist in the document, return 'Sorry, I don't have an answer to that question'.

    Question: ${prompt}
    
    Document: ${document}
    
    Answer`;




    try {
        const res = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: gptPrompt}],
        });

        answer = res.data.choices[0].message.content;

        // const res = await openai.createChatCompletion({
            //     model: "gpt-3.5-turbo",
            //     messages: [{role: "user", content: "Tell me a joke"}],
            //     stream: true,
            // }, { responseType: 'stream' });
            
            // res.data.on('data', data => {
        //     const lines = data.toString().split('\n').filter(line => line.trim() !== '');
        //     const jsonString = lines[0].substring(6);
        //     const responseObject = JSON.parse(jsonString);
        // });
    } catch (error) {
        console.log(error.response.data);
    }

    return new Response(JSON.stringify({'answer': answer}), {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}