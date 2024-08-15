"use client";

import { useState } from "react";
import Calendar from "../ui/components/calendar";

const specialties = [
    { id: 1, name: "Cardiología" },
    { id: 2, name: "Dermatología" },
    { id: 3, name: "Neurología" },
];

const doctors = {
    1: [{ id: 1, name: "Dr. Pérez" }, { id: 2, name: "Dra. García" }],
    2: [{ id: 3, name: "Dr. Martínez" }],
    3: [{ id: 4, name: "Dra. Rodríguez" }],
};

export default function Page() {
    const [selectedSpecialty, setSelectedSpecialty] = useState(null);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        documentId: '',
        insurance: '',
    });

    const handleSpecialtyChange = (e) => {
        setSelectedSpecialty(e.target.value);
        setSelectedDoctor(null);
    };

    const handleDoctorChange = (e) => {
        setSelectedDoctor(e.target.value);
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    return (
        <div className="flex p-4">
            {/* Lado Izquierdo */}
            <div className="w-1/2 p-4">
                <div className="mb-4">
                    <label htmlFor="specialty" className="block text-gray-800">
                        Selecciona Especialidad
                    </label>
                    <select
                        id="specialty"
                        className="block w-full mt-1 p-2 border border-gray-300 rounded-md text-gray-800"
                        value={selectedSpecialty || ""}
                        onChange={handleSpecialtyChange}
                    >
                        <option value="" disabled>Seleccione una especialidad</option>
                        {specialties.map((specialty) => (
                            <option key={specialty.id} value={specialty.id}>
                                {specialty.name}
                            </option>
                        ))}
                    </select>
                </div>

                {selectedSpecialty && (
                    <div className="mb-4">
                        <label htmlFor="doctor" className="block text-gray-800">
                            Selecciona Médico
                        </label>
                        <select
                            id="doctor"
                            className="block w-full mt-1 p-2 border border-gray-300 rounded-md text-gray-800"
                            value={selectedDoctor || ""}
                            onChange={handleDoctorChange}
                        >
                            <option value="" disabled>Seleccione un médico</option>
                            {doctors[selectedSpecialty]?.map((doctor) => (
                                <option key={doctor.id} value={doctor.id}>
                                    {doctor.name}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {/* Formulario de datos del usuario */}
                <div className="mb-4">
                    <label htmlFor="firstName" className="block text-gray-800">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="block w-full mt-1 p-2 border border-gray-300 rounded-md text-gray-800"
                    />

                    <label htmlFor="lastName" className="block text-gray-800 mt-4">
                        Apellido
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="block w-full mt-1 p-2 border border-gray-300 rounded-md text-gray-800"
                    />

                    <label htmlFor="email" className="block text-gray-800 mt-4">
                        Correo Electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="block w-full mt-1 p-2 border border-gray-300 rounded-md text-gray-800"
                    />

                    <label htmlFor="documentId" className="block text-gray-800 mt-4">
                        Documento de Identidad
                    </label>
                    <input
                        type="number"
                        id="documentId"
                        value={formData.documentId}
                        onChange={handleInputChange}
                        className="block w-full mt-1 p-2 border border-gray-300 rounded-md text-gray-800"
                    />

                    <label htmlFor="insurance" className="block text-gray-800 mt-4">
                        Obra Social
                    </label>
                    <input
                        type="text"
                        id="insurance"
                        value={formData.insurance}
                        onChange={handleInputChange}
                        className="block w-full mt-1 p-2 border border-gray-300 rounded-md text-gray-800"
                    />
                </div>
            </div>

            {/* Lado Derecho */}
            <div className="w-1/2 p-4">
                {selectedDoctor ? (
                    <div className="w-full h-[400px]">
                        <Calendar />
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <img
                            src="/images/S5.jpg"
                            alt="Placeholder"
                            className="max-w-full h-auto"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
