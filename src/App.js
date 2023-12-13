import React, {useState, useEffect} from 'react';
import pdf from '../src/resume.pdf';


function Screen() {
  const [history, setHistory] = useState([]);
  const [activeContent, setActiveContent] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const initialContent = 
    <div className="top-stack">
        <div className="screenname"> welcome! </div>
        <p className="main-p"> hello! my name is vivian!</p>
        <p className="main-p"> i'm an aspiring software engineer seeking internships and full time positions for summer 2024.</p>
        <p className="main-p">learn more about me down below!</p>
    </div>;

useEffect(() => {
  setIsAnimating(true);
  setHistory([{content: initialContent, animating: true}]);
  const timer = setTimeout(() => {
    setHistory([{ content: initialContent, animating: false }]);
    setIsAnimating(false);
  }, 700);

  return () =>clearTimeout(timer);
}, []);

  function handleClick(type){
  if (isAnimating) return;
   let content;
   switch (type) {
    case 'about':
        content = 
        <div className="top-stack">
          <div className="screenname"> about me </div>
          <p className="main-p">vivian chen :{')'}</p>
          <p className="sub-p"> {'>'} senior at the university of houston</p>
          <p className="sub-p"> {'>'} houston, tx</p>
          <p className="sub-p"> {'>'} lover of cute things!</p>
        </div>;
        break;
    case 'education':
      content =         
      <div className="top-stack">
        <div className="screenname"> education </div>
          <p className="main-p">university of houston - june 2024</p>
          <p className="sub-p"> {'>'} b.s. in computer science</p>
          <p className="sub-p"> {'>'} minor in mathematics</p>
          <p className="sub-p">{'>'} gpa/major gpa: 3.4/3.6</p>
        </div>;
      break;
    case 'projects':
      content =         
      <div className="top-stack">
        <div className="screenname"> projects </div>
          <p className="main-p">{'>'} pebbles goes to penguin prison</p>
          <p className="main-p">{'>'} tic-tac-toe</p>
          <p className="main-p">{'>'} analyzing factors that influence attendance rates in connecticut</p>
        </div>;
      break;
    case 'experience':
      content =         
      <div className="top-stack">
        <div className="screenname"> experience </div>
          <p className="main-p">work</p>
          <p className="sub-p">{'>'} web developer @ uh sugarland</p>
          <p className="main-p">academic</p>
          <p className="sub-p">{'>'} academic chair/fundraising chair @ alpha kappa delta phi</p>
          <p className="sub-p">{'>'} member @ codeCoogs</p>
        </div>;
      break;
    case 'coursework':
      content =         
      <div className="top-stack">
        <div className="screenname"> coursework </div>
        <div className = "row">
          <div className="stack screen-info">
            <p className="main-p ">{'>'} programming & data structures</p>
            <p className="main-p ">{'>'} algorithms & data structures</p>
            <p className="main-p ">{'>'} database systems</p>
            <p className="main-p ">{'>'} computer org. & architecture</p>
          </div>
          <div className="stack screen-info">
            <p className="main-p ">{'>'} discrete mathematics </p>
            <p className="main-p ">{'>'} data science & machine learning </p>
            <p className="main-p ">{'>'} interactive game development</p>
            <p className="main-p ">{'>'} digital image processing</p>
          </div>
          </div>
        </div>;
      break;
    case 'languages':
      content =         
      <div className="top-stack">
        <div className="screenname"> technical </div>
        <div className = "row">
          <div className="stack screen-info">
            <p className="main-p">languages</p>
            <div className="row">
              <p className="sub-p ">{'>'} python   </p>
              <p className="sub-p ">{'>'} c++</p>
            </div>
            <div className="row">
              <p className="sub-p ">{'>'} html/css</p>
              <p className="sub-p ">{'>'} sql </p>
            </div>
            <div className="row">
              <p className="sub-p ">{'>'} gdscript </p>
              <p className="sub-p ">{'>'} php</p>
            </div>
          </div>

          <div className="stack screen-info">
          <p className="main-p ">frameworks & software</p>
            <div className="row">
              <p className="sub-p ">{'>'} macOS</p>
              <p className="sub-p ">{'>'} node.js</p>
            </div>
            <div className="row">
              <p className="sub-p ">{'>'} react</p>
              <p className="sub-p ">{'>'} vscode</p>
            </div>
            <div className="row">
              <p className="sub-p ">{'>'} godot</p>
              <p className="sub-p ">{'>'} pycharm</p>
            </div>
          </div>
          </div>
        </div>;
        break;
      case 'resume':
        content = 
        <div className="top-stack">
          <div className="screenname"> resume </div>
          <p className = "main-p">click <a href={pdf} target="_blank">here</a> to see my resume!</p>
          <p className = "sub-p">p.s. - this is going to open into a new tab :{')'}</p>
        </div>;
      break;
          
  default:
    content = <div>hi</div>; 
  }
  setHistory(prevHistory => [{ content, animating: true }, ...prevHistory]);
  setIsAnimating(true);
  setTimeout(() => {
    setHistory(prevHistory => 
      prevHistory.map((item, index) => 
        index === 0 ? { ...item, animating: false } : item
      )
    );
    setIsAnimating(false);
  }, 1000);
  }

  function renderActiveContent() {
    return activeContent ? (
      <div className="screen-base">
        {activeContent}
      </div>
    ) : null;
  }
  
  function renderHistory() {
    return history.map((item, index) => (
      <div className={`screen-base ${item.animating ? 'animate' : ''}`} key={index}>
          {item.content}
      </div>
    ));
  }
  return (
    <div className="screen">
      <div className="screen-container top">
      <div className = "row">
          <div className="stack-left">
            <div className="scroll">
              <button className="sidePanel"></button>
            </div>
          </div>
          <div className="screen-stack" > 
            {renderHistory()}  
            {renderActiveContent()}
          </div>
        </div>
        
      </div>

      <div className = "screen-container bottom">
        <div className = "row">
          <div className="stack-left">
            <div className="scroll">            
              <button className="sidePanel"></button>
              <button className="sidePanel"></button>
            </div>
            <div className="drawing-items">            
              <button className="sidePanel"></button>
              <button className="sidePanel"></button>
            </div>
            <div className="size">            
              <button className="sidePanel"></button>
              <button className="sidePanel"></button>
            </div>
            <div className="misc-keyboards">            
              <button className="sidePanel"></button>
              <button className="sidePanel"></button>
              <button className="sidePanel"></button>
              <button className="sidePanel"></button>
              <button className="sidePanel"></button>
            </div>
          
          </div>
          <div className="stack">
            <div className="sketch-screen">
                <div className="stack">
                <div className = "row">
                  <div className="screenname"> vivian </div>
                  <div className = "first-line"></div>
                </div>
                  <div className="screen-lines"> 
                    <button className="info-button" onClick={() => handleClick('about')}>about me</button> 
                    <button className="info-button" onClick={() => handleClick('projects')}>projects</button>
                    <button className="info-button" onClick={() => handleClick('resume')}>resume</button>
                  </div>
                  <div className="screen-lines">
                    <button className="info-button" onClick={() => handleClick('education')}>education</button>
                    <button className="info-button" onClick={() => handleClick('coursework')}>coursework</button>
                    <button className="info-button" onClick={() => handleClick('coursework')}>portfolio</button>
                    </div>
                  <div className="screen-lines">
                    <button className="info-button" onClick={() => handleClick('experience')}>experience</button>
                    <button className="info-button" onClick={() => handleClick('languages')}>technical</button>
                    <button className="info-button" onClick={() => handleClick('languages')}>pictochat</button>
                    </div>
                    
                </div>
              </div>        
                <div className="keyboard">                            
     
                  <div className="keyboard-left">
                    <div className = "row keys r1">
                      <button className="keyboard-key">1</button>
                      <button className="keyboard-key">2</button>
                      <button className="keyboard-key">3</button>
                      <button className="keyboard-key">4</button>
                      <button className="keyboard-key">5</button>
                      <button className="keyboard-key">6</button>
                      <button className="keyboard-key">7</button>
                      <button className="keyboard-key">8</button>
                      <button className="keyboard-key">9</button>
                      <button className="keyboard-key">0</button>
                      <button className="keyboard-key">-</button>
                      <button className="keyboard-key">=</button>
                    </div>
                    <div className = "row keys r2">
                      <button className="keyboard-key">q</button>
                      <button className="keyboard-key">w</button>
                      <button className="keyboard-key">e</button>
                      <button className="keyboard-key">r</button>
                      <button className="keyboard-key">t</button>
                      <button className="keyboard-key">y</button>
                      <button className="keyboard-key">u</button>
                      <button className="keyboard-key">i</button>
                      <button className="keyboard-key">o</button>
                      <button className="keyboard-key">p</button>
                      <button className="backspace-key"></button>
                    </div>
                    <div className = "row keys r3">
                      <button className="caps-key">CAPS</button>
                      <button className="keyboard-key">a</button>
                      <button className="keyboard-key">s</button>
                      <button className="keyboard-key">d</button>
                      <button className="keyboard-key">f</button>
                      <button className="keyboard-key">g</button>
                      <button className="keyboard-key">h</button>
                      <button className="keyboard-key">j</button>
                      <button className="keyboard-key">k</button>
                      <button className="keyboard-key">l</button>
                      <button className="enter-key"></button>
                    </div>
                    <div className = "row keys r4">
                      <button className="shift-key">SHIFT</button>
                      <button className="keyboard-key">z</button>
                      <button className="keyboard-key">x</button>
                      <button className="keyboard-key">c</button>
                      <button className="keyboard-key">v</button>
                      <button className="keyboard-key">b</button>
                      <button className="keyboard-key">n</button>
                      <button className="keyboard-key">m</button>
                      <button className="keyboard-key">,</button>
                      <button className="keyboard-key">.</button>
                      <button className="keyboard-key">/</button>
                    </div>
                    <div className = "row keys r5">
                      <button className="keyboard-key">;</button>
                      <button className="keyboard-key">`</button>
                      <button className="space-key">SPACE</button>
                      <button className="keyboard-key">{'['}</button>
                      <button className="keyboard-key">{']'}</button>
                    </div>

                  </div>
                  <div className="keyboard-right">
                    <div className= "stack keyboard-button">
                      <a className = "button-link sendItem" href="https://github.com/vivianc125"><p>github</p></a>
                      <a className = "button-link sendBack" href="https://www.linkedin.com/in/vivian-chen1287/"><p>linkedin</p></a>
                      <a className = "button-link eraseScreen" href="..."><p>portfolio</p></a>

                    </div>
                  </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
}

export default Screen;
