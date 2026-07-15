/**
 * ContactSection.tsx
 *
 * Sección pública que permite al visitante
 * comunicarse con la iglesia.
 *
 * Estado actual:
 * - El formulario funciona en modo de prueba.
 * - Todavía no envía información a una base de datos.
 * - Más adelante se conectará con Supabase.
 */

import { useState } from "react";
import type { FormEvent } from "react";

import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import Button from "../ui/Button";
import Input from "../ui/Input";
import SectionTitle from "../ui/SectionTitle";
import TextArea from "../ui/TextArea";

/**
 * Información temporal de contacto.
 *
 * Antes de publicar el portal, estos datos
 * deberán reemplazarse por los datos reales.
 */
const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "(809) 000-0000",
    href: "https://wa.me/18090000000",
  },
  {
    icon: Phone,
    title: "Teléfono",
    value: "(809) 000-0000",
    href: "tel:+18090000000",
  },
  {
    icon: Mail,
    title: "Correo",
    value: "contacto@churchportal.com",
    href: "mailto:contacto@churchportal.com",
  },
  {
    icon: MapPin,
    title: "Dirección",
    value: "Dirección de la iglesia, República Dominicana",
    href: "#mapa",
  },
];

/**
 * Motivos disponibles en el formulario.
 */
const contactReasons = [
  "Quiero visitar la iglesia",
  "Necesito oración",
  "Deseo hablar con un pastor",
  "Información general",
];

/**
 * ContactSection
 *
 * Muestra:
 * - Medios directos de contacto.
 * - Motivo del mensaje.
 * - Formulario de prueba.
 * - Espacio temporal para el mapa.
 */
export default function ContactSection() {
  /**
   * Mensaje que aparece después de enviar
   * correctamente el formulario de prueba.
   */
  const [confirmationMessage, setConfirmationMessage] =
    useState("");

  /**
   * Maneja el envío temporal del formulario.
   */
  function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    /**
     * Evita que el navegador recargue la página.
     */
    event.preventDefault();

    /**
     * Muestra una confirmación temporal.
     */
    setConfirmationMessage(
      "Tu mensaje fue recibido en modo de prueba. La integración real se añadirá posteriormente.",
    );

    /**
     * Limpia los campos.
     */
    event.currentTarget.reset();
  }

  return (
    <section
      id="contacto"
      className="scroll-mt-20 bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Contacto"
          title="Estamos aquí para escucharte."
          description="Comunícate con nosotros para planificar una visita, compartir una petición de oración o recibir más información."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {/* Columna de información */}
          <div>
            <div className="grid gap-5 sm:grid-cols-2">
              {contactMethods.map((method) => {
                const Icon = method.icon;

                return (
                  <a
                    key={method.title}
                    href={method.href}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                      <Icon
                        className="h-6 w-6 text-blue-600"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-slate-900">
                      {method.title}
                    </h3>

                    <p className="mt-2 leading-6 text-slate-600">
                      {method.value}
                    </p>
                  </a>
                );
              })}
            </div>

            {/* Mapa temporal */}
            <div
              id="mapa"
              className="mt-6 flex min-h-72 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-white px-8 text-center text-slate-500"
            >
              Aquí se integrará el mapa con la ubicación
              real de la iglesia.
            </div>
          </div>

          {/* Formulario */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-slate-900">
              Envíanos un mensaje
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Selecciona el motivo del contacto y completa
              tus datos.
            </p>

            <div className="mt-8 space-y-6">
              <Input
                id="contact-name"
                name="name"
                label="Nombre"
                type="text"
                placeholder="Escribe tu nombre"
                autoComplete="name"
                required
              />

              <Input
                id="contact-email"
                name="email"
                label="Correo electrónico"
                type="email"
                placeholder="correo@ejemplo.com"
                autoComplete="email"
                required
              />

              {/* Motivo del contacto */}
              <fieldset>
                <legend className="text-sm font-semibold text-slate-800">
                  ¿Cómo podemos ayudarte?
                </legend>

                <div className="mt-3 space-y-3">
                  {contactReasons.map((reason) => (
                    <label
                      key={reason}
                      className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 transition hover:border-blue-400 hover:bg-blue-50"
                    >
                      <input
                        type="radio"
                        name="reason"
                        value={reason}
                        required
                        className="h-4 w-4 accent-blue-600"
                      />

                      <span className="text-slate-700">
                        {reason}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <TextArea
                id="contact-message"
                name="message"
                label="Mensaje"
                rows={5}
                placeholder="Escribe tu mensaje"
                required
              />
            </div>

            <Button
              type="submit"
              className="mt-8 w-full"
            >
              Enviar mensaje
            </Button>

            {confirmationMessage && (
              <p
                role="status"
                className="mt-5 rounded-xl bg-green-50 px-4 py-3 text-sm leading-6 text-green-700"
              >
                {confirmationMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}