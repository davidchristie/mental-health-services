it('renders without crashing', () => {
  const root = document.createElement('div')
  root.id = 'root'
  document.body.appendChild(root)
  require('.')
})
