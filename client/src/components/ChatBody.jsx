import React from 'react' 

const ChatBody = () => {

    const aiStyle = "bg-white bg-opacity-40 backdrop-blur-lg- dropshadow-md"

return(
    <div className="flex flex-col gap-4">
    {/* client Measage */}
    <div className ="border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%]">
        <pre className='whitespace-pre-wrap'>
            <span>Hey ChatGPT, Can you help me?</span>
        </pre>
    </div>

        {/* ai Measage */}
    <div className="border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%]">
        <pre className='whitespace-pre-wrap ${aiStyle}'>
            <span>Yeah, I can Help you with anything you want!!</span>
        </pre>
    </div>


    </div>
)
}
export default ChatBody