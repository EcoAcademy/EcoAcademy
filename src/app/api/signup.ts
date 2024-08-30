// pages/api/signup.ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface SignupData {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  gender: string;
  school: string;
  grade: string;
  country: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data: SignupData = req.body;

    // Basic validation
    if (!data.email || !data.username || !data.password || !data.confirmPassword) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    if (data.password !== data.confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    // Process signup logic (e.g., save user to database)
    try {
      // Simulate signup process
      // For example: await db.saveUser(data);
      return res.status(200).json({ message: 'Signup successful' });
    } catch (error) {
      return res.status(500).json({ message: 'Signup failed' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
