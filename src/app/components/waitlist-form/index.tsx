"use client";

import { useActionState } from "react";
import { joinWaitlist } from "@/app/actions";

export function WaitlistForm() {
  const [state, formAction, pending] = useActionState(joinWaitlist, null);

  return (
    <form
      action={formAction}
      className="max-w-100 w-full border border-gray-200 rounded-xl p-6 flex flex-col items-center gap-6"
    >
      <h2 className="font-serif text-4xl text-center">Quer ser avisado(a)?</h2>
      <p className="max-w-80 mt-6 text-center text-sm">
        Estamos na fila de aprovação do Strava.
        <br /> Enquanto isso, você entra na nossa{" "}
        <span className="italic">(fila rs)</span>.
      </p>
      {state?.success ? (
        <p className="text-sm text-center text-[#FC4C02]">{state.message}</p>
      ) : (
        <div className="w-full mt-2 flex flex-col items-center justify-center gap-4 text-sm">
          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
          {state?.message && (
            <p className="text-xs text-red-500">{state.message}</p>
          )}
          <button
            type="submit"
            disabled={pending}
            className="w-full px-6 py-2 border rounded bg-[#FC4C02] text-white font-medium disabled:opacity-60"
          >
            {pending ? "Enviando..." : "Entrar na Lista de Espera"}
          </button>
        </div>
      )}
    </form>
  );
}
