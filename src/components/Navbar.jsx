import { Button } from "./ui/button";


const Navbar = () => {
  return (
    <div className="flex justify-beetween w-full flex-wrap">
      <h1 className="text-center text-sky-700 font-bold text-4xl">firesnake</h1>
      <div className="flex flex-row justify-between gap-8 text-slate-300 flex-wrap">
        <div className="">
        <Button>Balance 0,02ETH</Button>
        </div>
        <div className="">
        <Button>Stake R$200</Button>
        </div>
        <div className="">
          <Button>Transações</Button>
        </div>
        <div className="">
          <Button>Doar</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar
