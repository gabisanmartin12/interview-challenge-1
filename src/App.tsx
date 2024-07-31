import { HouseList } from "@/components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <h1>Ice & fire</h1>
        <HouseList />
      </main>
    </QueryClientProvider>
  );
}

export default App;
