import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'

// POST /api/user
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = await prisma.user.create({
      data: req.body,
    })
    res.status(200).json(result)
  } catch (error) {
    console.error(error)
    res.status(400).json({success: false})
  }
}
