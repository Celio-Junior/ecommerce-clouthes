import { HeadingCard } from "@/components/admin/HeadingCard";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { InputImage } from "@/components/Input/ImageUpload";

export default function BillboardPage() {
  return (
    <>
      <HeadingCard title={"Billboard"} description={"Add a new billboard "} />
      <form className="shadow-sm py-4 px-3 rounded-md">
        <InputImage label="Background image" />
        <Input className="mt-5" label="label" name="label" variant="default" />
        <Button type="submit" size="xl" variant="default">
          Create
        </Button>
      </form>
    </>
  );
}
