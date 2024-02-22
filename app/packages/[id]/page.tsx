import { getPlatformByName } from "@/app/api/packages";
import React from "react";

const Platform = async ({ params }: { params: { name: string } }) => {
  const name = params.name;
  // const platform = await getPlatformByName(name);
  // console.log(platform);
  return <div>Platform</div>;
};

export default Platform;
