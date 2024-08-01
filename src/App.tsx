import { HouseList } from "@/components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="min-h-[100dvh] m-auto max-w-[1200px] p-4">
        <h1 className="text-4xl mb-8">Ice & fire</h1>
        <HouseList />
      </main>
    </QueryClientProvider>
  );
}

export default App;
