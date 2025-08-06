// Mock API service for frontend testing (no backend needed)
const mockDelay = (ms = 800) => new Promise(resolve => setTimeout(resolve, ms));

const mockAPI = {
  post: async (endpoint, data) => {
    await mockDelay(); // Simulate network delay
    
    if (endpoint === '/auth/login') {
      if (data.email && data.password) {
        return { data: { token: 'mock-jwt-token', message: 'Login successful' } };
      }
      throw new Error('Invalid credentials');
    }
    
    if (endpoint === '/auth/register') {
      if (data.email && data.password) {
        return { data: { message: 'Account created successfully' } };
      }
      throw new Error('Registration failed');
    }
    
    if (endpoint === '/chat/ask') {
      const krishnaResponses = [
        "My dear child, remember that you have the right to action, but not to the fruits of action. Focus on your duty without attachment to results.",
        "In times of doubt, turn inward. The answers you seek already reside within your heart, waiting to be discovered through meditation and self-reflection.",
        "True happiness comes not from external circumstances, but from finding peace within yourself. Cultivate equanimity in both success and failure.",
        "Every challenge is an opportunity for growth. Face difficulties with courage, knowing that they are temporary and serve to strengthen your spirit.",
        "Love and compassion are the highest virtues. Treat all beings with kindness, for we are all connected in the divine consciousness."
      ];
      
      const randomResponse = krishnaResponses[Math.floor(Math.random() * krishnaResponses.length)];
      return { 
        data: { 
          status: 'success',
          answer: randomResponse 
        } 
      };
    }
    
    throw new Error('Unknown endpoint');
  }
};

export default mockAPI;
