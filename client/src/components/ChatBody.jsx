import React from 'react' 

const ChatBody = () => {

return(
    <div className="flex flex-col gap-4">
    {/* client Measage */}
    <div className ="border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%]">
        <pre className='whitespace-pre-wrap'>
            <span>Hey ChatGPT, Can you help me?</span>
        </pre>
    </div>

        {/* ai Measage */}
    <div>
        <pre>
            <span>Hey ChatGPT, Can you help me??</span>
        </pre>
    </div>


    </div>
)
}
export default ChatBody