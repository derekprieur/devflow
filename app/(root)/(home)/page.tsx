import { UserButton } from "@clerk/nextjs";

export default function Home() {
  console.log("Home");
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
