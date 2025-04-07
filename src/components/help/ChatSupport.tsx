
import { Send } from "lucide-react";
import { useState } from "react";

const ChatSupport = () => {
  const [message, setMessage] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the message to a backend service
    setMessage("");
  };
  
  return (
    <div className="bg-card border rounded-lg overflow-hidden">
      <div className="p-4 border-b">
        <h3 className="font-medium">Need Help?</h3>
        <p className="text-sm text-muted-foreground mt-1">
          If you have any questions about this module or need further clarification about Green Wave's FMCG sales approach, chat with our AI assistant below.
        </p>
      </div>
      
      <div className="p-4 bg-muted/30 h-64 overflow-y-auto">
        <div className="mb-4">
          <p className="text-sm font-medium mb-1">Hello! I'm your Green Wave FMCG learning assistant. How can I help you with your training?</p>
          <span className="text-xs text-muted-foreground">08:15 pm</span>
        </div>
      </div>
      
      <div className="p-4 border-t">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your question..."
            className="flex-1 py-2 px-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <button 
            type="submit" 
            className="bg-brand hover:bg-brand-dark text-white p-2 rounded-md transition-colors"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatSupport;
