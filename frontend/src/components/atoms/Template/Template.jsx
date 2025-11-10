import Card from "../Card/Card";
import imageUrl from '../../../assets/react.svg'
import Button from "../button/Button";
import axios from '../../../config/axiosConfig.js';
export default function Template() {
    function handleOnClick(){
        axios.post('/api/v1/projects');
    }
    return (
        <>
            <div className=" h-full bg-black w-full">
                <div className="flex flex-col  justify-between ">
                    <div className="mt-50 ml-50">
                        <h1 className="text-6xl mb-4 bg-[linear-gradient(45deg,#FF8C00,#FF4500)] bg-clip-text text-transparent">Hello, Jugtar</h1>
                        <p className="text-xl bg-[linear-gradient(45deg,#FF8C00,#FF4500)] bg-clip-text text-transparent">What do you want to build?</p>
                    </div>
                    <div class="relative z-10 bg-[#1e1e1e] rounded-2xl shadow-2xl w-3/4 h-[450px] mx-auto ">
                        <div class="p-6 text-green-300 font-mono">
                            <p>Start coding an app</p>
                            <Button  onClick={handleOnClick} styleClass="m-4" text={<Card title="React" description="A JavaScript library for building user interfaces" imageUrl={imageUrl}/>}/>
                            
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}