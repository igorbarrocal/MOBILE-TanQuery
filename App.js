import App from "./src/App";
import { QueryClientProvider } from "@tanstack/react-query";

export default function Main(){
  return(
    <QueryClientProvider>
      <App/>
    </QueryClientProvider>
  );
}
