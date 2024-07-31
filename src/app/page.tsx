import { Form } from "@/components/form";
import { Images } from "@/components/images";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form />
      <Images />
    </main>
  );
}
