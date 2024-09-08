import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState ,useRef,useEffect} from 'react'
import WaveSurfer from 'wavesurfer.js';


export default function Job() {
    const [activeIndex, setActiveIndex] = useState(1)
    const waveformRef = useRef(null);
    let wavesurfer;
    const [playPause, setPlayPause] = useState();
  
    useEffect(() => {
      wavesurfer = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#ffffff",
        progressColor: "#FF0000",
        url: "assets/audio/sampleaudio.mp3",
        dragToSeek: true,
        width: "60vw",
        hideScrollbar: true,
        normalize: true,
        barGap: 1,
        height: 80,
        barHeight: 20,
        barRadius: 5,
        barWidth: 3,
      });
  
      wavesurfer.on("finish", () => {
        console.log("song finished");
      });
  
      wavesurfer.on("ready", () => {
        console.log("Waveform is ready");
      });
      return () => {
        wavesurfer.destroy();
      };
    }, []);
    const handleStop = () => {
      if (wavesurfer) {
        wavesurfer.stop();
      }
    };
    const handlePause = () => {
      if (wavesurfer) {
        wavesurfer.playPause();
      }
    };
  
    const handleSkipForward = () => {
      if (wavesurfer) {
        wavesurfer.skip(2);
      }
    };
    const handleSkipBack = () => {
      if (wavesurfer) {
        wavesurfer.skip(-2);
      }
    };


    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={<>Try a <span>Demo</span></>}>
                <div>
                    {/* faq-area */}

                    {/* faq-area-end */}
                    {/* help-area */}
                    <section className="help-area pb-50">
                        <div className="container">

                            <div className="row justify-content-center">


                                <div className="col-md-12">
                                    <div className="help-center-item">
                                        <div className="icon">
                                            <img id="uploadicon" src="assets/img/voice/upload.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <a >Upload File</a>
                                            <p>The best way to get answer faster.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="job-area pb-50">
                    <div className="container">
                        <div className="job-item-wrap">
                            <div className="job-item">
                            <img id="uploadicon" src="assets/img/voice/playicon.png" alt="" /> <div ref={waveformRef} />
                            </div>
                        </div>
                        
</div>
                    </section>
                    <section className="counter-area-three pb-130">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="counter-content">
                                        <div className="section-title-four mb-40">
                                            <h2 className="title">AI can write content just like humans can</h2>
                                        </div>
                                        <p>By using Natural Language Processing (NLP) techniques, AI can understand the context, tone, and intent of a given piece of content, and produce written output that's relevant and engaging. This technology is especially useful for generating large volumes of content quickly and accurately, which can save businesses a significant amount of time and resources.</p>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="counter-item-wrap-three">
                                        <ul className="list-wrap">
                                            <li>
                                                <div className="counter-item-three">
                                                    <div className="icon">
                                                        <img id="uploadicon" src="assets/img/voice/playicon.png" alt="" />
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="counter-item-three">
                                                    <div className="icon">
                                                        <img id="uploadicon" src="assets/img/voice/download.png" alt="" />
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="threeelist">
                                                <div className="counter-item-three wavediv">
                                                    <img src="/assets/img/voice/wavenew.png"></img>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                  
                    {/* help-area-end */}
                </div>
            </Layout>
        </>
    )
}