"use client";

import { Issue, User } from "@prisma/client";
import { Button, Select, Skeleton } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

const AssigneeSelect = ({ issue } : {issue : Issue}) => {
  const {data:users, error, isLoading} = useQuery({
    queryKey: ['users'],
    queryFn: () => axios.get<User[]>("/api/users").then(res => res.data),
    staleTime: 60 * 1000, //60 secs
    retry: 3

  })

  if(isLoading) return <Skeleton height='2rem' />;

  if(error) return null;

  return (
    <Select.Root 
    defaultValue={issue.assignedToUserId || ' '}
    onValueChange={(userId) => {
      axios.patch('/api/issues/'+issue.id, { assignedToUserId: userId !== ' '? userId : null});
    }}>
      <Select.Trigger placeholder="Assign..." />
      <Select.Content>  
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          <Select.Item value={' '} >Unassigned</Select.Item>
          {users?.map((user) => (
            <Select.Item key={user.id} value={user.id}>
              {" "}
              {user.name}{" "}
            </Select.Item>
           ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AssigneeSelect;
