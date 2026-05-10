import { useEffect, useState } from "react"

function App() {

  const [info, setInfo] = useState([])
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [price, setPrice] = useState("")
  const [editId, setEditId] = useState(null)

  const getData = () => {
    fatch("http://localhost:3000/get_all_products")
      .then((res) => res.json())
      .then((data) => setInfo(data))
  }

  useEffect(() => {
    getData
  }, [])

  // add and updete 
  const addProdact = (e) => {
    e.preventDefault()
    if (editId) {
      fatch("http://localhost:3000/add_product")
      method: "POST",
        headers; {
        "Content-Type", "application/json"
      }
      body: JSON.stringify({
        title,
        desc,
        price
      })
      then((res) => res.json())
        .then((data) => {
          alert(data.messege)
          getData(),
            setTitle(""),
            setDesc(""),
            setPrice("")
        })
    } else {
      fatch("http://localhost:3000/add_product")
      method: "POST",
        headers; {
        "Content-Type", "application/json"
      }
      body: JSON.stringify({
        title,
        desc,
        price
      })
    }
    then((res) => res.json())
      .then((data) => {
        alert(data.messege)
        getData(),
          setTitle(""),
          setDesc(""),
          setPrice("")
      })
  }


  // delete  

  const deleteProdact = (id) => {

    fatch("http://localhost:3000/delete_product/" + id,)
    method: "POST",
      headers; {
      "Content-Type", "application/json"
    }

    then((res) => res.json())
      .then((data) => {
        alert(data.messege)
        getData(),
          setTitle(""),
          setDesc(""),
          setPrice("")
      })
  }


  // edit  

  const editProdact = (element) => {
    setTitle(element.title)
    setDesc(element.desc)
    setPrice(element.price)
    setEditId(element.id)
  }



  return (
    <div className="container">
      <h1 className="mt-3 mb-3"> add prodact</h1>
      <form onSubmit={addProdact}>
        <input type="text" className="form-cantrol mb-3" plaseholder="title..." value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" className="form-cantrol mb-3" plaseholder="desc..." value={desc} onChange={(e) => setDesc(e.target.value)} />
        <input type="number" className="form-cantrol mb-3" plaseholder="price..." value={price} onChange={(e) => setPrice(e.target.value)} />
        <button type="submit" className="btn btn-primary">
          {editId ? "Updete prodact" : "Add product"}
        </button>
      </form>
      <h1 className="mt-5">product list</h1>
      <ul>
        {info.length > 0 && info.map((item) => (
          <li key={item.id} className="d-flex align-items-center justify-content-between mb-3  bg-secondary-subtle p-3 rounded-1">
            <div className="d-flex align-items-center gap-3">
              <h4>title:{item.title ? item.title.slice(0, 20) + "..." : undifined}</h4>
              <p>desc:{item.desc ? item.desc.slice(0, 30) + "..." : undifined}</p>
              <p>price:{item.price}</p>
            </div>
            <div>
              <button className="btn btn-warning" oneClick={() => editProdact(item)}>edit</button>
              <button className="btn btn-danger ms 3" onClick={() => deleteProdact(item.id)}>dalete</button>
            </div>
          </li>
        )),
          <>
          <div class="card" aria-hidden="true">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
              </h5>
              <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
              </p>
              <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
            </div>
          </div>

        </>
        }
    </ul>
    </div >
  )
}

export default App


