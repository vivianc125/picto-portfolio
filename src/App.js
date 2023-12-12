import React, {useState} from 'react';



function Screen() {
  const [activeScreen, setActiveScreen] = useState('default');
  const [history, setHistory] = useState([]);

  function handleClick(type){
   let content;
   switch (type) {
    case 'about':
        content = 
          <div className="stack">
            <div className = "row">
              <div className="screenname"> vivian </div>
              <div className = "first-line"></div>
            </div>
              <div className="screen-lines"> 
            
                <p>projects</p>
              </div>
              <div className="screen-lines">

                <p>resume</p>
                </div>
              <div className="screen-lines"><p>experience</p></div>
            </div>;
        break;
    case 'education':
      content =         
      <div className="stack">
        <div className = "row">
          <div className="screenname"> education </div>
          <div className = "first-line"></div>
        </div>
          <div className="screen-lines"> 
            <p>university of houston</p>
          </div>
          <div className="screen-lines">
            <p>b.s. in computer science</p>
          </div>
          <div className="screen-lines">
            <p>may 2024</p>
          </div>
        </div>;
      break;
    default:
      content = <div>hi</div>; 
  }
    setHistory(prevHistory => [...prevHistory, content]);
  }

  function renderHistory() {
    return history.map((item, index) => <div className = "screen-base" key={index}>{item}</div>);
  }
  return (
    <div className="screen">
      <div className="screen-container">
      <div className = "row">
          <div className="stack-left">
            <div className="test"></div>
          </div>
          <div className="top-stack" >
            {renderHistory()}
          </div>
        </div>
        
      </div>

      <div className = "screen-container">
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
                    <button className="about" onClick={() => handleClick('about')}>about me</button> 
                    <p>projects</p>
                  </div>
                  <div className="screen-lines">
                    <button onClick={() => handleClick('education')}>education</button>
                    <p>resume</p>
                    </div>
                  <div className="screen-lines"><p>experience</p></div>

                </div>
              </div>        
                <div className="keyboard">                            
                  <div className = "row">      
                    <div className="keyboard-left">helloo left</div>
                    <div className="keyboard-right">
                      <div>
                        <button className="sendItem"></button>
                        <button className="sendBack"></button>
                        <button className="eraseScreen"></button>
                      </div>
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
