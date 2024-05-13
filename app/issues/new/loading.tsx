import { Skeleton} from "@radix-ui/themes";
import React from "react";

const LoadingNewIssuePage = () => {
  return (
    <div className="max-w-xl">
      <div className="space-y-3">
        <Skeleton height={'2rem'}>
          
        </Skeleton>
        <Skeleton height={'30rem'}></Skeleton>
      </div>
    </div>
  );
};

export default LoadingNewIssuePage;
