"use client";

import { trpc } from "@interlinked/api/trpc/client";
import { Button } from "@interlinked/shadcn";

export function ComputerData() {
  const { data, isLoading } = trpc.computers.getComputers.useQuery();
  const createComputer = trpc.computers.createComputer.useMutation();
  if (isLoading) {
    return <div>Loading the computers...</div>;
  }
  return (
    <div className="flex flex-col place-items-center justify-center">
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
      <Button
        className="w-48"
        onClick={async () => {
          await createComputer.mutate({
            insertComputerParams: { brand: "intel", cores: 3 },
          });
          location.reload();
        }}
      >
        Create Computer
      </Button>
    </div>
  );
}
