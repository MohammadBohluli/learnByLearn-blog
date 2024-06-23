import { User } from "@/features/user/type";

export const users: User[] = [
  {
    id: 1,
    firstName: "ftest5",
    lastName: "ltest5",
    email: "test5@gmail.com",
    createdAt: new Date(),
  },
  {
    id: 2,
    firstName: "ftest3",
    lastName: "ltest3",
    email: "test3@gmail.com",
    createdAt: new Date(Date.UTC(2019, 10, 10, 3, 0, 0)),
  },
  {
    id: 3,
    firstName: "ftest2",
    lastName: "ltest2",
    email: "test2@gmail.com",
    createdAt: new Date(Date.UTC(2012, 10, 20, 3, 0, 0)),
  },
  {
    id: 4,
    firstName: "ftest4",
    lastName: "ltest4",
    email: "test4@gmail.com",
    createdAt: new Date(Date.UTC(2012, 11, 20, 3, 0, 0)),
  },
  {
    id: 5,
    firstName: "ftest1",
    lastName: "ltest1",
    email: "test1@gmail.com",
    createdAt: new Date(),
  },
];
