import Card from "../components/atoms/Card/Card.jsx";
import Content from "../components/atoms/content/Content.jsx";
import Navbar from "../components/atoms/NavBar/Navbar";
import { useCreateProject } from "../hooks/apis/mutations/useCreateProject"
import imageUrl from '../assets/react.svg'

export function CreateProject(){
    
    const {createProjectMutation , isPending } = useCreateProject();
    async function handleOnClick(){
       try {
         await  createProjectMutation();
         console.log("Now we shoule be directed to the editor");
       } catch (error) {
        console.log(error);
        throw error;        
       }
    }
    return (
        <>
           <Navbar/>
           <Content/>
           {/* <div className="text-center">
            <p className="text-center text-xl">Choose a template to start with:</p>
            <button onClick={handleOnClick} disabled={isPending}>
              <Card title="React" description="A JavaScript library for building user interfaces" imageUrl={imageUrl}/>
            </button>
           </div> */}
        </>
    )
}