import SidebarTwo from "@/components/SidebarTwo";

export const metadata = {
  title: "SIDEBAR TWO",
};

export default function SidebarTwoRoot({ children }) {
  return <main className="w-full flex">
    <SidebarTwo/>
    {children}
  </main>;
}
