import { useNavigate } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import WineAPI from "../api/WineAPI"

export const AddWinePage = (props) => {
  const navigate = useNavigate()
  const handleFormSubmit = async (event) => {
    event.preventDefault()
    const wineData = {
      name: event.target.elements[0].value,
      price: event.target.elements[1].value,
      varietal: event.target.elements[2].value,
      description: event.target.elements[3].value
    }
    const data = await WineAPI.addWine(wineData)
    if (data) {
      navigate(`/wines/${data.id}`)
    }
  }




  return (
    <div>
      <h2>Add Wine Page</h2>
      <hr />
      <Form onSubmit={handleFormSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="name" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control placeholder="price" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Varietal</Form.Label>
          <Form.Control placeholder="varietal" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="description" />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Add Wine
        </Button>  
      </Form>  
    </div>
  )
}

export default AddWinePage