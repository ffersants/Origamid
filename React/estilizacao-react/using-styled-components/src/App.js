
import React from 'react'
import styled from 'styled-components' 

  const Paragraph = styled.label`
    font-size: 2rem;
  `

  const ContainerTheme = styled.div`
    background-color: ${(props) => props.themeChosed === 'dark' ? '#000e' : '#fff'};
    color: ${(props) => props.themeChosed === 'dark' ? '#fff' : '#000e'};
    transition: all .3s;
    width: 100%;
    height: 100%;
    position: absolute;
  `

function App() {

  const [theme, setTheme] = React.useState('light')

  function handleClick({target}){
    setTheme(target.value)
  }

  function isChecked(value){
    return theme.includes(value)
  }

  return (
    <div className="App">
      <ContainerTheme themeChosed={theme}>
        <h1>Tema atual {theme}</h1>
        <h1>Mudar tema</h1>

          <Paragraph>
            <input name="theme" checked={isChecked('light')} onClick={handleClick}  value="light" type="radio"/>
            Light
          </Paragraph>


    
          <Paragraph>
            <input name="theme" checked={isChecked('dark')} onClick={handleClick} value="dark" type="radio"/>
            Dark
          </Paragraph>
      </ContainerTheme>
    </div>
  );
}

export default App;
