import { agent, SuperAgent, SuperAgentRequest } from 'superagent';

const testUser: SuperAgent<SuperAgentRequest> = agent();

describe.skip('[Api] note', () => {
  it('[GET getNotes] should return notes data', async () => {
    try {
      const { text: notes } = await testUser.get('localhost:3003/api/note/getNotes');
      const content = JSON.parse(notes);
      expect(content.data).toBe('notes here');
    } catch (err) {
      console.error(err);
    }
  });
});
