export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  context?: {
    unitTitle?: string;
    topicTitle?: string;
  };
}

export interface ChatContext {
  unitTitle?: string;
  topicTitle?: string;
  syllabusPoint?: string;
}

class AIService {
  private apiUrl = '/api/ai/chat';

  /**
   * Sends a user query to the AI service.
   * Calls secure backend proxy (/api/ai/chat).
   * Gracefully falls back to structured educational responses if backend key is missing.
   */
  public async sendMessage(
    message: string,
    history: ChatMessage[],
    context?: ChatContext
  ): Promise<string> {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3500);

      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message,
          context,
          history: history.slice(-6).map(h => ({
            role: h.sender === 'user' ? 'user' : 'assistant',
            content: h.text
          }))
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        const data = await response.json();
        if (data.reply) {
          return data.reply;
        }
      }
    } catch {
      // Fall back to local educational response
    }

    return this.generateEducationalResponse(message, context);
  }

  private async generateEducationalResponse(
    query: string,
    context?: ChatContext
  ): Promise<string> {
    await new Promise(resolve => setTimeout(resolve, 600));

    const q = query.toLowerCase();

    if (context?.topicTitle) {
      if (q.includes('explain') || q.includes('simple') || q.includes('help') || q.includes('summary')) {
        return `### 📘 RIET AI Topic Guidance: ${context.topicTitle}\n\n` +
          `Here is a quick summary for **${context.topicTitle}** (${context.unitTitle || 'AI Tools'}):\n\n` +
          `1. **Core Concept:** Remember the 4-part structure (Context, Instruction, Format, Constraints) or key tool capabilities.\n` +
          `2. **Academic Verification:** Always fact-check AI outputs against verified textbooks before including in assignments.\n` +
          `3. **Key Step:** Mark this topic as completed once you review the examples and takeaways above!`;
      }
    }

    if (q.includes('prompt') || q.includes('zero-shot') || q.includes('few-shot') || q.includes('chain')) {
      return `### 💡 Prompt Engineering Quick Summary\n\n` +
        `• **Zero-Shot:** Ask directly without examples.\n` +
        `• **Few-Shot:** Provide 2-3 exemplar input/output pairs for consistent formatting.\n` +
        `• **Chain-of-Thought:** Append *"Think step-by-step"* for math and multi-step logic.\n` +
        `• **4-Component Rule:** Include Context + Instruction + Format + Constraints in every prompt!`;
    }

    if (q.includes('data') || q.includes('chart') || q.includes('pandas') || q.includes('excel')) {
      return `### 📊 AI for Data Analysis (Unit 3)\n\n` +
        `• AI tools execute Python code (pandas/seaborn) behind natural language queries.\n` +
        `• **Always inspect code** to ensure columns and missing values were handled correctly.\n` +
        `• Ensure chart y-axes start at zero to avoid exaggerating differences.`;
    }

    if (q.includes('ethics') || q.includes('hallucination') || q.includes('privacy') || q.includes('dpdp')) {
      return `### ⚖️ Ethics & Data Privacy (Unit 5)\n\n` +
        `• **Hallucinations:** LLMs predict probabilistic tokens—always verify citations on Google Scholar / IEEE.\n` +
        `• **DPDP Act, 2023:** Never upload personal or student PII (phone, roll numbers, marks) to public AI tools. Sanitize data first!`;
    }

    return `Hi! I'm **RIET AI**, your educational assistant for the **AI Tools and Applications** course 🎓\n\n` +
      `Ask me any general question about:\n` +
      `• AI / ML / Generative AI principles (Unit 1)\n` +
      `• Prompt engineering techniques (Unit 2)\n` +
      `• AI for data analysis & visualization (Unit 3)\n` +
      `• AI coding & writing assistants (Unit 4)\n` +
      `• Ethics, hallucinations & DPDP Act 2023 (Unit 5)\n\n` +
      `How can I help you today?`;
  }
}

export const aiService = new AIService();
