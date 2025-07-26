export const elizaStyles = {
  container: "min-h-screen bg-gray-900 text-green-400 font-mono p-5 flex flex-col",
  innerContainer: "max-w-4xl mx-auto flex-1 flex flex-col",
  
  header: {
    container: "text-center mb-8 border-2 border-green-400 p-6 bg-green-400 bg-opacity-10",
    title: "text-4xl font-bold mb-2",
    subtitle: "text-xl opacity-80 mb-2",
    description: "text-sm opacity-70"
  },
  
  chat: {
    container: "flex-1 border-2 border-green-400 bg-black bg-opacity-80 p-5 mb-5 h-96 overflow-y-auto",
    message: "mb-4 p-3 rounded animate-fade-in",
    userMessage: "bg-blue-900 bg-opacity-30 border-l-4 border-blue-500 ml-5",
    elizaMessage: "bg-green-900 bg-opacity-30 border-l-4 border-green-400 mr-5",
    typing: "mb-4 p-3 rounded bg-green-900 bg-opacity-30 border-l-4 border-green-400 mr-5 italic opacity-70 animate-pulse"
  },
  
  input: {
    container: "flex gap-3",
    textInput: "flex-1 p-4 bg-black bg-opacity-90 border-2 border-green-400 text-green-400 font-mono text-base outline-none focus:shadow-lg focus:shadow-green-400/50 disabled:opacity-50",
    button: "px-8 py-4 bg-green-400 bg-opacity-30 border-2 border-green-400 text-green-400 font-mono text-base cursor-pointer transition-all duration-300 hover:bg-opacity-50 hover:shadow-lg hover:shadow-green-400/70 disabled:opacity-50 disabled:cursor-not-allowed"
  },
  
  info: "text-center text-sm opacity-70 mt-5"
};