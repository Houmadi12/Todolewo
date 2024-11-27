import { useState } from "react"

const FormAdd = ({AddTaches}) => {
    // Pour stoker les données
    // const [stocker, setStoker] = useState([]);

    const [formData, setFormData] = useState({
        prenom: "",
        nom: "",
        tel: "",
        email: ""
    })

    // Gestion de champ
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({ 
            ...prev,
            [name]: value
        }))
    }

    // Methode pour la soumission
    const handelSubmit = (e) => {
        e.preventDefault();

        // setStoker(prev => [...prev, formData]);
        AddTaches(formData);

        // Reinitialiser le formulaire
        setFormData({
            prenom: "",
            nom: "",
            tel: "",
            email: ""
        })
    }

    return (
        <div className="border shadow-xl mt-5 w-5/12">
            <form className="max-w-full p-5" onSubmit={handelSubmit}>
                <div className="flex gap-20">
                    <div className="mb-5 w-3/6">
                        <label htmlFor="prenom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prenom</label>
                        <input
                            type="text" id="prenom"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2"
                            name="prenom"
                            value={formData.prenom}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-5 w-3/6">
                        <label htmlFor="nom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
                        <input
                            type="text" id="nom"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="flex gap-20">
                    <div className="mb-5 w-3/6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input
                            type="email" id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-5 w-3/6">
                        <label htmlFor="tel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Téléphone</label>
                        <input
                            type="number" id="tel"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2"
                            name="tel"
                            value={formData.tel}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="text-white bg-green-700 hover:bg-green-800 rounded-lg text-xl w-full py-2"
                >
                    Ajouter
                </button>
            </form>
        </div>
    )
}

export default FormAdd