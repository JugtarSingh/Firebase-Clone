import Editor from '@monaco-editor/react';
import { useEffect, useState } from 'react';

export default function EditorComponent(){
    const [editorState , setEditorState ] = useState({
        theme:null
    })

    async function downloadTheme(){
        const response = await fetch('/Blackboard.json');
        console.log(response);
        const data = await response.json();
        setEditorState({...editorState , theme:data});
        }
    function handleEditorTheme( editor , monaco ){
        monaco.editor.defineTheme("Blackboard", editorState.theme);
        monaco.editor.setTheme('Blackboard');

    }    
    useEffect(()=>{
       downloadTheme();
    },[])
    return (
        <>
            {editorState.theme &&
            <Editor 
            height={'80vh'}
            width={'100%'}
            defaultLanguage='javascript'
            defaultValue='//Welcome to the playground'
            options={{
                fontSize:18,
                fontFamily:'monospace'
            }} 
            onMount={handleEditorTheme}
            />
        }
        </>
    )
}