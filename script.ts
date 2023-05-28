import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()
const prisma = new PrismaClient({ log: ["query"] })

async function main() {
    // const user = await prisma.user.create({ data: { name: 'abhishek kumar' } })
    // const user = await prisma.user.findMany()
    // const user = await prisma.user.deleteMany()
    // await prisma.user.deleteMany()
    // const user = await prisma.user.create({
    //     data: {
    //         name: "abhishek",
    //         email: "abhishek@gmail.com",
    //         age: 30,
    //         userPrefence: {
    //             create: {
    //                 emailUpdates: true
    //             }
    //         }
    //     },
    //     // include: {
    //     //     userPrefence: true
    //     // } 

    //     select: {
    //         name: true,
    //         // userPrefence:true
    //         userPrefence: { select: { id: true } }
    //     }
    // })
    // console.log(user)





    /**----------- */
    // await prisma.user.deleteMany()
    // const user = await prisma.user.createMany({
    //     data: [
    //         {
    //             name: "abhishek",
    //             email: "abhishek@gmail.com",
    //             age: 30,
    //         },
    //         {
    //             name: "abhishek kumar",
    //             email: "abhi@gmail.com",
    //             age: 30,
    //         },
    //     ]
    // })
    /**----------- */

    const user = await prisma.user.findUnique({
        where: {
            email: "abhishek@gmail.com",
            age_name: {
                age: 30,
                name:'abhishek'
            }
            // name: {
            //     not: 'abhishek'
            // }
        }
    })
    console.log(user)

}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })