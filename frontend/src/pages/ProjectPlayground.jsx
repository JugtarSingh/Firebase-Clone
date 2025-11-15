import { useParams } from "react-router-dom"
import EditorComponent from "../components/molecules/EditorComponent/EditorComponent";
import EditorButton from "../components/atoms/EditorButton/EditorButton";

export default function  ProjectPlayground(){
    const {projectId} = useParams();
    console.log(projectId);
    return (
        <>
            <h1 className="text-black">ProjectPlayground</h1>
            <EditorComponent />
            <EditorButton />
            <EditorButton  isActive={true}/>
        </>
    )
}