import React, { useState, useMemo } from "react";
import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { startOfDay, endOfDay } from "date-fns";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import CalendarModal from "./Calendarmodal";
const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Repair",
    start: new Date(2023, 6, 0),
    end: new Date(2023, 6, 0),
    color: "red", // Assign color based on the event category
    category: "priority", // Add a category property to determine the color
  },
  {
    title: "Vacation",
    start: new Date(2023, 6, 7),
    end: new Date(2023, 6, 10),
    color: "green", // Assign color based on the event category
    category: "standard", // Add a category property to determine the color
  },
  {
    title: "Conference",
    start: new Date(2023, 5, 20),
    end: new Date(2023, 6, 23),
    color: "blue", // Assign color based on the event category
    category: "meeting", // Add a category property to determine the color
  },
];

function CalendarProp() {
  const [newEvent, setNewEvent] = useState({ title: "", start: null, end: null });
  const [allEvents, setAllEvents] = useState(events);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleEventClick(clickedEvent) {
    setSelectedEvent(clickedEvent);
    setShowModal(true);
  }

  function handleModalClose() {
    setShowModal(false);
    setSelectedEvent(null);
  }

  function handleModalDelete() {
    if (selectedEvent) {
      setAllEvents((prevEvents) =>
        prevEvents.filter((event) => event !== selectedEvent)
      );
      setSelectedEvent(null);
      setShowModal(false);
    }
  }

  function handleAddEvent() {
    const adjustedEnd = endOfDay(newEvent.end);

    const hasClashes = allEvents.some((event) => {
      const d1 = new Date(event.start);
      const d2 = new Date(newEvent.start);
      const d3 = new Date(event.end);
      const d4 = new Date(newEvent.end);

      return (d1 <= d2 && d2 <= d3) || (d1 <= d4 && d4 <= d3);
    });

    if (hasClashes) {
      alert("Error: Conflicting dates");
      return;
    }

    const adjustedStart = startOfDay(newEvent.start);
    setAllEvents([...allEvents, { ...newEvent, start: adjustedStart, end: adjustedEnd }]);
    setShowModal(false);
    setNewEvent({ title: "", start: null, end: null });
  }

  const { views } = useMemo(
    () => ({
      // defaultDate: new Date({defaultDate}),
      views: [Views.MONTH, Views.AGENDA],
    }),
    []
  );

  return (
    <div className="">
      <div>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <div className="alert alert-info shadow-lg mt-2.5 mb-2.5">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="stroke-current flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>Create an Event.</span>
              </div>
            </div>
            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-error absolute right-1 top-1 ml-2.5" onClick={handleModalClose}>
              ✕
            </label>
            <input
                type="text"
                placeholder="Name of Agenda"
                className="input input-bordered w-full max-w-xs"
                value={selectedEvent ? selectedEvent.title : ""}
                onChange={(e) =>
                  setSelectedEvent({
                    ...selectedEvent,
                    title: e.target.value
                  })
                }
              />

              <DatePicker
                placeholderText="Start of Event"
                className="mb-2.5 mt-2.5 rounded"
                selected={selectedEvent ? selectedEvent.start : null}
                onChange={(start) =>
                  setSelectedEvent({
                    ...selectedEvent,
                    start
                  })
                }
              />

              <DatePicker
                placeholderText="End of Event"
                className="mb-2.5"
                selected={selectedEvent ? selectedEvent.end : null}
                onChange={(end) =>
                  setSelectedEvent({
                    ...selectedEvent,
                    end
                  })
                }
              />

            <div className="form-control">
              <div className="input-group">
                <select className="select select-bordered">
                  <option disabled selected>
                    Pick category
                  </option>
                  <option className="btn btn-error">Priority</option>
                  <option className="btn btn-success">Standard</option>
                  <option className="btn btn-info">Meeting</option>
                </select>
              </div>
            </div>

            <button className="btn btn-success mt-2.5" onClick={handleAddEvent}>
              Submit
            </button>
            <button className="btn btn-error mt-2.5 ml-2.5" onClick={handleModalDelete}>
              remove
            </button>
          </div>
        </div>
      </div>

      <div style={{ background: "grey", padding: "20px" }}>
      <Calendar
      localizer={localizer}
      events={allEvents}
      startAccessor="start"
      endAccessor="end"
      onSelectEvent={handleEventClick}
      views={views}
      style={{ height: 600 }}
      eventPropGetter={(event) => ({
        style: {
          backgroundColor: event.color, // Assign background color based on event category
        },
      })}
/>
        {showModal && selectedEvent && (
          <CalendarModal
            event={selectedEvent}
            onClose={handleModalClose}
            onDelete={handleModalDelete}
          />
        )}
      </div>
    </div>
  );
}

export default CalendarProp;
