import { FormSettings } from "@/components/admin/form/FormSettings";
import { HeadingCard } from "@/components/admin/HeadingCard";

export default function SettingsPage() {
  return (
    <>
      <HeadingCard title="Settings" description="Manage store preferences" />
      <FormSettings />
    </>
  );
}
