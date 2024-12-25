import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const taskData: Prisma.TaskCreateInput[] = [
  {
    id: "4I4dk1065c",
    title:
      "Collect illustrations for socials and draw up technical specifications for the design team",
    color: "green",
    status: false,
    timestamps: new Date(),
  },
  {
    id: "iCNfD64eJP",
    title:
      "Borrow the GETTERS CMM strategy for your product so that no one knows about the source of the strategy",
    color: "blue",
    status: false,
    timestamps: new Date(),
  },
  {
    id: "MGIgAuWanB",
    title: "A test task that shows how many other tasks there can be, imagine!",
    color: "orange",
    status: false,
    timestamps: new Date(),
  },
  {
    id: "Tklfz3zmbd",
    title:
      "Review scripts and paths in the application. Revise old screenshots. Revise everything that only",
    color: "yellow",
    status: false,
    timestamps: new Date(),
  },
  {
    id: "ttRmwGdfG6",
    title:
      "Borrow the GETTERS CMM strategy for your product so that no one knows about the source of the strategy",
    color: "brown",
    status: false,
    timestamps: new Date(),
  },
  {
    id: "UFptKibqrE",
    title:
      "Write documentation and give it to the new developers and designers who will participate in the project",
    color: "purple",
    status: false,
    timestamps: new Date(),
  },
  {
    id: "UoU9SGHqhV",
    title: "Call the sales department and ask about the documents",
    color: "red",
    status: false,
    timestamps: new Date(),
  },
  {
    id: "WQRmsLVqdw",
    title:
      "Calculate statistics on the formula to calculate the employment rate as a percentage",
    color: "indigo",
    status: false,
    timestamps: new Date(),
  },
  {
    id: "qJzfsaELGP",
    title:
      "Prepare a product specification and get design team to sign off on it",
    color: "pink",
    status: false,
    timestamps: new Date(),
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const task of taskData) {
    const created = await prisma.task.create({
      data: task,
    });
    console.log(`Created task with id: ${created.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
