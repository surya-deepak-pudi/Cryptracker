const redirect = (href) => {
  window.history.pushState({}, "", href)
  const navEvent = new PopStateEvent("popstate")
  window.dispatchEvent(navEvent)
}

export default redirect
