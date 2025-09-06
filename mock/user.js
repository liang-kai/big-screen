export default [
  {
    url: '/api/user',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: {
          name: 'mock-user',
          age: 25
        }
      }
    }
  }
];
