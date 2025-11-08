import { useCreateProject } from "../hooks/apis/mutations/useCreateProject"
import { Button } from "antd";

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
           <Button onClick={handleOnClick} type="primary" >Create Playground</Button>
        </>
    )
}