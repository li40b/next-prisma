import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../../prisma/client';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'GET') {
      // Prismaを使用して全てのユーザーを取得
      const users = await prisma.user.findMany();
      
      // JSON形式でユーザー情報を返す
      res.status(200).json(users);
    } else {
      // GET以外のリクエストは許可しない
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    // エラーハンドリング
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
