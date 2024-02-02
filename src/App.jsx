import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Root } from './routes/root';
import { FilmDetail} from './routes/film-detail';
import { ROUTES } from './utils/constants/router';

const router = createBrowserRouter([
  {
    path:  ROUTES.ROOT,
    element: <Root />
  },
  {
    path:  ROUTES.FILMDETAIL,
    element: <FilmDetail />
  }
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);