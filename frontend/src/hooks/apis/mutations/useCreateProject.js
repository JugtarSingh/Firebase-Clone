import { useMutation } from "@tanstack/react-query"
import { createProjectApi } from "../../../apis/projects"


export const useCreateProject = () =>{
    const { mutateAsync , isError ,isSuccess ,isPending} = useMutation({
        mutationFn:createProjectApi,
        onSuccess:(data)=>{
            console.log("Project created Successfully",data);
        },
        onError:()=>{
            console.log("Something went while creating the project");
        }
    })
    return {
            createProjectMutation: mutateAsync,
            isError,
            isSuccess,
            isPending
        }
}