export default function GameCanvas(){
  return <iframe
    title="SunnyLand Game"
    src="/sunny-land/index.html"
    style={{width:'100%',aspectRatio:'16/9',border:0,imageRendering:'pixelated'}}
    allow="autoplay"
  />;
}
