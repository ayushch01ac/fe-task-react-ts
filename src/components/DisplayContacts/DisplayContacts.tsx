import "./DisplayContacts.css";

export type Contact = {
  id: number;
  fullName: string;
  contact: string;
  email: string;
  address: string;
};

// export const contactsList: Contact[] = [
//   {
//     id: 1,
//     fullName: "Priya Sharma",
//     contact: "98734 8332",
//     email: "example.priya@gmail.com",
//     address: "Plot No. 57, Industrial Area Phase 2, Chandigarh, Punjab, 160002",
//   },
//   {
//     id: 2,
//     fullName: "Rahul Mehta",
//     contact: "91234 8332",
//     email: "example.rahul@example.com",
//     address:
//       "Unit 4B, MIDC Taloja, Sector 10, Navi Mumbai, Maharashtra, 410208",
//   },
//   {
//     id: 3,
//     fullName: "Sneha Rao",
//     contact: "82734 8332",
//     email: "example.sneha@example.com",
//     address:
//       "Khasra No. 432, Village Behrampur, Sector 59, Gurugram, Haryana, 122101",
//   },
//   {
//     id: 4,
//     fullName: "Tanvi Verma",
//     contact: "93734 8332",
//     email: "example.tanvi@example.com",
//     address:
//       "Building 12, Tech Park, Electronic City, Bengaluru, Karnataka, 560100",
//   },
//   {
//     id: 5,
//     fullName: "Gaurav Agarwal",
//     contact: "94234 8332",
//     email: "example.gaurav@example.com",
//     address: "Plot No. 23, Sector 15, Noida, Uttar Pradesh, 201301",
//   },
//   {
//     id: 6,
//     fullName: "Ritikka Singh",
//     contact: "86543 2109",
//     email: "example.ritika@example.com",
//     address:
//       "Flat 402, Gold Nest, Lokhandwala Complex, Andheri, Mumbai, Maharashtra, 400053",
//   },
//   {
//     id: 7,
//     fullName: "Kavya Gupta",
//     contact: "97654 3210",
//     email: "example.kavya@example.com",
//     address: "Survey No. 45, Near Railway Station, Jodhpur, Rajasthan, 342001",
//   },
// ];

function DisplayContacts({ contactsList }: { contactsList: Contact[] }) {
  return (
    <>
      <table className="contact-list">
        <thead className="heading">
          <tr>
            <th>
              <input type="checkbox" className="select" />
            </th>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Address</th>
            <th className="action">Action</th>
          </tr>
        </thead>
        <tbody>
          {contactsList.length === 0 ? (
            <tr>
              <td>No contacts match your search.</td>
            </tr>
          ) : (
            contactsList.map((c) => (
              <tr key={c.id}>
                <td>
                  <input type="checkbox" className="select" />
                </td>
                <td>{c.fullName}</td>
                <td className="contact">{c.contact}</td>
                <td>{c.email}</td>
                <td>{c.address}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}

export default DisplayContacts;
