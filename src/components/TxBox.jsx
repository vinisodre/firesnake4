import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function TxBox() {
  return (
    <div className="border ring-border p-8 top-1/2 left-1/2">
      <div className="flex gap-1 justify-end mb-8">
        <Button className="w-20 bg-slate-500">pagar</Button>
        <Button className="w-20 bg-gray-500">receber</Button>
      </div>
      <Input className="mb-4" placeholder="quem vai receber" />
      <Input className="mb-4" placeholder="quanto vai receber" />
      <Button className="w-full bg-slate-500">enviar</Button>
    </div>
  );
}

export default TxBox;
