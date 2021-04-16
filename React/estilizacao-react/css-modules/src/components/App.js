import style from './AppStyle.module.css'

function App() {
  return (
    <div className={style.App}>
      <div className={style.container}>
        <p className={style['container-text']}>
          Hello world!
        </p>
      </div>
    </div>
  );
}

export default App;
