import React, {Component} from 'react';
import './App.scss';

 
const newQuiz = [{ 
  name : "Food Quiz",
  author: "Sadie",
  questions : [
    {
      questionName: "What do you like to eat?",
      answers: [
        {
          text: "Bananas"
        },
        {
          text: "Apples"
        },
        {
          text: "Oranges"
        }
        
      ]
    },
    {
      questionName: "What are you",
      answers: [
        {
          text: "What?"
        },
        {
          text: "Huh?"
        },
        {
          text: "A being of an alternate race"
        }
        
      ]
    },
    {
      questionName: "How are you",
      answers: [
        {
          text: "Realll good"
        },
        {
          text: "Super dopetown"
        },
        {
          text: "Yes"
        }
        
      ]
  }
  ]

}]

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      quizzes: newQuiz,
    }
  }

  handleAddQuiz = (e) => {
    e.preventDefault();
    //console.log(e);
    fetch('http://localhost:8080/add-quiz', {
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      method: "POST",
      body: JSON.stringify(newQuiz),
    })
    .then(res => {
      if(res.status === 200){
        console.log("quiz added")
      }
      else {
        console.log("something died")
      }
    })
    .catch(err => {
      console.log(err)
    })
    /*.then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
    });*/

  }
 
  render() {
  return (
    <div className="App">
    <nav className="navbar navbar-light bg-light">
       <a className="navbar-brand" href="#">Open Quiz</a>
       
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Quiz 1</a></li>
        <li class="breadcrumb-item"><a href="#">Quiz 2</a></li>
        <li class="breadcrumb-item"><a href="#">Quiz 3</a></li>
        <li class="breadcrumb-item"><a href="#">Quiz 4</a></li>
        <li class="breadcrumb-item active" aria-current="page">Quiz 5</li>
      </ol>
    </nav>

       <i className="fas fa-plus add-icon" onClick = {e => this.handleAddQuiz(e)} ></i>
    </nav>
    <div className = "container">
  {this.state.quizzes.map((quiz, index) => {
        return(
          <div class="card" key={index}>
           <div class="card-body">
            <p><strong>Quiz Name:</strong> {quiz.name}</p>
            <p><strong>Author:</strong> {quiz.author}</p>
            {quiz.questions.map((question, index) =>  {
              return(
                <div key={index + 1}>
                  <p><strong>Question {index + 1}:</strong> {question.questionName}</p>
                  {question.answers.map((answers, index) => { 
                    return(
                      <div key = {index}>
                      <p>{answers.text}</p>
                      </div>
                    )
                  })}
                </div>
              )
            })}
            </div>
          </div>
        )
      })}
     </div>
    </div>
   
     
  );
 } 
}

export default App;
