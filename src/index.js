const MyPlugin = ({ onClick }) => <button onClick={onClick}>Fetch</button>

export default (api) => {
  const fetchTransactions = async () => {
    const response = await api.http().get('https://dexplorer.ark.io/api/transactions')
    api.store().data().set('transactions', response.body())
  }

  api.events().on('deactivated', () => api.store().persist())
  api.launch().render(<MyPlugin onClick={fetch} />)
}
