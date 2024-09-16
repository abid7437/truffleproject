
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState, useRef, useEffect } from 'react'
import Waveform from "@/components/elements/Waveform"
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Switch from "react-switch";
import { useRouter } from 'next/navigation';

const audioFiles = [
    {
        url: '/assets/audio/sampleaudio.mp3',
        waveColor: '#FFFFFF',
        progressColor: 'red',
        size: { height: 50, barHeight: 20, barRadius: 2, barWidth: 3 },
        filename: 'audio1.mp3',
        isReal:false
    },
    {
        url: '/assets/audio/sampleaudio.mp3',
        waveColor: '#FFFFFF',
        progressColor: 'green',
        size: { height: 50, barHeight: 20, barRadius: 2, barWidth: 3 },
        filename: 'audio2.mp3',
        isReal:true
    },
    {
        url: '/assets/audio/sampleaudio.mp3',
        waveColor: '#FFFFFF',
        progressColor: 'red',
        size: { height: 50, barHeight: 20, barRadius: 2, barWidth: 2 },
        filename: 'audio3.mp3',
        isReal:false
    },
];

export default function Job() {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(1)
    const [isImageVisible, setImageVisible] = useState(true)
    const [files, setFiles] = useState(audioFiles);
    const [IsChecked, setIsChecked] = useState(true)


    const [tokan, setToken] = useState("")
    useEffect(() => {
        const tok=localStorage.getItem("token");
        console.log(tok);
        if(tok==undefined || tok==""){
          router.push("/login");
        }
      }, []);

    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    const handleChange=(checked) =>{
        setIsChecked(!checked);
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
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="responds-wrap uploadarea">
                                        <div className="icon">
                                            <img id="uploadicon" src="assets/img/voice/upload.png" alt="" />
                                        </div>
                                        <div className="content pb-40">
                                            <a >Upload File</a>
                                          
                                        </div>
                                        <div className="content pb-40">
                                            <p>Frame Length 2</p>
                                        <RangeSlider
                                             className="single-thumb"
                                             defaultValue={[0, 50]}
                                             thumbsDisabled={[true, false]}
                                             rangeSlideDisabled={true}
                                           />
                                        </div>

                                        <div className="content pb-40">
                                        <p>Sensitivity 50%</p>
                                        <RangeSlider
                                             className="single-thumb"
                                             defaultValue={[0, 50]}
                                             thumbsDisabled={[true, false]}
                                             rangeSlideDisabled={true}
                                           />
                                        </div>

                                        <div className="content pb-40">
                                        <p>Isolate Voice</p>
                                        <label>
      
        <Switch onChange={() => handleChange(IsChecked)} checked={IsChecked} />
      </label>
                                        </div>

                                        <div className="content">
                                            <div className="pricing-btn">
                                                <Link href="/login" className="btn btn-two">Upload</Link>
                                            </div>
                                        </div>
                                    
                                    </div>

                                </div>
                                <div className="col-lg-9">
                                    <div className="contact-form audiolist">
                                        <div className="job-item-wrap">
                                            {files.map((audio, index) => (
                                                <div className="job-item" key={index}>
                                                 
                                                    <Waveform
                                                        audioUrl={audio.url}
                                                        waveColor={audio.waveColor}
                                                        progressColor={audio.progressColor}
                                                        size={audio.size}
                                                        filename={audio.filename}
                                                        IsReal={audio.isReal}
                                                    />
                                                </div>
                                            ))}
                                        </div>
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