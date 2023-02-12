// Challenge / Exercise

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import HomePage from "./components/Home";
import Events from "./components/Events";
import EventDetail from "./components/EventDetail";
import NewEvent from "./components/NewEvent";
import EditEvent from "./components/EditEvent";
import EventsRootLayout from "./components/EventsRootLayout";
import { Event } from "./components/EventItem";

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
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <Events />,
            loader: async () => {
              const response = await fetch("http://localhost:8080/events");

              if (!response.ok) {
                // later
              } else {
                const resData = await response.json();

                if (isEvents(resData)) return resData.events;
                return {};
              }
            },
          },
          { path: ":eventId", element: <EventDetail /> },
          { path: "new", element: <NewEvent /> },
          { path: ":eventId/edit", element: <EditEvent /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// typeguard for events API
const isEvents = (object: unknown): object is { events: Event[] } => {
  if (object !== null && typeof object === "object") return "events" in object;
  return false;
};