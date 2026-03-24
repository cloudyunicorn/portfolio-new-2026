
import { graph } from "@/lib/chat/agent";
import { HumanMessage } from "@langchain/core/messages";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    
    // Get the last message from the user
    const lastMessage = messages[messages.length - 1].content;

    // Use LangGraph to stream the response
    // Since we are stateless, we just pass the current history
    const eventStream = await graph.streamEvents(
      { messages: [new HumanMessage(lastMessage)] }, 
      { version: "v2" }
    );

    const stream = new ReadableStream({
      async start(controller) {
        for await (const event of eventStream) {
          if (event.event === "on_chat_model_stream") {
            const content = event.data.chunk.content;
            if (content) {
              controller.enqueue(new TextEncoder().encode(content));
            }
          }
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response(JSON.stringify({ error: "Failed to process chat" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
