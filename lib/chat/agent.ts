
import { 
  StateGraph, 
  START, 
  END,
  Annotation,
  MessagesAnnotation
} from "@langchain/langgraph";
import { ChatOpenAI } from "@langchain/openai";
import { SystemMessage } from "@langchain/core/messages";
import { SYSTEM_PROMPT } from "./knowledge";

// Define the state schema
const GraphState = MessagesAnnotation;

// Initialize the model
const model = new ChatOpenAI({
  modelName: "gpt-4o-mini",
  temperature: 0,
  streaming: true,
});

// Node: Knowledge injection (Prepend system message)
const injectKnowledge = async (state: typeof GraphState.State) => {
  const messages = state.messages;
  
  // Check if system message already exists (simple stateless check)
  const hasSystemMessage = messages.some(m => m._getType() === "system");
  
  if (!hasSystemMessage) {
    return {
      messages: [new SystemMessage(SYSTEM_PROMPT), ...messages]
    };
  }
  
  return { messages };
};

// Node: LLM call
const callModel = async (state: typeof GraphState.State) => {
  const response = await model.invoke(state.messages);
  return {
    messages: [response]
  };
};

// Build the graph
const workflow = new StateGraph(GraphState)
  .addNode("injectKnowledge", injectKnowledge)
  .addNode("agent", callModel)
  .addEdge(START, "injectKnowledge")
  .addEdge("injectKnowledge", "agent")
  .addEdge("agent", END);

// Compile the graph
export const graph = workflow.compile();
