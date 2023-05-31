export const stripAcastBlurb = (htmlString: string, browser: boolean, times: number = 1) => {
  if (!browser) return htmlString;
  // create a new dov container
  const div = document.createElement('div');

  // assing your HTML to div's innerHTML
  div.innerHTML = htmlString;
  [...Array(times)].map(_ => {
    const element = div.lastChild;
    if (!element) return;
    div.removeChild(element);
  })

  return div.innerHTML;
};