import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  const style: React.CSSProperties = {
    backgroundColor: '#412554',
  };
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Rammetto+One&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>

      <svg
        version="1.1"
        width="800"
        height="350"
        xmlns="http://www.w3.org/2000/svg"
        style={style}
      >
        <g>
          <text
            x="50%"
            y="57%"
            textAnchor="middle"
            fontFamily="Rammetto One"
            fontWeight="bold"
            fontSize="96"
            fill="#FFE4A8"
          >
            WATAKUMI
          </text>
        </g>
      </svg>
    </>
  );
}

export default App;
