/**
 * SECURE BACKEND PROXY FOR OPENAI API
 * 
 * IMPORTANT SECURITY REQUIREMENT:
 * Never put your OPENAI_API_KEY in frontend client code.
 * This server file runs in Node.js on the server side and reads OPENAI_API_KEY
 * from process.env.
 * 
 * Usage:
 *   export OPENAI_API_KEY="sk-..."
 *   node server/api/ai.js
 */

const http = require('http');

const PORT = process.env.PORT || 3001;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const server = http.createServer(async (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === '/api/ai/chat' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      try {
        const { message, context, history } = JSON.parse(body || '{}');

        if (!OPENAI_API_KEY) {
          // Provide clean fallback response if key is not configured
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({
            reply: `[RIET AI - Server Note]: OPENAI_API_KEY is not configured on the server environment. Question received: "${message}". Please set OPENAI_API_KEY to activate live GPT-4o intelligence.`
          }));
          return;
        }

        const systemPrompt = `You are RIET AI, an educational learning assistant for RIET College's "AI Tools and Applications" course (B.Tech CSE(DS) - R26, JNTUK Kakinada).
Assist students with AI/ML fundamentals, prompt engineering (zero-shot, few-shot, chain-of-thought), AI data analysis, AI coding assistants, ethics, hallucination detection, and DPDP Act 2023 compliance.
Keep answers structured, concise, student-friendly, and academically rigorous.
${context?.topicTitle ? `Current Study Context: Unit "${context.unitTitle}", Topic "${context.topicTitle}".` : ''}`;

        const messages = [
          { role: 'system', content: systemPrompt },
          ...(history || []),
          { role: 'user', content: message }
        ];

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages,
            temperature: 0.7,
            max_tokens: 800
          })
        });

        const data = await response.json();
        const reply = data.choices?.[0]?.message?.content || 'Unable to generate response at this time.';

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ reply }));
      } catch {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal AI server error' }));
      }
    });
    return;
  }

  // Health check
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', service: 'RIET AI Tools Backend' }));
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found' }));
});

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`RIET AI Tools Backend Proxy running on http://localhost:${PORT}`);
  });
}

module.exports = server;
