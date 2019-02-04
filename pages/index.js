// This is the Link API
import Link from 'next/link'


const Index = () => (
  <div>Hello World! You ain't see nothing yet! Except
    <iframe src="/static/silence.mp3" allow="autoplay" id="audio" style={{display:'none'}}></iframe>
    <div>
    <audio autoPlay>
  <source src="/static/anthem.mp3" type="audio/mpeg" />
Your browser does not support the audio element.
</audio>
    </div>
    <p> 
      <Link href="/about">
        <button style={{ fontSize: 20 }}>About Page</button>
      </Link>
    </p>
  </div>
)

export default Index