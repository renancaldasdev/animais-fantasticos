export default function outSideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      html.addEventListener(userEvent, handleOutsiteClick);
    });
    element.setAttribute(outside, "");
  }

  function handleOutsiteClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);

      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsiteClick);
      });

      callback();
    }
  }
}
