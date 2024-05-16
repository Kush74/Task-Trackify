import { Button, Skeleton } from "@radix-ui/themes"

const IssueFormSkeleton = () => {
  return (
    <div className="max-w-xl space-y-10">
      <div className="space-y-3">
        <Skeleton height={'2rem'} />
        <Skeleton height={'23rem'}/>
      </div>
      <Skeleton><Button >Lorem, ipsum.</Button></Skeleton>
    </div>
  )
}

export default IssueFormSkeleton