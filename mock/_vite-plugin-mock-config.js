import { viteMockServe } from 'vite-plugin-mock';

export default {
  plugins: [
    viteMockServe({
      mockPath: 'mock',
      localEnabled: true
    })
  ]
};
