import prisma from 'lib/prisma'

export default async function handle(req, res) {
  const { email, password } = req.body

  // INSERT CODE TO AUTHORIZE USING YUBIKEY HERE
  // THIS IS A NODE.JS ENVIRONMENT
  // NO NEED TO SETUP SERVERS OR ANYTHING ELSE
  // JUST RUN ANY NODE.JS CODE HERE

  // THIS CODE GETS THE USER FROM THE DATABASE
  const user = await prisma.user.findUnique({
    where: { email: String(email) },
  })

  // AFTER YOU HAVE CONFIRMED THAT THE KEY AUTH
  // PASSED, SEND IT BACK LIKE THIS
  if (user) {
    res.status(200).json(user)
    return
  }

  res.status(400).json({})
}
