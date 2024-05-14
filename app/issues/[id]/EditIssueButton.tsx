import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { PiNotePencilLight } from "react-icons/pi";

const EditIssueButton = ({issueId} : {issueId: number}) => {
  return (
    <Button>
      <PiNotePencilLight />
      <Link href={`/issue/${issueId}/edit`}>Edit Issue</Link>
    </Button>
  );
};

export default EditIssueButton;
 