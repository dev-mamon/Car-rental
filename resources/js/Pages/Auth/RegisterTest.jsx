import React from "react";

const PENERRegister = () => {
    // Background image similar to the provided example
    const bgImage =
        "https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=2070&auto=format&fit=crop";

    return (
        <div
            className="min-h-screen w-full flex flex-col items-center justify-start bg-cover bg-center bg-fixed py-20 font-sans selection:bg-blue-500/30"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* REGISTRATION CARD */}
            <div className="w-[800px] min-h-[auto] rounded-[48px] p-[64px] flex flex-col gap-[48px] bg-white/10 backdrop-blur-[40px] border border-white/20 shadow-2xl text-white">
                {/* HEADER SECTION */}
                <header className="flex flex-col items-center gap-6 text-center">
                    <div className="flex items-center gap-3">
                        <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center font-bold text-3xl text-black">
                            PE
                        </div>
                        <span className="text-4xl font-black tracking-tighter uppercase">
                            P-ENER
                        </span>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-5xl font-bold">Sigura</h1>
                        <p className="text-gray-300 text-xl leading-relaxed max-w-lg mx-auto">
                            Complete the form below to register and access your
                            secure energy management portal.
                        </p>
                    </div>
                </header>

                {/* FORM CONTENT */}
                <form className="flex flex-col gap-[48px]">
                    {/* 1. CONTACT INFORMATION */}
                    <section className="flex flex-col gap-8">
                        <h2 className="text-2xl font-semibold border-b border-white/10 pb-4">
                            Pasado de contacto
                        </h2>

                        <div className="flex flex-col gap-3">
                            <label className="text-sm font-medium text-gray-400 ml-1">
                                Nombre completo*
                            </label>
                            <input
                                type="text"
                                placeholder="Ingrese su nombre completo"
                                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:ring-2 ring-blue-500/50 transition-all placeholder:text-gray-600"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex flex-col gap-3">
                                <label className="text-sm font-medium text-gray-400 ml-1">
                                    Teléfono*
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+123 456 7890"
                                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:ring-2 ring-blue-500/50 transition-all placeholder:text-gray-600"
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label className="text-sm font-medium text-gray-400 ml-1">
                                    Correo electrónico*
                                </label>
                                <input
                                    type="email"
                                    placeholder="usuario@correo.com"
                                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:ring-2 ring-blue-500/50 transition-all placeholder:text-gray-600"
                                />
                            </div>
                        </div>
                    </section>

                    {/* 2. APPLICATION DETAILS */}
                    <section className="flex flex-col gap-8">
                        <h2 className="text-2xl font-semibold border-b border-white/10 pb-4">
                            Aplicado
                        </h2>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex flex-col gap-3">
                                <label className="text-sm font-medium text-gray-400 ml-1">
                                    Código*
                                </label>
                                <input
                                    type="text"
                                    placeholder="Código de aplicación"
                                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:ring-2 ring-blue-500/50 transition-all placeholder:text-gray-600"
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label className="text-sm font-medium text-gray-400 ml-1">
                                    Fecha*
                                </label>
                                <input
                                    type="date"
                                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:ring-2 ring-blue-500/50 transition-all placeholder:text-gray-600 text-gray-300"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex flex-col gap-3">
                                <label className="text-sm font-medium text-gray-400 ml-1">
                                    Versión*
                                </label>
                                <select className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:ring-2 ring-blue-500/50 transition-all text-gray-300">
                                    <option value="">Seleccione versión</option>
                                    <option value="1.0">Versión 1.0</option>
                                    <option value="2.0">Versión 2.0</option>
                                    <option value="3.0">Versión 3.0</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-3">
                                <label className="text-sm font-medium text-gray-400 ml-1">
                                    Tipo*
                                </label>
                                <select className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:ring-2 ring-blue-500/50 transition-all text-gray-300">
                                    <option value="">Seleccione tipo</option>
                                    <option value="residencial">
                                        Residencial
                                    </option>
                                    <option value="comercial">Comercial</option>
                                    <option value="industrial">
                                        Industrial
                                    </option>
                                </select>
                            </div>
                        </div>
                    </section>

                    {/* 3. ADDITIONAL INFORMATION */}
                    <section className="flex flex-col gap-8">
                        <div className="flex flex-col gap-3">
                            <label className="text-sm font-medium text-gray-400 ml-1">
                                Dados*
                            </label>
                            <textarea
                                placeholder="Ingrese datos adicionales relevantes"
                                rows="4"
                                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:ring-2 ring-blue-500/50 transition-all placeholder:text-gray-600 resize-none"
                            />
                        </div>

                        <div className="flex flex-col gap-3">
                            <label className="text-sm font-medium text-gray-400 ml-1">
                                Descripción*
                            </label>
                            <textarea
                                placeholder="Describa el propósito de la aplicación"
                                rows="4"
                                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:ring-2 ring-blue-500/50 transition-all placeholder:text-gray-600 resize-none"
                            />
                        </div>

                        <div className="flex flex-col gap-3">
                            <label className="text-sm font-medium text-gray-400 ml-1">
                                Descripción adicional
                            </label>
                            <textarea
                                placeholder="Información complementaria"
                                rows="3"
                                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:ring-2 ring-blue-500/50 transition-all placeholder:text-gray-600 resize-none"
                            />
                        </div>
                    </section>

                    {/* 4. FINALIZATION */}
                    <section className="flex flex-col gap-8">
                        <h2 className="text-2xl font-semibold border-b border-white/10 pb-4">
                            Uno finalizado para
                        </h2>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex flex-col gap-3">
                                <label className="text-sm font-medium text-gray-400 ml-1">
                                    Fecha de finalización*
                                </label>
                                <input
                                    type="date"
                                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:ring-2 ring-blue-500/50 transition-all placeholder:text-gray-600 text-gray-300"
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label className="text-sm font-medium text-gray-400 ml-1">
                                    Responsable*
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nombre del responsable"
                                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:ring-2 ring-blue-500/50 transition-all placeholder:text-gray-600"
                                />
                            </div>
                        </div>

                        {/* File Upload */}
                        <div className="flex flex-col gap-3">
                            <label className="text-sm font-medium text-gray-400 ml-1">
                                Documentos adjuntos
                            </label>
                            <div className="relative">
                                <input
                                    type="file"
                                    className="w-full opacity-0 absolute h-full cursor-pointer"
                                    multiple
                                />
                                <div className="w-full bg-black/40 border-2 border-dashed border-white/20 rounded-2xl px-6 py-12 text-center hover:border-blue-500/50 transition-colors cursor-pointer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-12 w-12 mx-auto mb-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                        />
                                    </svg>
                                    <p className="text-gray-400">
                                        Arrastra archivos aquí o haz clic para
                                        subir
                                    </p>
                                    <p className="text-sm text-gray-500 mt-2">
                                        PDF, DOC, JPG (Máx. 10MB)
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Terms and Conditions */}
                        <div className="flex items-start gap-3 p-4 bg-white/5 rounded-2xl">
                            <input
                                type="checkbox"
                                id="terms"
                                className="mt-1 w-5 h-5 rounded border-white/20 bg-black/40 focus:ring-blue-500"
                            />
                            <label
                                htmlFor="terms"
                                className="text-gray-300 text-sm"
                            >
                                Acepto los términos y condiciones, y autorizo el
                                tratamiento de mis datos personales de acuerdo
                                con la política de privacidad de P-ENER Sigura.
                            </label>
                        </div>
                    </section>

                    {/* FOOTER ACTION */}
                    <footer className="flex flex-col items-center gap-8 pt-10">
                        <button
                            type="submit"
                            className="w-full py-6 bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all rounded-full text-2xl font-bold uppercase tracking-[0.2em] shadow-2xl shadow-blue-950/50"
                        >
                            Registrar +
                        </button>
                        <p className="text-gray-400 text-xl">
                            ¿Ya tiene una cuenta?{" "}
                            <a
                                href="#"
                                className="text-white font-bold underline underline-offset-8 decoration-blue-500 hover:text-blue-400"
                            >
                                Iniciar sesión
                            </a>
                        </p>
                    </footer>
                </form>
            </div>
        </div>
    );
};

export default PENERRegister;
