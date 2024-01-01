import SidebarOne from "@/components/SidebarOne";

export const metadata = {
  title: "SIDEBAR ONE",
};

export default function SidebarOneRoot({ children }) {
  return (
    <main className="w-full flex">
      <SidebarOne />
      {children}
    </main>
  );
}
