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

export async function POST(req) {
  try {
    const body = await req.json();
    const newUser = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
      },
    });
    return new Response(JSON.stringify({ data: newUser }), { status: 201 });
  } catch {
    return new Response('Failed to create user', { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const body = await req.json();
    const updatedUser = await prisma.user.update({
      where: { id: body.id },
      data: {
        name: body.name,
        email: body.email,
      },
    });
    return new Response(JSON.stringify({ data: updatedUser }), { status: 200 });
  } catch {
    return new Response('Failed to update user', { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const body = await req.json();
    await prisma.user.delete({
      where: { id: body.id },
    });
    return new Response('User deleted successfully', { status: 200 });
  } catch {
    return new Response('Failed to delete user', { status: 500 });
  }
}
