import ChatBody from "client/src/components/ChatBody.jsx";

function App() {

  return (
    <div classname = 'bg-[#1A232E] h-screen py-6 relative sm:px-28 text-white overflow-hidden flex flex-col justify-between align-middle'> 

      <div className="gradient-01 z-0 absolute"></div>
      <div className="gradient-02 z-0  absolute"></div>    
      
      
      <div className="upppercase font-bold text-2xl text-center mb-3">
        ChatGpt 2.0
      </div>


      <div className="h-[90%] overflow-auto w-full max-w-4xl min-w-[20rem] py-8 px-4 self-center">
        <ChatBody/>
      </div>



      <div>input</div>
    </div>
  )
}

export default App
