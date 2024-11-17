// app/api/posts/route.js
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const users = await prisma.user.findMany()
    const response = {data: users} 
    return new Response(JSON.stringify(response), { status: 200 })
  } catch {
    return new Response('Failed to fetch posts', { status: 500 })
  }
}
