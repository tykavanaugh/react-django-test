import { Table } from "react-bootstrap"
import { Link } from "react-router-dom"

function WineList(props) {
  // render
  const renderWines = () => {
    if (!props.wines)
      return null

    return props.wines.map((wine, index) => {
      return (
        <tr key={index}>
          <td><Link to={`${wine.id}/`}>{ wine.name }</Link></td>
          <td>{ wine.price }</td>
          <td>{ wine.varietal }</td>
        </tr>
      )
    })
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Wine</th>
            <th>Price</th>
            <th>Varietal</th>
          </tr>
        </thead>
        <tbody>
          { renderWines() }
        </tbody>
      </Table>
    </div>
  )
}

export default WineList
