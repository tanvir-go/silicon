import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyBn-zlc9qrnAIqcUVyu8VaPtVW_pU2lNtw";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages array" }, { status: 400 });
    }

    // fallback if key isn't provided
    if (!GEMINI_API_KEY) {
      console.warn("GEMINI_API_KEY not configured. Falling back to rule-based answers.");
      return NextResponse.json({ text: "Hello! We are currently initializing our live AI chat. Please call us at 09614556655 or email sales@silicon.com.bd for direct sales inquiries." });
    }

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: `You are SCL Solution Bot, the official AI chat assistant for Silicon Computing Ltd. (SCL), a premium B2B IT infrastructure and Enterprise Solutions provider in Bangladesh.
Your phone number is: 09614556655
Your email is: sales@silicon.com.bd
You represent senior solutions management, including Md Mizanur Rahman (Senior Manager-Enterprise Solution).
Always reply professionally, concisely, and with premium enterprise tone. Emphasize B2B procurement, Dell/HPE Servers, Cisco/Aruba networking, VMware virtualization licensing, and corporate support contracts. Keep your answers brief (1-3 sentences maximum) suitable for a live chat popup window. Do not output markdown lists or bold tags where possible, keep it in conversational plain text.`
    });

    // Format Gemini history. Constraints: first message MUST be 'user', and roles must alternate.
    const rawHistory = messages.slice(0, -1);
    const formattedHistory: any[] = [];
    let expectedRole = "user";

    for (const msg of rawHistory) {
      const role = msg.sender === "user" ? "user" : "model";
      if (role === expectedRole) {
        formattedHistory.push({
          role: role,
          parts: [{ text: msg.text }]
        });
        expectedRole = expectedRole === "user" ? "model" : "user";
      }
    }

    const chat = model.startChat({
      history: formattedHistory
    });

    const lastMessage = messages[messages.length - 1]?.text || "";
    const result = await chat.sendMessage(lastMessage);
    const response = await result.response;
    const text = response.text().trim();

    return NextResponse.json({ text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ error: "Failed to generate AI response" }, { status: 500 });
  }
}
