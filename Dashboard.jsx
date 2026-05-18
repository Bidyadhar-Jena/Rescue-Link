import axios from "axios"

function Dashboard() {
  const sendSOS = async () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const location = `${position.coords.latitude}, ${position.coords.longitude}`

      await axios.post(
        "http://localhost:5000/api/emergency/create",
        {
          user: "Omprakash",
          location,
          type: "Medical"
        }
      )

      alert("SOS Alert Sent")
    })
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-10">
        Emergency Dashboard
      </h1>

      <button
        onClick={sendSOS}
        className="bg-red-700 px-10 py-5 rounded-full text-2xl"
      >
        SOS ALERT
      </button>
    </div>
  )
}

export default Dashboard