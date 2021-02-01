import React from 'react';
import db from '../db.json';
import { motion } from 'framer-motion';

import Link from '../src/components/Link';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';
import AlternativesForm from '../src/components/AlternativeForm';
import LoadingOrbits from '../src/components/Loading'
import BackLinkArrow from '../src/components/BlackLinkArrow';
import GitHubCorner from '../src/components/GitHubCorner';

function LoadingScreen() {
    return (
        <Widget>
            <Widget.Header>
                Carregando Pergunta...
            </Widget.Header>
        
            <Widget.Content>
                <LoadingOrbits/>
            </Widget.Content>
        </Widget>
    );
}

function ResultWidget({results}) {
    return (
  
        <Widget
        as={motion.section}
        transition={{ delay: 0.5, duration: 0.5 }}
        variants={{
          show: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        initial="hidden"
        animate="show"
        >
            <Widget.Header>
            <BackLinkArrow href="/" /> Pontuação
            </Widget.Header>
        
            <Widget.Content>
            <p>{`voce acertou `}
                {results.filter((x) => x).length}
                {` questoes, parabéns!`}
            
            </p>
            <ul>
                {results.map((result, questionIndex) =>(
                    <li key = {`result__${result}`}>
                        #0{questionIndex + 1} Resultado: {result === true ? 'Acertou': 'Errou'}
                    </li>                    
                ))}

            </ul>
            </Widget.Content>

            <Widget.Content>
            <h1>Quizes da Galera</h1>
            <ul>
                {db.external.map((linkExterno) => {
                const [projectName, githubUser] = linkExterno
                    .replace(/\//g, '')
                    .replace('https:', '')
                    .replace('.vercel.app', '')
                    .split('.');

                return (
                    <li key={linkExterno}>
                    <Widget.Topic
                        as={Link}
                        disabled={name.length === 0}
                        href={`/quiz/${projectName}___${githubUser}`}
                    >
                        {`${githubUser}/${projectName}`}
                    </Widget.Topic>
                    </li>
                );
                })}
            </ul>
        </Widget.Content>
            <GitHubCorner projectUrl="https://github.com/juniorsn1409/aluraquiz-startrek.git" />
        </Widget>

    );
}

function QuestionWidget( {
    question, 
    questionIndex, 
    totalQuestions,
    onSubmit,
    addResults,
} ) {
    const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
    const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
    const questionId =`question__${questionIndex}`;
    const isCorrect = selectedAlternative === question.answer;
    const hasAlternativeSelected = selectedAlternative !== undefined;

    return (
        <Widget>
            
            <Widget.Header>
                <h3>
                    <BackLinkArrow href="/" /> {`Pergunta ${questionIndex  + 1} de ${totalQuestions}`}
                </h3>
            </Widget.Header>
            <img
                alt="Descrição"
                style = 
                {
                    {
                        width:'100%', height:'150px', objectFit:'display',
                    }
                }
                src= {question.image}
            
            />
            <Widget.Content>
                <h2>
                    {question.title}
                </h2>
                <p>
                    {question.description}
                </p>
                <AlternativesForm 
                    onSubmit={(infosDoEvento) =>{
                            infosDoEvento.preventDefault();
                            setIsQuestionSubmited(true);
                            setTimeout(() => {
                            addResults(isCorrect);
                                onSubmit();
                                setIsQuestionSubmited(false);
                                setSelectedAlternative(undefined);
                        },  2 * 1000)
                        
                    }}
                >
                    {question.alternatives.map( (alternative, alternativeIndex) => {
                        const alternativeId = `alternative__${alternativeIndex}`;
                        const alternativeStatus =  isCorrect ? 'SUCCESS' : 'ERROR';
                        const isSelected = selectedAlternative === alternativeIndex;
                        return (
                                <Widget.Topic 
                                as="label" 
                                key={alternativeId} 
                                htmlFor={alternativeId}
                                data-selected={isSelected}
                                data-status={isQuestionSubmited && alternativeStatus}
                                >
                                    <input
                                    style={{display:'none'}}    
                                    id={alternativeId}
                                    name={questionId}
                                    onChange={() => setSelectedAlternative(alternativeIndex) }
                                    type="radio" 
                                    />
                                    {alternative}
                                </Widget.Topic>
                                );
                            }
                        )
                    }
                    { /*<pre>
                        {JSON.stringify(question, null, 4)}
                    </pre> */}

                    <Button type="submit" disabled={!hasAlternativeSelected}>
                        Confirmar
                    </Button>
                    {isQuestionSubmited && isCorrect }
                    {isQuestionSubmited && !isCorrect }
                </AlternativesForm>
            </Widget.Content>
        </Widget>
    );
}

const screenStates = {
    QUIZ:'QUIZ',
    LOADING:'LOADING',
    RESULT:'RESULT',
};

export default function QuizPage() {
    const [screenState, setScreenState] = React.useState(screenStates.LOADING);
    const [results, setResults] = React.useState([]);
    const totalQuestions = db.questions.length;
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const questionIndex = currentQuestion;
    const question = db.questions[questionIndex];

    function addResults(result) {
        //results.push(result); funciona
        setResults([
            ...results,
            result,
        ]) 
    }

    //[React chama de: Efeitos|| Effects] ciclo de estados!
    //React.useEffet
    // atualizado === WillUpdate
    //morre === willUnmount
    React.useEffect(() => {
        //fetch()...
        setTimeout(() => {
            setScreenState(screenStates.QUIZ);
        }, 1* 1000);
    //nasce === didMount
    }, []);

    function handleSubmitQuiz() {
        const nextQuestion = questionIndex + 1;

        if (nextQuestion < totalQuestions) {
            setCurrentQuestion(nextQuestion);
        } else {
            setScreenState(screenStates.RESULT);
        }
        
    }

    return (  
        <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>
                <QuizLogo />
                {screenState === screenStates.QUIZ && (
                    <QuestionWidget
                        question = {question} 
                        questionIndex = {questionIndex} 
                        totalQuestions = {totalQuestions} 
                        onSubmit = {handleSubmitQuiz}
                        addResults = {addResults}
                    />
                )}
                {screenState === screenStates.LOADING && <LoadingScreen />}

                {screenState === screenStates.RESULT  && <ResultWidget results = {results} /> }

            </QuizContainer>
        </QuizBackground>
    );
}