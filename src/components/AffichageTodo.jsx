import { MdDelete } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { IoIosEye } from "react-icons/io";

const AffichageTodo = ({ taches }) => {
    
    return (
        <div className="w-8/12 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white uppercase bg-green-600 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="py-3 pl-3">
                            Prénom
                        </th>
                        <th className="py-3">
                            Nom
                        </th>
                        <th className="py-3">
                            Email
                        </th>
                        <th className="py-3">
                            Téléphone
                        </th>
                        <th className="text-center py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        taches.map((taches,index) => {
                            return <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {taches.prenom}
                                </td>
                                <td className="font-medium text-gray-900 py-4">
                                    {taches.nom}
                                </td>
                                <td className="font-medium text-gray-900 py-4">
                                    {taches.email}
                                </td>
                                <td className="font-medium text-gray-900 py-4">
                                    {taches.tel}
                                </td>
                                <td className="flex gap-3 px-6 py-4 justify-center">
                                    <span className="text-2xl text-blue-600"><IoIosEye /></span>
                                    <span className="text-xl text-yellow-600"><TiEdit /></span>
                                    <span className="text-xl text-red-600"><MdDelete /></span>
                                </td>
                            </tr>
                        })
                    }
                    {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple MacBook Pro 17"
                        </td>
                        <td className="font-medium text-gray-900 py-4">
                            Silver
                        </td>
                        <td className="font-medium text-gray-900 py-4">
                            Laptop
                        </td>
                        <td className="font-medium text-gray-900 py-4">
                            $2999
                        </td>
                        <td className="flex gap-3 px-6 py-4 justify-center">
                          <span className="text-2xl text-blue-600"><IoIosEye /></span>
                          <span className="text-xl text-yellow-600"><TiEdit /></span>
                          <span className="text-xl text-red-600"><MdDelete /></span>
                        </td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default AffichageTodo