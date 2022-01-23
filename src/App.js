import React from 'react'
import Table, {  SelectColumnFilter, AvatarCell } from './Table'  // new
import { getData } from './getData'

// const getData = () => {
//   const data = [
//     {
//       name: 'Jane Cooper',
//       email: 'jane.cooper@example.com',
//       title: 'Regional Paradigm Technician',
//       department: 'Optimization',
//       status: 'Active',
//       role: 'Admin',
//       age: 27,
//       imgUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//     },
//     {
//       name: 'Cody Fisher',
//       email: 'cody.fisher@example.com',
//       title: 'Product Directives Officer',
//       department: 'Intranet',
//       status: 'Inactive',
//       role: 'Owner',
//       age: 43,
//       imgUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//     },
//     {
//       name: 'Esther Howard',
//       email: 'esther.howard@example.com',
//       title: 'Forward Response Developer',
//       department: 'Directives',
//       status: 'Active',
//       role: 'Member',
//       age: 32,
//       imgUrl: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//     },
//     {
//       name: 'Jenny Wilson',
//       email: 'jenny.wilson@example.com',
//       title: 'Central Security Manager',
//       department: 'Program',
//       status: 'Offline',
//       role: 'Member',
//       age: 29,
//       imgUrl: 'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//     },
//     {
//       name: 'Kristin Watson',
//       email: 'kristin.watson@example.com',
//       title: 'Lean Implementation Liaison',
//       department: 'Mobility',
//       status: 'Inactive',
//       role: 'Admin',
//       age: 36,
//       imgUrl: 'https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//     },
//     {
//       name: 'Cameron Williamson',
//       email: 'cameron.williamson@example.com',
//       title: 'Internal Applications Engineer',
//       department: 'Security',
//       status: 'Active',
//       role: 'Member',
//       age: 24,
//       imgUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//     },
//   ]
//   return [...data, ...data, ...data]
// }

function App() {

  const [data, setData] = React.useState([])

  const columns = React.useMemo(() => [
    {
      Header: "Model Name",
      accessor: 'Model Name',
      linkAccessor: 'Link',
      Cell: AvatarCell,
    },
    {
      Header: "Type",
      accessor: 'Type',
      Filter: SelectColumnFilter,  // new
      filter: 'equals',
    },
    {
      Header: "Cost",
      accessor: 'Cost',
    },
    {
      Header: "Front Nozzle",
      accessor: 'Front Nozzle',
      Filter: SelectColumnFilter,  // new
      filter: 'equals',
    },
    {
      Header: "Customizable \n Spray Strength",
      accessor: 'Customizable Spray Strength',
      Filter: SelectColumnFilter,  // new
      filter: 'equals',
    },
    {
      Header: "Full Crack Coverage",
      accessor: 'Full Crack Coverage',
      Filter: SelectColumnFilter,  // new
      filter: 'equals',
    },
    {
      Header: "Heated Seat",
      accessor: 'Heated Seat',
      Filter: SelectColumnFilter,  // new
      filter: 'equals',
    },
    {
      Header: "No-stink spray",
      accessor: 'No-stink spray',
      Filter: SelectColumnFilter,  // new
      filter: 'equals',
    },
    {
      Header: "Retractable Nozzle",
      accessor: 'Retractable Nozzle',
      Filter: SelectColumnFilter,  // new
      filter: 'equals',
    },
    {
      Header: "Warm Air Dryer",
      accessor: 'Warm Air Dryer',
      Filter: SelectColumnFilter,  // new
      filter: 'equals',
    },
    {
      Header: "Self Cleaning",
      accessor: 'Self Cleaning',
      Filter: SelectColumnFilter,  // new
      filter: 'equals',
    },
    {
      Header: "Warm Water",
      accessor: 'Warm Water',
      Filter: SelectColumnFilter,  // new
      filter: 'equals',
    },
  ], [])

  // const data = React.useMemo(async () => await getData(), [])

  React.useEffect(() => {
    getData().then(setData)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-xl font-semibold">Bidet Converter Kit Table - Find what's best for you</h1>
        </div>
        <div className="mt-6">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
}

export default App;
