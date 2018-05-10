import { agent, SuperAgent, SuperAgentRequest } from 'superagent';

const testUser: SuperAgent<SuperAgentRequest> = agent();

describe.skip('[Api] api test', () => {
  it('[GET api] should return api data', async () => {
    expect.assertions(1);
    try {
      const { text } = await testUser.get('localhost:3003/api');
      const content = JSON.parse(text);
      expect(content.data).toBe('api get data');
    } catch (err) {
      console.error(err);
    }
  });

  it('[POST api] should return api data', async () => {
    expect.assertions(1);
    try {
      const { text } = await testUser.post('localhost:3003/api');
      const content = JSON.parse(text);
      expect(content.data).toBe('api post data');
    } catch (err) {
      console.error(err);
    }
  });
});
