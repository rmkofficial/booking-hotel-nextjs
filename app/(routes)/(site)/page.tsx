import ImagesVawes from "@/components/ImagesVawes";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className=" bg-slate-600">
      <Button>Click me</Button>
      <ModeToggle />
      <ImagesVawes />
    </main>
  );
}
