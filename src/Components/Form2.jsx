import { useRef } from "react";

import Title from "./Fields/Title";
import Sub_Title from "./Fields/Sub_Title";
import Duration from "./Fields/Duration";
import Release_Date from "./Fields/Release_Date";
import Languages from "./Fields/Languages";
import Genre from "./Fields/Genre";
import Formats from "./Fields/Formats";
import Certificates from "./Fields/Certificates";
import Description from "./Fields/Description";

function converter(selectedFields) {
  return Object.keys(selectedFields).map((key) => selectedFields[key]);
}

function time_converter(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

export default function Form2() {
  const title = useRef();
  const subtitle = useRef();
  const duration = useRef();
  const releasedate = useRef();
  const genre = useRef({});
  const languages = useRef({});
  const formats = useRef({});
  const certificates = useRef();
  const description = useRef();

  async function handleSubmit() {
    const enteredTitle = title.current.value;
    const enteredSubtitle = subtitle.current.value;
    const enteredduration = duration.current.value;
    const enteredreleasedate = releasedate.current.value;

    const selectedGenres = Object.keys(genre.current)
      .filter((key) => genre.current[key]?.checked)
      .map((key) => genre.current[key].value);

    const selectedlanguages = Object.keys(languages.current)
      .filter((key) => languages.current[key]?.checked)
      .map((key) => languages.current[key].value);

    const selectedformats = Object.keys(formats.current)
      .filter((key) => formats.current[key]?.checked)
      .map((key) => formats.current[key].value);

    const selectedcertificate = document.querySelector(
      'input[name="certificates"]:checked'
    )?.value;

    const entereddescription = description.current.value;

    const formData = {
      title: enteredTitle,
      sub_title: enteredSubtitle,
      duration: time_converter(enteredduration),
      release_date: enteredreleasedate,
      genre: converter(selectedGenres),
      language: converter(selectedlanguages),
      formats: converter(selectedformats),
      certificate: selectedcertificate,
      poster: enteredTitle + ".jpg",
      banner: enteredTitle + ".jpg",
      about: entereddescription,
    };

    try {
      const response = await fetch("/movies/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Form submitted successfully");
      } else {
        alert("Failed to Submit");
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <form
      className="bg-gray-200 flex flex-col items-center justify-center h-auto rounded-xl"
      onSubmit={handleSubmit}
    >
      <h1 className="font-bold">Admin Form</h1>
      <div className="p-5 w-100">
        <Title ref={title} />
        <Sub_Title ref={subtitle} />
        <Duration ref={duration} />
        <Release_Date ref={releasedate} />
        <Genre ref={genre} />
        <Languages ref={languages} />
        <Formats ref={formats} />
        <Certificates ref={certificates} />
        <Description ref={description} />
      </div>
      <button type="submit" className="btn btn-wide btn-primary">
        Submit
      </button>
    </form>
  );
}
