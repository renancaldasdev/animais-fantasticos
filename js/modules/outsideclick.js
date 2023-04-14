export default function outSideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  function handleOutsiteClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);

      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsiteClick);
      });

      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsiteClick);
      }, 0);
    });
    element.setAttribute(outside, "");
  }
}
