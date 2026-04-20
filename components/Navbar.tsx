import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
const Navbar = () => {
  return (
    <nav>
      <Tabs defaultValue="home">
        <TabsList className="gap-4" variant="line">
          <TabsTrigger
            className="cursor-pointer text-xs capitalize"
            value="home"
          >
            home
          </TabsTrigger>
          <TabsTrigger
            className="cursor-pointer text-xs capitalize"
            value="browse"
          >
            browse
          </TabsTrigger>
          <TabsTrigger
            className="cursor-pointer text-xs capitalize"
            value="faq"
          >
            faq
          </TabsTrigger>
        </TabsList>
        <TabsContent value="home"></TabsContent>
        <TabsContent value="browse"></TabsContent>
        <TabsContent value="faq"></TabsContent>
      </Tabs>
    </nav>
  );
};

export default Navbar;
