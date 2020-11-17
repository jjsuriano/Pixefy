gsap.registerPlugin(ScrollTrigger);

const homeTextTimeline = gsap.timeline();

homeTextTimeline.set(["#home-1", "#home-2"], {
  y: 50,
  opacity: 0,
});

homeTextTimeline.to("#home-1", {
  duration: 1,
  y: 0,
  opacity: 1,
});

homeTextTimeline.to("#home-2", {
  duration: 1,
  y: 0,
  opacity: 1,
  delay: -0.5,
});
