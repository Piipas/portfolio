import Input from "@/components/atoms/input";
import Title from "@/components/atoms/title";
import React from "react";

function page() {
  return (
    <div className="col-span-9">
      <div className="text-center">
        <Title>Want to work with me?</Title>
        <div className="grid grid-cols-2 gap-8">
          <div className="col-span-1">
            <Input
              type="text"
              placeholder="Name"
              required
              requiredMessage="Name is required field"
            />
          </div>
          <div className="col-span-1">
            <Input
              type="text"
              placeholder="Email"
              required
              requiredMessage="Email is required field"
            />
          </div>
          <div className="col-span-2">
            <Input type="text" placeholder="What I need to know?" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
