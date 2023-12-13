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
      case 'website':
        content = 
        <div className="top-stack">
          <div className="screenname"> website</div>
          <p className ="main-p">hey! thanks for looking at this silly project i made! you can see my actual website  <a href={pdf} target="_blank">here</a>.</p>
          <p className = "sub-p">p.s. - this is going to open into a new tab :{')'}</p>
        </div>;
      break;
      case 'pictochat':
        content = 
        <div className="top-stack">
          <div className="screenname"> pictochat </div>
          <p className = "main-p">i'm still in the process of fixing up my version of pictochat. thanks for your interest! check back later.</p>
        </div>;
      break;
  default:
    content = <div>error. somethings wrong!</div>; 
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

  function eraseScreen(){
    setHistory([{ content: initialContent, animating: false }]);
  }
  return (
    <div className="screen">
      <div className="screen-container top">
      <div className = "row">
          <div className="stack-left">
            <div className="scroll">
              <button className="sidePanel" disabled="true"></button>
            </div>
            <div className="drawing-items chat-icon">
              <button className="sidePanel " disabled="true"></button>
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
              <button className="sidePanel" disabled="true"></button>
              <button className="sidePanel" disabled="true"></button>
            </div>
            <div className="drawing-items">            
              <button className="sidePanel" disabled="true"></button>
              <button className="sidePanel" disabled="true"></button>
            </div>
            <div className="size">            
              <button className="sidePanel" disabled="true"></button>
              <button className="sidePanel" disabled="true"></button>
            </div>
            <div className="misc-keyboards">            
              <button className="sidePanel" disabled="true"></button>
              <button className="sidePanel" disabled="true"></button>
              <button className="sidePanel" disabled="true"></button>
              <button className="sidePanel" disabled="true"></button>
              <button className="sidePanel" disabled="true"></button>
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
                    <button className="info-button" onClick={() => handleClick('website')}>website</button>
                    </div>
                  <div className="screen-lines">
                    <button className="info-button" onClick={() => handleClick('experience')}>experience</button>
                    <button className="info-button" onClick={() => handleClick('languages')}>technical</button>
                    <button className="info-button" onClick={() => handleClick('pictochat')}>pictochat</button>
                    </div>
                    
                </div>
              </div>        
                <div className="keyboard">                            
                  <div className="keyboard-left">
                    <div className = "row keys r1">
                      <button className="keyboard-key" disabled="true">1</button>
                      <button className="keyboard-key" disabled="true">2</button>
                      <button className="keyboard-key" disabled="true">3</button>
                      <button className="keyboard-key" disabled="true">4</button>
                      <button className="keyboard-key" disabled="true">5</button>
                      <button className="keyboard-key" disabled="true">6</button>
                      <button className="keyboard-key" disabled="true">7</button>
                      <button className="keyboard-key" disabled="true">8</button>
                      <button className="keyboard-key" disabled="true">9</button>
                      <button className="keyboard-key" disabled="true">0</button>
                      <button className="keyboard-key" disabled="true">-</button>
                      <button className="keyboard-key" disabled="true">=</button>
                    </div>
                    <div className = "row keys r2">
                      <button className="keyboard-key" disabled="true">q</button>
                      <button className="keyboard-key" disabled="true">w</button>
                      <button className="keyboard-key" disabled="true">e</button>
                      <button className="keyboard-key" disabled="true">r</button>
                      <button className="keyboard-key" disabled="true">t</button>
                      <button className="keyboard-key" disabled="true">y</button>
                      <button className="keyboard-key" disabled="true">u</button>
                      <button className="keyboard-key" disabled="true">i</button>
                      <button className="keyboard-key" disabled="true">o</button>
                      <button className="keyboard-key" disabled="true">p</button>
                      <button className="keyboard-key backspace-key" disabled="true"></button>
                    </div>
                    <div className = "row keys r3">
                      <button className="keyboard-key caps-key" disabled="true">CAPS</button>
                      <button className="keyboard-key" disabled="true">a</button>
                      <button className="keyboard-key" disabled="true">s</button>
                      <button className="keyboard-key" disabled="true">d</button>
                      <button className="keyboard-key" disabled="true">f</button>
                      <button className="keyboard-key" disabled="true">g</button>
                      <button className="keyboard-key" disabled="true">h</button>
                      <button className="keyboard-key" disabled="true">j</button>
                      <button className="keyboard-key" disabled="true">k</button>
                      <button className="keyboard-key" disabled="true">l</button>
                      <button className="keyboard-key enter-key" disabled="true"></button>
                    </div>
                    <div className = "row keys r4">
                      <button className="keyboard-key shift-key" disabled="true">SHIFT</button>
                      <button className="keyboard-key" disabled="true">z</button>
                      <button className="keyboard-key" disabled="true">x</button>
                      <button className="keyboard-key" disabled="true">c</button>
                      <button className="keyboard-key" disabled="true">v</button>
                      <button className="keyboard-key" disabled="true">b</button>
                      <button className="keyboard-key" disabled="true">n</button>
                      <button className="keyboard-key" disabled="true">m</button>
                      <button className="keyboard-key" disabled="true">,</button>
                      <button className="keyboard-key" disabled="true">.</button>
                      <button className="keyboard-key" disabled="true">/</button>
                    </div>
                    <div className = "row keys r5">
                      <button className="keyboard-key" disabled="true">;</button>
                      <button className="keyboard-key" disabled="true">`</button>
                      <button className="keyboard-key space-key" disabled="true">SPACE</button>
                      <button className="keyboard-key" disabled="true">{'['}</button>
                      <button className="keyboard-key" disabled="true">{']'}</button>
                    </div>

                  </div>
                  <div className="keyboard-right">
                    <div className= "stack keyboard-button">
                      <a className = "button-link sendItem" href="https://github.com/vivianc125"><p>github</p></a>
                      <a className = "button-link sendBack" href="https://www.linkedin.com/in/vivian-chen1287/"><p>linkedin</p></a>
                      <button className = "button-link eraseScreen"onClick={eraseScreen} ><p>erase</p></button>
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
