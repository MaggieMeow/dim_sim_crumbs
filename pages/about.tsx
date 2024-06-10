import { useEffect } from "react";
import { driver } from "driver.js";
function onboard() {
  const driverObj = driver({
    popoverClass: "driverjs-theme",
    overlayColor: "rgb(255 255 255 / 43%)",
    showProgress: true,
    steps: [
      {
        element: "#site-title",
        popover: {
          side: "top",
          title: "About page",
          description: "Information about the project and acknowledgements",
        },
      },
    ],
  });
  driverObj.drive();
  localStorage.setItem("about-onboarding", "true");
}
export default function About() {
  useEffect(() => {
    const listener = (ev: any) => {
      if (ev.data === "show-help") {
        onboard();
      }
    };
    window.addEventListener("message", listener);

    if (localStorage.getItem("about-onboarding")) {
      return;
    }
    return () => {
      window.removeEventListener("message", listener);
    };
  }, []);
  return (
    <div>
      <h1 className="mx-auto w-fit text-4xl">About</h1>
      <main>
        <div className="my-4 mx-auto max-w-prose">
          <p className="py-2">
            The Dim Sim Crumbs project was developed by Maggie Yundi Li as part
            of the HUMN 3001: Digital Humanities and Public Culture course at
            Australian National University in Semester 1, 2024.
          </p>
        </div>
        <h2 className="mx-auto w-fit text-2xl">Acknowledgements </h2>
        <div className="my-4 mx-auto max-w-prose">
          <p className="py-2">
            We acknowledge the Traditional Custodians and Owners of Country
            throughout Australia and their connection to land, sea and
            community. This project was developed on the lands of the Ngunnawal
            and Ngambri peoples who are the Traditional Custodians of the ACT
            region. We respectfully acknowledge the wisdom, guidance and
            openness of all Aboriginal and Torres Strait Islander Peoples who
            have contributed to our work and we pay our respects to Elders past
            and present. We acknowledge that sovereignty has never been ceded
            and that Australia always was, and always will be, Aboriginal land.
          </p>
          <p className="py-2">
            This project is dedicated to the deep cultural heritage and
            contributions of Chinese communities in shaping modern Australia.
          </p>
          <p className="py-2">
            I would like to extend my heartfelt gratitude my lecturer, Charlotte
            Bradley, for her patient guidance and kind support throughout the
            project. Her field knowledge and insightful instructions were
            critical to the success of this project.
          </p>
        </div>
      </main>
    </div>
  );
}
