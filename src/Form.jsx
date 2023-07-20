import FormLabel from './FormLabel'

export default function Form () {
  return (
    <form>
      <div>
        <FormLabel>First name</FormLabel>
        <span>John</span>
      </div>
      <div>
        <FormLabel>Last name</FormLabel>
        <span>Doe</span>
      </div>
      <div>
        <FormLabel>Address</FormLabel>
        <span>321 Palmas St, Almond, CA 12589</span>
      </div>
    </form>
  )
}
