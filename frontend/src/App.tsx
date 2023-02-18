// Challenge / Exercise

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/Home";
import Events, { loader as EventsLoader } from "./pages/Events";
import {
  loader as EventDetailLoader,
  action as EventDeleteAction,
} from "./pages/EventDetail";
import EventDetail from "./pages/EventDetail";
import { action as FormAction } from "./components/EventForm";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import EventsRootLayout from "./pages/EventsRootLayout";
import Error from "./pages/Error";
import NewsletterPage from "./pages/NewsLetter";
import { action as newsletteraction } from "./pages/NewsLetter";

// // 1. Add five new (dummy) page components (content can be simple <h1> elements)
// //    - HomePage
////    - EventsPage
////    - EventDetailPage
////    - NewEventPage
////    - EditEventPage
//// 2. Add routing & route definitions for these five pages
////    - / => HomePage
////    - /events => EventsPage
////    - /events/<some-id> => EventDetailPage
////    - /events/new => NewEventPage
////    - /events/<some-id>/edit => EditEventPage
//// 3. Add a root layout that adds the <MainNavigation> component above all page components
//// 4. Add properly working links to the MainNavigation
//// 5. Ensure that the links in MainNavigation receive an "active" class when active
//// 6. Output a list of dummy events to the EventsPage
////    Every list item should include a link to the respective EventDetailPage
//// 7. Output the ID of the selected event on the EventDetailPage
//// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <Events />,
            loader: EventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: EventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetail />,
                action: EventDeleteAction,
              },
              { path: "edit", element: <EditEvent />, action: FormAction },
            ],
          },
          { path: "new", element: <NewEvent />, action: FormAction },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletteraction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;