import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <h1>Ice & fire</h1>
      </main>
    </QueryClientProvider>
  );
}

export default App;
