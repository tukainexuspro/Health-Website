window.addEventListener('load', () => {
  const params = new URL(document.location).searchParams
  const name = params.get('name')

  document.getElementById('name').innerHTML = name
})
