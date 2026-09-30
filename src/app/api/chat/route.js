import { OpenAI } from "openai";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages must be an array" },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;

    // MOCK RESPONSE: If no API key is provided, return a fake AI response 
    // so you can test the UI before buying a real key.
    if (!apiKey || apiKey === "dummy_key") {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      const lastMessage = messages[messages.length - 1].content;
      return NextResponse.json({
        role: "assistant",
        content: `(Mock Mode) You said: "${lastMessage}".\n\nThis is a simulated response because no API key was found. The chat interface works perfectly! Once you purchase a real OpenAI API key, just add it to your .env.local file and this mock will automatically be replaced with real AI responses.`
      });
    }

    // REAL RESPONSE: When you buy a key and add it to .env.local, it runs this code.
    const openai = new OpenAI({ apiKey });
    
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
    });

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.error("OpenAI API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch response from AI", details: error.message },
      { status: 500 }
    );
  }
}
