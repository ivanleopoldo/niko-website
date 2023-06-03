import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar/lib";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { startOfDay, endOfDay } from "date-fns";
import { TimePicker } from "antd";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import Calendarmodal from "./Calendarmodal";

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
    title: "Amongus",
    allDay: true,
    start: new Date(2023, 6, 0),
    end: new Date(2023, 6, 0),
  },
  {
    title: "Vacation",
    start: new Date(2023, 6, 7),
    end: new Date(2023, 6, 10),
  },
  {
    title: "Conference",
    start: new Date(2023, 5, 20),
    end: new Date(2023, 6, 23),
  },
];

function CalendarProp() {
  const [newEvent, setNewEvent] = useState({ title: "", start: null, end: null });
  const [allEvents, setAllEvents] = useState(events);

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
  }

  function removeEvent(eventToRemove) {
    setAllEvents((prevEvents) =>
      prevEvents.filter((event) => event !== eventToRemove)
    );
  }
//   const [showModal, setShowModal] = useState(false);
//   const [selectedEvent, setSelectedEvent] = useState(null);
  
//   function handleEventClick(clickedEvent) {
//   // setSelectedEvent(clickedEvent);
//   // setShowModal(true);
// }

//   function handleModalClose() {
//     setShowModal(false);
//   }

//   function handleModalDelete() {
//     if (selectedEvent) {
//       removeEvent(selectedEvent);
//       setShowModal(false);
//       setSelectedEvent(null);
//     }
//   }
//   function handleModalEdit() {
//     // Handle edit action (e.g., update the event in the state or perform any other action)
//     console.log("Edit event:", selectedEvent);
//     setShowModal(false);
//     setSelectedEvent(null);
//   }


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
                <span>New software update available.</span>
              </div>
            </div>
            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-error absolute right-1 top-1 ml-2.5">
              ✕
            </label>
            <input
              type="text"
              placeholder="Name of Agenda"
              className="input input-bordered w-full max-w-xs"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            />

            <DatePicker
              placeholderText="Start of Event"
              className="mb-2.5 mt-2.5 rounded"
              selected={newEvent.start}
              onChange={(start) => setNewEvent({ ...newEvent, start })}
            />

            <DatePicker
              placeholderText="End of Event"
              className="mb-2.5"
              selected={newEvent.end}
              onChange={(end) => setNewEvent({ ...newEvent, end })}
            />
            <customtime/>
            <TimePicker placeholder="End time" />

            <div className="form-control">
              <div className="input-group">
                <select className="select select-bordered">
                  <option disabled selected>
                    Pick category
                  </option>
                  <option className="btn-error">Priority</option>
                  <option>Standard</option>
                  <option>Meeting</option>
                </select>
              </div>
            </div>

            <button className="btn btn-success mt-2.5" onClick={handleAddEvent}>
              Submit
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
          // onSelectEvent={handleEventClick}
          style={{ height: 600 }}
        />
        <div className="card-actions justify-end pl-2.5 pb-2.5 mt-2.5  ">
          <button className="btn btn-error" onClick={() => removeEvent()}>
            Remove
          </button>
          <label htmlFor="my-modal-3" className="btn btn-success">
            Create an Event
          </label>

        </div>
        
        {/* <Calendarmodal
          event={selectedEvent}
          showModal={showModal}
          onClose={handleModalClose}
          onDelete={handleModalDelete}
          onEdit={handleModalEdit}
        /> */}
      </div>
    </div>
  );
}

export default CalendarProp;
