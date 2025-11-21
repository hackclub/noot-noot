import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

export default function Home() {
  const [swapped, setSwapped] = useState(false);
  const [agreedToNootNoot, setAgreedToNootNoot] = useState(false);
  const audioRef = useRef(null);
  const seasonSongRef = useRef(null);

  useEffect(() => {
    if (!agreedToNootNoot) return;

    // Play background music on loop
    if (seasonSongRef.current) {
      seasonSongRef.current.play().catch(err => console.log('Background music play failed:', err));
    }

    const interval = setInterval(() => {
      setSwapped(prev => !prev);
      if (audioRef.current) {
        audioRef.current.play().catch(err => console.log('Audio play failed:', err));
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [agreedToNootNoot]);

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const ogImage = baseUrl ? `${baseUrl}/imageOne.png` : '/imageOne.png';

  if (!agreedToNootNoot) {
    return (
      <>
        <Head>
          <title>Noot-Noot Weekend</title>
          <meta name="description" content="What if the linux penguin was the noot-noot penguin? Join the Noot-Noot Weekend hackathon and build Linux apps with subtle noot-noot penguin references!" />
          <meta property="og:title" content="Noot-Noot Weekend" />
          <meta property="og:description" content="What if the linux penguin was the noot-noot penguin? Join the Noot-Noot Weekend hackathon and build Linux apps with subtle noot-noot penguin references!" />
          <meta property="og:image" content={ogImage} />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Noot-Noot Weekend" />
          <meta name="twitter:description" content="What if the linux penguin was the noot-noot penguin? Join the Noot-Noot Weekend hackathon and build Linux apps with subtle noot-noot penguin references!" />
          <meta name="twitter:image" content={ogImage} />
        </Head>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', width: '100vw', padding: '20px', boxSizing: 'border-box'}}>
          <button onClick={() => setAgreedToNootNoot(true)}>
            I want to experience noot noot
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Noot-Noot Weekend</title>
        <meta name="description" content="What if the linux penguin was the noot-noot penguin? Join the Noot-Noot Weekend hackathon and build Linux apps with subtle noot-noot penguin references!" />
        <meta property="og:title" content="Noot-Noot Weekend" />
        <meta property="og:description" content="What if the linux penguin was the noot-noot penguin? Join the Noot-Noot Weekend hackathon and build Linux apps with subtle noot-noot penguin references!" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Noot-Noot Weekend" />
        <meta name="twitter:description" content="What if the linux penguin was the noot-noot penguin? Join the Noot-Noot Weekend hackathon and build Linux apps with subtle noot-noot penguin references!" />
        <meta name="twitter:image" content={ogImage} />
      </Head>
      <div style={{display: 'flex', justifyContent: 'center', minHeight: '100vh', width: '100vw', padding: '20px', boxSizing: 'border-box'}}>
    <div style={{maxWidth: '600px', width: '100%', marginTop: '20px'}}>
    <audio ref={audioRef} src="/nootnoot.mp3" preload="auto" />
    <audio ref={seasonSongRef} src="/seasonSong.mp3" preload="auto" loop />
    {/* <p className="title" style={{textAlign: "center"}}>
      {swapped ? (
        <>Noot-<b>Noot</b> Weekend</>
      ) : (
        <><b>Noot</b>-Noot Weekend</>
      )}
    </p> */}
    
    <div style={{
      aspectRatio: '3/1', 
      width: "100%", 
      border: "1px solid #000",
      backgroundImage: swapped ? "url('/imageTwo.png')" : "url('/imageOne.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>

    </div>
    <p>What if the {swapped ? 'noot-noot' : 'linux'} penguin was the {swapped ? 'linux' : 'noot-noot'} penguin? We can make that alternative universe happen this weekend by making Linux apps which include noot-noot.</p>
    <div style={{
      aspectRatio: '3/1', 
      width: "100%", 
      border: "1px solid #000",
      backgroundImage: swapped ? "url('/imageOne.png')" : "url('/imageTwo.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>

    </div>
    <p>Hey, Thomas here</p>

    <p>This weekend I challenge you to design, code, and ship an offline-compatible linux application (with some <b>subtle</b> noot-noot penguin reference<i>(s)</i>).</p>
    <p>This sounds scary, but it's not: you can totally do it. You can use anything you'd like (<a href="https://www.gtk.org/" target="_blank" rel="noopener noreferrer">GTK</a>, <a href="https://www.electronjs.org/" target="_blank" rel="noopener noreferrer">Electron</a>, <a href="https://godotengine.org/" target="_blank" rel="noopener noreferrer">Godot</a>, <a href="https://www.qt.io/" target="_blank" rel="noopener noreferrer">Qt</a>, whatever you'd like really)</p>
    <p>I'll also be making an app alongside you this weekend (Nov 21-Nov 23), it will be a journal app for daily encrypted journaling, all local.</p>
    <p>We all need to start today and ship by Sunday (midnight whatever timezone you're in)</p>
    <p>If you complete the challenge this weekend, ship your app, I'll display it on the site forever & might mail you a handful of vintage postcards <i>(we'll see)</i></p>
    <p>This is the Noot-Noot weekend. It's only this weekend, and if you miss it, you'll never be a part of the Noot-Noot weekend hackathon ship site (this site). <i>ofc no double dip, please don't ask</i></p>
    <p>To succeed, you need to make your app light weight (it needs to be able to run on a Raspberry Pi 5).</p>
    <p>I'll make a video where I go through all of your apps on the Pi 5 and showcase that.</p>

    <p>See y'all Sunday & please be sure to use hackatime, open-source your project on github, and post along the journey updates in #noot-noot!</p>
    <p style={{marginTop: '20px', marginBottom: '10px'}}><a href="https://hackclub.slack.com/archives/C09V8D7CEP2" target="_blank" rel="noopener noreferrer">Join #noot-noot on slack</a></p>
    <p style={{marginTop: '10px', marginBottom: '10px'}}><a href="https://forms.hackclub.com/t/kGBsn7Gz3mus" target="_blank" rel="noopener noreferrer">Ship your project to noot-noot site (& potentially receive some postcards)</a></p>
    <p style={{marginTop: '20px', marginBottom: '5px'}}>~Thomas</p>
    <p style={{marginTop: '5px', marginBottom: '40px'}}><i>in life we are always learning</i></p>
    </div>
    </div>
    </>
  );
}

