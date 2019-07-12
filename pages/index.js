// This is the Link API
import Link from 'next/link'


const whiteStyle = {
  width: "100px",
  height: "100vh",
  display: "inline-block",
  position: "relative",
  left: "0px",
  top: "0px",
  zIndex: "-1",
  backgroundColor: "#ed2939",
  margin: "0px"
}
const redStyle = {
  width: "100px",
  height: "100vh",
  display: "inline-block",
  position: "relative",
  left: "0px",
  top: "0px",
  zIndex: "-1",
  backgroundColor: "#e2e2e2"
}

const Index = () => (
  <div>
    <style jsx global>{`
      body { 
        padding: 0px;
        position: absolute;
      }
      `}
    </style>
    <div style ={whiteStyle}></div>
    <div style ={whiteStyle}></div>
    <div style ={whiteStyle}></div>
    <div style ={redStyle}></div>
    <div style ={redStyle}></div>
    <div style ={redStyle}></div>
    <iframe src="/static/silence.mp3" allow="autoplay" id="audio" style={{display:'none'}}></iframe>
    <audio controls>
      <source src="/static/ndpedit.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div>
)

export default Index