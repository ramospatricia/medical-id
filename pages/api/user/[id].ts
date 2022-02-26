import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'


export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const userId = req.query.id
  const body = req.query.body

  switch (req.method) {
    case 'GET':
      handleGET(userId, res)
      break;
    case 'PUT':
      handlePUT(userId, body, res)
      break;
    case 'DELETE':
      handleDELETE(userId, res)
      break;

    default:
      throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`
      )
  }
}

// GET /api/user/:id
async function handleGET(userId, res) {
  const user = await prisma.user.findUnique({
    where: { id: Number(userId) },
  })
  res.json(user)
}

// PUT /api/user/:id
async function handlePUT(userId, body, res) {
  const user = await prisma.user.update({
    where: { id: Number(userId) },
    data: body
  })
  res.json(user)
}

// DELETE /api/user/:id
async function handleDELETE(userId, res) {
  const user = await prisma.user.delete({
    where: { id: Number(userId) },
  })
  res.json(user)
}


