import prisma from "@/prisma/client";
import IssuesToolbar from "./IssuesToolbar";
import { Status } from "@prisma/client";
import Pagination from "../components/Pagination";
import IssueTable, { IssueQuery, columnNames } from "./IssueTable";
import { Flex } from "@radix-ui/themes";
import { Metadata } from "next";
import { Suspense } from "react";

interface Props {
  searchParams: IssueQuery;
}

const IssuesPage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const where = { status };

  const orderBy = columnNames.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;

  const issues = await prisma.issue.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const issueCount = await prisma.issue.count({ where });
  return (
    <Flex direction="column" gap="3">
      <IssuesToolbar />
      <IssueTable searchParams={searchParams} issues={issues} />
      <Suspense>
        <Pagination
          pageSize={pageSize}
          currentPage={page}
          itemCount={issueCount}
        />
      </Suspense>
    </Flex>
  );
};

export const metadata: Metadata = {
  title: "Task Trackify - Issue List",
  description: "View all project issues.",
};

export default IssuesPage;
