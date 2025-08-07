// components/GoogleCalendar.tsx
//import calendarBox from './calendarBox.css'
import React, { useRef, useEffect } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

//import '@fullcalendar/daygrid/main.css';

const GoogleCalendar = () => {
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!calendarRef.current) return;

    const calendar = new Calendar(calendarRef.current, {
      plugins: [dayGridPlugin, googleCalendarPlugin],
      initialView: 'dayGridMonth',
      height: 600,
      
      
      googleCalendarApiKey: import.meta.env.VITE_GOOGLE_API_KEY, // 🔑 ใส่ API key ที่นี่
      events: {
        googleCalendarId: import.meta.env.VITE_GOOGLE_CALENDAR_ID // 📅 ใส่ ID ของ calendar ที่แชร์
      },
    });

    calendar.render();

    return () => {
      calendar.destroy();
    };
  }, []);

  return <div ref={calendarRef} 
            className ="calendar-box"/>;
};

export default GoogleCalendar;
