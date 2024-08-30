import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import path from 'path';
import { nanoid } from 'nanoid';

// Configure multer storage
const upload = multer({
  storage: multer.diskStorage({
    destination: path.join(process.cwd(), 'public', 'uploads'),
    filename: (req, file, cb) => {
      cb(null, `${nanoid()}${path.extname(file.originalname)}`);
    },
  }),
});

// Custom middleware to handle multer
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      await runMiddleware(req, res, upload.single('file'));
      return res.status(200).json({ data: 'success' });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ error: `Upload failed: ${error.message}` });
      }
      return res.status(500).json({ error: 'An unknown error occurred' });
    }
  }

  res.setHeader('Allow', ['POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
