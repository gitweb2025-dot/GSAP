jQuery(document).ready(function ($) {
  // Your code in here
  const cursorDot = $(".cursor-dot");
  const cursor = $(".cursor");
  const link = $("a");

  $(document).on("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    cursorDot.css("transform", `translate(${x}px, ${y}px)`);
  });

  link.on("mouseenter", () => {
    cursor.addClass("hovered");
  });

  link.on("mouseleave", () => {
    cursor.removeClass("hovered");
  });
});
