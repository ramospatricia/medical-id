import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const genderData: Prisma.GenderCreateInput[] = [
  { gender: 'Male' },
  { gender: 'Female' },
  { gender: 'Other' },
]

const InsuranceData: Prisma.InsuranceCreateInput[] = [
  { insuranceName: 'United Health' },
  { insuranceName: 'Anthem Inc' },
  { insuranceName: 'Aetna' },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const gender of genderData) {
    const user = await prisma.gender.create({
      data: gender,
    })
    console.log(`Created gender with id: ${user.id}`)
  }
  for (const insurance of InsuranceData) {
    const user = await prisma.insurance.create({
      data: insurance,
    })
    console.log(`Created insurance with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
