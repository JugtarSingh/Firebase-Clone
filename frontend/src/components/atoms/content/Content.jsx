import './Content.css';
import image1 from '../../../assets/image1.webp';
import image2 from '../../../assets/image2.png';
import image3 from '../../../assets/image3.png';
import Button from '../button/Button';
import {  useNavigate } from 'react-router-dom';


export default function Content() {
    const navigate = useNavigate();
    function handleOnClick(){
    console.log("Navigating to templates");
    navigate('/templates')
   }
    return (
        <>
            <div className="content bg-black">
                <h1>The Full Stack Workspace</h1>
                <p>Firebase Studio accelerates your entire development lifecycle with AI agents. Build backends, front ends, and mobile apps, all in one place.</p>
                <Button onClick={handleOnClick} text="Try FireBase Studio" styleClass="cursor-pointer bg-amber-500 w-[200px] text-black rounded-3xl p-4"/>

            </div>
            <div class="relative w-full min-h-screen  bg-[linear-gradient(to_bottom,black,#b22234,#c83b32,#e54a22,#f57a21,#f7b731,black)] p-8">

                <div class="relative z-10 bg-[#1e1e1e] rounded-2xl shadow-2xl w-3/4 h-[700px] mx-auto ">
                    <div class="p-6 text-green-300 font-mono">
                    <img src={image1} className='h-[600px]'/>
                    </div>
                </div>

            {/* <!-- FLOATING CHAT PANEL (bottom-left) --> */}
            <div class="absolute bottom-10 left-20 z-20 
                        bg-neutral-900 text-white w-[380px] h-[520px]
                        rounded-4xl shadow-2xl">
                    <img src={image3} className='w-full h-full '/>
            </div>

            {/* <!-- PHONE MOCKUP (right side) --> */}
            <div class="absolute top-40 right-10 z-30 
                        bg-black rounded-[2rem] shadow-2xl 
                        w-[300px] h-[520px] flex items-center justify-center">
                    <img src={image2} className='w-[300px] h-[520px]'/>
            </div>

            </div>

        </>
    )
}
