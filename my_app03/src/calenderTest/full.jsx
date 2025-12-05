import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

// import "@fullcalendar/core/index.css";
// import "@fullcalendar/daygrid/index.css";

import "./MyFullCalendar.css";   // ← 이거 추가

function MyFullCalendar() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
    />
  );
}

export default MyFullCalendar;
