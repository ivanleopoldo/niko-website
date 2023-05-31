import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { startOfDay } from "date-fns";

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
    //color: "blue", // Add color property to the event
  },
  {
    title: "Vacation",
    start: new Date(2023, 6, 7),
    end: new Date(2023, 6, 10),
    //color: "green", // Add color property to the event
  },
  {
    title: "Conference",
    start: new Date(2023, 5, 20),
    end: new Date(2023, 6, 23),
    //color: "red", // Add color property to the event
  },
];

function CalendarProp() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    // Check for event clashes...
    for (let i=0; i<allEvents.length; i++){

      const d1 = new Date (allEvents[i].start);
      const d2 = new Date(newEvent.start);
      const d3 = new Date(allEvents[i].end);
      const d4 = new Date(newEvent.end);

       if (
        ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
          (d4 <= d3) )
        )
      {   
         alert("Conflicting Dates please try again")
          return;
       }
      }
      const adjustedStart = startOfDay(newEvent.start);
      const adjustedEnd = startOfDay(newEvent.end);
  
      setAllEvents([...allEvents, { ...newEvent, start: adjustedStart, end: adjustedEnd }]);

    setAllEvents([...allEvents, newEvent]);
  }

  function removeEvent(eventToRemove) {
    setAllEvents((prevEvents) =>
      prevEvents.filter((event) => event !== eventToRemove)
    );
  }

  // Custom event style function
  function eventStyleGetter(eventData) {
    const style = {
      backgroundColor: eventData.color, // Set the background color based on the event's color property
      borderRadius: "5px",
      opacity: 0.8,
      color: "white",
      border: "none",
      display: "block",
    };
    return {
      style,
    };
  }

  return (
    <div className="">
     <div>
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box relative">
            <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <input
                  required
                  type="text"
                  placeholder="Name of Event"
                  className="input input-bordered w-full max-w-xs"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                />

                <DatePicker
                  placeholderText="Start of Event"
                  className="mb-2.5 mt-2.5"
                  selected={newEvent.start}
                  onChange={(start) => setNewEvent({ ...newEvent, start })}
                />

                <DatePicker
                  placeholderText="End of Event"
                  selected={newEvent.end}
                  onChange={(end) => setNewEvent({ ...newEvent, end })}
                />

            <button className="btn btn-success mt-2.5" onClick={handleAddEvent}>Submit</button>
          </div>
      </div>
      </div>
      <div style={{ background: "grey", padding: "20px" }}> {/* Add style with background color */}
          <Calendar
            localizer={localizer}
            events={allEvents}
            startAccessor="start"
            endAccessor="end"
            eventPropGetter={eventStyleGetter}
            style={{ height: 600 }}
          />
           <div className="card-actions justify-end pl-2.5 pb-2.5">
            <button className="btn btn-error"onClick={(removeEvent)}>
                Remove
              </button>
            <label for="my-modal-3" class="btn btn-success">Create an Event</label>
              </div>
           </div>   
      </div>
    );
  }

export default CalendarProp;