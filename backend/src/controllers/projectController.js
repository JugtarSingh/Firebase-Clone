import util from 'util';
import child_process from 'child_process'
import fs from 'fs/promises';
import uuid4 from 'uuid4';
import { REACT_PROJECT_COMMAND } from '../config/server-config.js';


const execPromisefield = util.promisify(child_process.exec)

export const createProjectController = async (req,res)=>{
    //create a unique id and then in projects folder create a new folder with that id
    const projectId = uuid4();
    await fs.mkdir(`projects/${projectId}`);

    //After this call the npm create vite cmd in the newly created project folder
    const response = await execPromisefield(REACT_PROJECT_COMMAND,{
        cwd: `projects/${projectId}`
    })
    res.json({message:"Project created" , data: projectId})
}