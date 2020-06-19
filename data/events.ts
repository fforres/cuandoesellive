import { DateTime } from "luxon";

// starting_time tiene que ser la hora PST
const events = [
  {
    name: '"Historias De Terror": Entrevistas de código',
    starting_date: "18-06-2020",
    starting_time: "16:30",
  },
  {
    name: '"Historias De Terror": Crecimiento personal',
    starting_date: "19-06-2020",
    starting_time: "16:30",
  },
  {
    name: '"Historias De Terror": Salud mental',
    starting_date: "20-06-2020",
    starting_time: "16:30",
  },
];

export const TitleTipes = {
  ITS_LIVE: "ITS_LIVE",
  NEXT_LIVE: "NEXT_LIVE",
  NOTHING_SCHEDULED: "NOTHING_SCHEDULED",
} as const;

export const getParsedEvents = () => {
  const currentDate = DateTime.fromJSDate(new Date());
  return events.map((event) => {
    const isoDate = DateTime.fromFormat(
      `${event.starting_date} ${event.starting_time}`,
      "dd-MM-yyyy HH:mm",
      {
        zone: "UTC+7",
      }
    );
    console.log(currentDate.ordinal, isoDate.ordinal);
    console.log(currentDate.ordinal - isoDate.ordinal);
    return {
      name: event.name,
      titleType: "",
      parsedDate: isoDate,
      time: currentDate,
    };
  });
};
